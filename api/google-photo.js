export default async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET')
    return response.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = request.googlePlacesApiKey || process.env.GOOGLE_PLACES_API_KEY
  const photoName = Array.isArray(request.query.name) ? request.query.name[0] : request.query.name

  if (!apiKey) {
    return response.status(503).json({ error: 'Google photos are not configured' })
  }

  if (!photoName || !/^places\/[A-Za-z0-9_-]+\/photos\/[A-Za-z0-9_-]+$/.test(photoName)) {
    return response.status(400).json({ error: 'Invalid Google photo reference' })
  }

  try {
    const googleResponse = await fetch(
      `https://places.googleapis.com/v1/${photoName}/media?maxWidthPx=1200&skipHttpRedirect=true`,
      { headers: { 'X-Goog-Api-Key': apiKey } },
    )

    if (!googleResponse.ok) {
      const details = await googleResponse.text()
      console.error('Google Place Photo API error:', googleResponse.status, details)
      return response.status(502).json({ error: 'Unable to load Google photo' })
    }

    const photo = await googleResponse.json()
    if (!photo.photoUri) {
      return response.status(404).json({ error: 'Google photo not found' })
    }

    response.statusCode = 302
    response.setHeader('Location', photo.photoUri)
    response.setHeader('Cache-Control', 'no-store')
    response.end()
    return response
  } catch (error) {
    console.error('Google photo request failed:', error)
    return response.status(500).json({ error: 'Unable to load Google photo' })
  }
}
