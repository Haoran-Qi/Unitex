import { useState, useRef, useEffect } from 'react'
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
  { src: img1, alt: 'Living Room Curtains' },
  { src: img2, alt: 'Kitchen Zebra Blinds' },
  { src: img3, alt: 'Living Room Design' },
  { src: img4, alt: 'Silver Curtains' },
  { src: img5, alt: 'Yellow Curtains' },
  { src: img6, alt: 'Roller Blinds' },
  { src: img7, alt: 'Window Treatment 1' },
  { src: img8, alt: 'Window Treatment 2' },
  { src: img9, alt: 'Zebra Blinds' },
  { src: img10, alt: 'Zebra Blinds 2' },
]

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(1) // Start at img2
  const sliderRef = useRef<HTMLDivElement>(null)

  const scrollAmount = 400 // pixels to scroll

  // Scroll to img2 on mount
  useEffect(() => {
    if (sliderRef.current) {
      // Small delay to ensure the slider is rendered
      setTimeout(() => {
        if (sliderRef.current) {
          const itemWidth = sliderRef.current.scrollWidth / galleryImages.length
          sliderRef.current.scrollTo({ left: itemWidth * 1, behavior: 'instant' })
        }
      }, 100)
    }
  }, [])

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    }
  }

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft
      const itemWidth = sliderRef.current.scrollWidth / galleryImages.length
      const newIndex = Math.round(scrollLeft / itemWidth)
      setCurrentIndex(newIndex)
    }
  }

  return (
    <section className="gallery">
      <div className="gallery-container">
        <button 
          className="gallery-nav gallery-nav--prev" 
          onClick={handlePrev}
          aria-label="Previous images"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        <div 
          className="gallery-slider" 
          ref={sliderRef}
          onScroll={handleScroll}
        >
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>

        <button 
          className="gallery-nav gallery-nav--next" 
          onClick={handleNext}
          aria-label="Next images"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

      <div className="gallery-dots">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            className={`gallery-dot ${index === currentIndex ? 'gallery-dot--active' : ''}`}
            onClick={() => {
              if (sliderRef.current) {
                const itemWidth = sliderRef.current.scrollWidth / galleryImages.length
                sliderRef.current.scrollTo({ left: itemWidth * index, behavior: 'smooth' })
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

