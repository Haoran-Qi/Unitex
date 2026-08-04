const BUSINESS_QUERY =
  'Unitex Design Curtains & Blinds, 370 Hwy 7 unit 105c, Richmond Hill, ON L4B 0C4, Canada'

const FIELD_MASK = [
  'places.id',
  'places.displayName',
  'places.googleMapsUri',
  'places.rating',
  'places.userRatingCount',
  'places.reviews',
  'places.photos',
].join(',')

export default async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET')
    return response.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = request.googlePlacesApiKey || process.env.GOOGLE_PLACES_API_KEY
  if (!apiKey) {
    return response.status(503).json({ error: 'Google reviews are not configured' })
  }

  const requestedLanguage = Array.isArray(request.query.language)
    ? request.query.language[0]
    : request.query.language
  const languageCode = requestedLanguage === 'zh-CN' ? 'zh-CN' : 'en'

  try {
    const googleResponse = await fetch('https://places.googleapis.com/v1/places:searchText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': FIELD_MASK,
      },
      body: JSON.stringify({
        textQuery: BUSINESS_QUERY,
        languageCode,
        regionCode: 'CA',
        pageSize: 1,
      }),
    })

    if (!googleResponse.ok) {
      const details = await googleResponse.text()
      console.error('Google Places API error:', googleResponse.status, details)
      return response.status(502).json({ error: 'Unable to load Google reviews' })
    }

    const result = await googleResponse.json()
    const place = result.places?.[0]

    if (!place) {
      return response.status(404).json({ error: 'Google business listing not found' })
    }

    const reviews = (place.reviews ?? [])
      .filter((review) => review.text?.text)
      .map((review, index) => ({
        id: review.name ?? `${place.id}-${index}`,
        author: review.authorAttribution?.displayName ?? 'Google user',
        authorUrl: review.authorAttribution?.uri,
        photoUrl: review.authorAttribution?.photoUri,
        rating: review.rating ?? 5,
        text: review.text.text,
        publishedAt: review.publishTime ?? '',
        relativeTime: review.relativePublishTimeDescription ?? '',
        reviewUrl: review.googleMapsUri ?? place.googleMapsUri,
      }))
      .sort((firstReview, secondReview) => {
        const firstPublishedAt = Date.parse(firstReview.publishedAt) || 0
        const secondPublishedAt = Date.parse(secondReview.publishedAt) || 0
        return secondPublishedAt - firstPublishedAt
      })

    const photos = (place.photos ?? []).slice(0, 10).map((photo, index) => {
      const attribution = photo.authorAttributions?.[0]

      return {
        id: photo.name ?? `${place.id}-photo-${index}`,
        url: `/api/google-photo?name=${encodeURIComponent(photo.name)}`,
        width: photo.widthPx,
        height: photo.heightPx,
        googleMapsUrl: photo.googleMapsUri ?? place.googleMapsUri,
        author: attribution?.displayName,
        authorUrl: attribution?.uri,
      }
    })

    response.setHeader('Cache-Control', 'no-store')
    return response.status(200).json({
      rating: place.rating ?? 5,
      totalReviews: place.userRatingCount ?? reviews.length,
      reviews,
      photos,
    })
  } catch (error) {
    console.error('Google reviews request failed:', error)
    return response.status(500).json({ error: 'Unable to load Google reviews' })
  }
}
