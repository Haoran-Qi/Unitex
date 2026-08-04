import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './GoogleReviews.css'

const GOOGLE_REVIEWS_URL = 'https://maps.google.com/?cid=5459222830920556937'
const PHOTOS_PER_REVIEW = 3

type GoogleReview = {
  id: string
  author: string
  authorUrl?: string
  photoUrl?: string
  rating: number
  text: string
  publishedAt: string
  relativeTime: string
  reviewUrl?: string
}

type GooglePhoto = {
  id: string
  url: string
  width?: number
  height?: number
  googleMapsUrl?: string
  author?: string
  authorUrl?: string
}

type GoogleReviewsResponse = {
  rating: number
  totalReviews: number
  reviews: GoogleReview[]
  photos: GooglePhoto[]
}

export function GoogleReviews() {
  const { t, i18n } = useTranslation()
  const sliderRef = useRef<HTMLDivElement>(null)
  const [data, setData] = useState<GoogleReviewsResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const controller = new AbortController()
    const language = i18n.language.startsWith('zh') ? 'zh-CN' : 'en'

    setIsLoading(true)
    setHasError(false)

    fetch(`/api/google-reviews?language=${language}`, { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error('Unable to load Google reviews')
        return response.json() as Promise<GoogleReviewsResponse>
      })
      .then((reviewsData) => {
        setData(reviewsData)
        setCurrentIndex(0)
        sliderRef.current?.scrollTo({ left: 0, behavior: 'instant' })
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === 'AbortError') return
        setHasError(true)
      })
      .finally(() => {
        if (!controller.signal.aborted) setIsLoading(false)
      })

    return () => controller.abort()
  }, [i18n.language])

  const reviews = data?.reviews ?? []
  const displayedRating = data?.rating?.toFixed(1) ?? '5.0'

  const scrollToReview = (index: number) => {
    const slider = sliderRef.current
    if (!slider || reviews.length === 0) return

    const nextIndex = (index + reviews.length) % reviews.length
    slider.scrollTo({ left: slider.clientWidth * nextIndex, behavior: 'smooth' })
    setCurrentIndex(nextIndex)
  }

  const handleScroll = () => {
    const slider = sliderRef.current
    if (!slider || slider.clientWidth === 0) return
    setCurrentIndex(Math.round(slider.scrollLeft / slider.clientWidth))
  }

  return (
    <section className="google-reviews" aria-labelledby="google-reviews-title">
      <div className="google-reviews__inner">
        <header className="google-reviews__header">
          <div className="google-reviews__summary">
            <div className="google-reviews__brand" aria-label="Google">
              <span className="google-reviews__g">G</span>
              <span>Google Reviews</span>
            </div>
            <div className="google-reviews__score-row">
              <strong className="google-reviews__score">{displayedRating}</strong>
              <div>
                <div className="google-reviews__stars" aria-label={t('googleReviews.fiveStars')}>
                  {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} aria-hidden="true">★</span>
                  ))}
                </div>
                {data && (
                  <p className="google-reviews__count">
                    {t('googleReviews.reviewCount', { count: data.totalReviews })}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="google-reviews__intro">
            <p className="google-reviews__eyebrow">{t('googleReviews.eyebrow')}</p>
            <h2 id="google-reviews-title" className="google-reviews__title">
              {t('googleReviews.titleBefore')}
              <span className="google-reviews__title-number">500+</span>
              {t('googleReviews.titleAfter')}
            </h2>
            <p className="google-reviews__description">{t('googleReviews.description')}</p>
          </div>

          <a
            className="google-reviews__button"
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('googleReviews.writeReview')}
            <span aria-hidden="true">↗</span>
          </a>
        </header>

        <div className="google-reviews__carousel">
          {reviews.length > 1 && (
            <button
              className="google-reviews__nav google-reviews__nav--prev"
              type="button"
              onClick={() => scrollToReview(currentIndex - 1)}
              aria-label={t('googleReviews.previous')}
            >
              <span aria-hidden="true">‹</span>
            </button>
          )}

          <div
            className="google-reviews__slider"
            ref={sliderRef}
            onScroll={handleScroll}
            aria-live="polite"
          >
            {isLoading && (
              <div className="google-review google-review--status">
                <span className="google-reviews__loader" aria-hidden="true" />
                <p>{t('googleReviews.loading')}</p>
              </div>
            )}

            {!isLoading && reviews.map((review, reviewIndex) => {
              const photos = data?.photos ?? []
              const reviewPhotos = photos.length > 0
                ? Array.from(
                    { length: Math.min(PHOTOS_PER_REVIEW, photos.length) },
                    (_, photoIndex) => photos[(reviewIndex * PHOTOS_PER_REVIEW + photoIndex) % photos.length],
                  )
                : []

              return (
                <article className={`google-review ${reviewPhotos.length > 0 ? '' : 'google-review--text-only'}`} key={review.id}>
                  {reviewPhotos.length > 0 && (
                    <div className="google-review__photo-gallery">
                      {reviewPhotos.map((photo, photoIndex) => (
                        <div className="google-review__photo" key={`${photo.id}-${photoIndex}`}>
                          <a
                            className="google-review__photo-image"
                            href={photo.googleMapsUrl ?? GOOGLE_REVIEWS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={t('googleReviews.viewPhotoOnGoogle')}
                          >
                            <img src={photo.url} alt={t('googleReviews.businessPhoto')} loading="lazy" />
                          </a>
                          {photoIndex === 0 && (
                            <span className="google-review__photo-source">{t('googleReviews.googleProfilePhoto')}</span>
                          )}
                          {photo.author && (
                            <span className="google-review__photo-credit">
                              {t('googleReviews.photoBy')}{' '}
                              {photo.authorUrl ? (
                                <a href={photo.authorUrl} target="_blank" rel="noopener noreferrer">
                                  {photo.author}
                                </a>
                              ) : photo.author}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="google-review__content">
                    <div className="google-review__author-row">
                      {review.photoUrl ? (
                        <img
                          className="google-review__avatar"
                          src={review.photoUrl}
                          alt=""
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <span className="google-review__avatar google-review__avatar--fallback" aria-hidden="true">
                          {review.author.charAt(0)}
                        </span>
                      )}
                      <div>
                        <h3 className="google-review__author">
                          {review.authorUrl ? (
                            <a href={review.authorUrl} target="_blank" rel="noopener noreferrer">
                              {review.author}
                            </a>
                          ) : review.author}
                        </h3>
                        <p className="google-review__date">{review.relativeTime}</p>
                      </div>
                      <span className="google-review__google" aria-label="Google">G</span>
                    </div>

                    <div className="google-review__stars" aria-label={`${review.rating} / 5`}>
                      {Array.from({ length: 5 }, (_, index) => (
                        <span key={index} className={index < review.rating ? '' : 'is-empty'} aria-hidden="true">★</span>
                      ))}
                    </div>
                    <p className="google-review__text">{review.text}</p>
                    {review.reviewUrl && (
                      <a className="google-review__link" href={review.reviewUrl} target="_blank" rel="noopener noreferrer">
                        {t('googleReviews.viewOnGoogle')}
                      </a>
                    )}
                  </div>
                </article>
              )
            })}

            {!isLoading && (hasError || reviews.length === 0) && (
              <div className="google-review google-review--status">
                <p>{t('googleReviews.unavailable')}</p>
                <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
                  {t('googleReviews.readReviews')}
                </a>
              </div>
            )}
          </div>

          {reviews.length > 1 && (
            <button
              className="google-reviews__nav google-reviews__nav--next"
              type="button"
              onClick={() => scrollToReview(currentIndex + 1)}
              aria-label={t('googleReviews.next')}
            >
              <span aria-hidden="true">›</span>
            </button>
          )}
        </div>

        {reviews.length > 1 && (
          <div className="google-reviews__pagination" aria-label={t('googleReviews.pagination')}>
            {reviews.map((review, index) => (
              <button
                key={review.id}
                className={index === currentIndex ? 'is-active' : ''}
                type="button"
                onClick={() => scrollToReview(index)}
                aria-label={t('googleReviews.goToReview', { number: index + 1 })}
                aria-current={index === currentIndex ? 'true' : undefined}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
