import { useState, useRef, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import './Gallery.css'

// Import all gallery images
import img1 from '../../resource/_Living_ma_show.jpeg'
import img2 from '../../resource/_show1.jpeg'
import img3 from '../../resource/_yellow_show.jpeg'
import img4 from '../../resource/_LivingRoom_show.jpeg'
import img5 from '../../resource/_Living_Silver_show.jpeg'
import img6 from '../../resource/_show2.jpeg'
import img7 from '../../resource/_KitchenZeba.jpeg'
import img8 from '../../resource/_Roller_show.jpeg'
import img9 from '../../resource/_Zeba_show.jpeg'
import img10 from '../../resource/_Zeba_show1.jpeg'

const galleryImages = [
  { src: img1, altKey: 'gallery.images.livingRoom' },
  { src: img2, altKey: 'gallery.images.kitchen' },
  { src: img3, altKey: 'gallery.images.design' },
  { src: img4, altKey: 'gallery.images.silver' },
  { src: img5, altKey: 'gallery.images.yellow' },
  { src: img6, altKey: 'gallery.images.roller' },
  { src: img7, altKey: 'gallery.images.treatment1' },
  { src: img8, altKey: 'gallery.images.treatment2' },
  { src: img9, altKey: 'gallery.images.zebra' },
  { src: img10, altKey: 'gallery.images.zebra2' },
]

// Number of clones on each side for infinite effect
const CLONE_COUNT = 3

export function Gallery() {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(1)
  const sliderRef = useRef<HTMLDivElement>(null)
  const isScrolling = useRef(false)

  // Create extended array with clones at start and end
  const extendedImages = [
    // Clone last CLONE_COUNT images at the start
    ...galleryImages.slice(-CLONE_COUNT),
    // Original images
    ...galleryImages,
    // Clone first CLONE_COUNT images at the end
    ...galleryImages.slice(0, CLONE_COUNT),
  ]

  const totalOriginal = galleryImages.length
  const totalExtended = extendedImages.length

  const getItemWidth = useCallback(() => {
    if (sliderRef.current) {
      return sliderRef.current.scrollWidth / totalExtended
    }
    return 0
  }, [totalExtended])

  // Scroll to initial position (after clones)
  useEffect(() => {
    if (sliderRef.current) {
      setTimeout(() => {
        if (sliderRef.current) {
          const itemWidth = getItemWidth()
          // Start at index CLONE_COUNT + 1 (which is img2 in original array)
          sliderRef.current.scrollTo({ left: itemWidth * (CLONE_COUNT + 1), behavior: 'instant' })
        }
      }, 100)
    }
  }, [getItemWidth])

  // Handle infinite scroll - jump to real images when reaching clones
  const handleScrollEnd = useCallback(() => {
    if (!sliderRef.current || isScrolling.current) return

    const scrollLeft = sliderRef.current.scrollLeft
    const itemWidth = getItemWidth()
    const currentPos = Math.round(scrollLeft / itemWidth)

    // If scrolled to the cloned images at the start
    if (currentPos < CLONE_COUNT) {
      isScrolling.current = true
      const jumpTo = currentPos + totalOriginal
      sliderRef.current.scrollTo({ left: itemWidth * jumpTo, behavior: 'instant' })
      setTimeout(() => { isScrolling.current = false }, 50)
    }
    // If scrolled to the cloned images at the end
    else if (currentPos >= CLONE_COUNT + totalOriginal) {
      isScrolling.current = true
      const jumpTo = currentPos - totalOriginal
      sliderRef.current.scrollTo({ left: itemWidth * jumpTo, behavior: 'instant' })
      setTimeout(() => { isScrolling.current = false }, 50)
    }
  }, [getItemWidth, totalOriginal])

  const handleScroll = () => {
    if (sliderRef.current && !isScrolling.current) {
      const scrollLeft = sliderRef.current.scrollLeft
      const itemWidth = getItemWidth()
      const extendedIndex = Math.round(scrollLeft / itemWidth)

      // Convert extended index to original index
      let realIndex = (extendedIndex - CLONE_COUNT) % totalOriginal
      if (realIndex < 0) realIndex += totalOriginal

      setCurrentIndex(realIndex)
    }
  }

  // Debounced scroll end detection
  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let scrollTimeout: number

    const onScroll = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = window.setTimeout(handleScrollEnd, 150)
    }

    slider.addEventListener('scroll', onScroll)
    return () => {
      slider.removeEventListener('scroll', onScroll)
      clearTimeout(scrollTimeout)
    }
  }, [handleScrollEnd])

  const handlePrev = () => {
    if (sliderRef.current) {
      const itemWidth = getItemWidth()
      sliderRef.current.scrollBy({ left: -itemWidth, behavior: 'smooth' })
    }
  }

  const handleNext = () => {
    if (sliderRef.current) {
      const itemWidth = getItemWidth()
      sliderRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' })
    }
  }

  const scrollToIndex = (index: number) => {
    if (sliderRef.current) {
      const itemWidth = getItemWidth()
      // Add CLONE_COUNT to account for cloned images at start
      sliderRef.current.scrollTo({ left: itemWidth * (index + CLONE_COUNT), behavior: 'smooth' })
    }
  }

  return (
    <section className="gallery">
      <div className="gallery-container">
        <button
          className="gallery-nav gallery-nav--prev"
          onClick={handlePrev}
          aria-label={t('gallery.nav.previous')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div
          className="gallery-slider"
          ref={sliderRef}
          onScroll={handleScroll}
        >
          {extendedImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={t(image.altKey)} />
            </div>
          ))}
        </div>

        <button
          className="gallery-nav gallery-nav--next"
          onClick={handleNext}
          aria-label={t('gallery.nav.next')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="gallery-dots">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            className={`gallery-dot ${index === currentIndex ? 'gallery-dot--active' : ''}`}
            onClick={() => scrollToIndex(index)}
            aria-label={`${t('gallery.nav.goToSlide')} ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
