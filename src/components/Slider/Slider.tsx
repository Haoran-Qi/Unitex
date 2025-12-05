import { useState } from 'react'
import './Slider.css'
import slide1 from "../../images/slide1.avif"
import slide2 from "../../images/slide2.avif"
import slide3 from "../../images/slide3.avif"
import slide4 from "../../images/slide4.avif"
import slide5 from "../../images/slide5.avif"
import slide6 from "../../images/slide6.avif"
import slide7 from "../../images/slide7.avif"
import slide8 from "../../images/slide8.avif"
import slide9 from "../../images/slide9.avif"

export function Slider() {
  const slides = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9,
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [transitionDirection, setTransitionDirection] = useState('') 

 
  const getDisplayIndices = () => {
    const total = slides.length
    return {
      left: (currentIndex - 1 + total) % total,
      center: currentIndex,
      right: (currentIndex + 1) % total,
    }
  }

  const nextSlide = () => {
    if (transitionDirection) return 
    
    setTransitionDirection('left') 
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
      setTransitionDirection('')
    }, 300) 
  }

  const prevSlide = () => {
    if (transitionDirection) return
    
    setTransitionDirection('right') 
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
      setTransitionDirection('')
    }, 300)
  }

  const indices = getDisplayIndices()

  return (
    <div className="slider-container">
      <div className="slider-track">
        <div 
          className={`slide slide-left ${transitionDirection === 'right' ? 'sliding-right' : ''}`}
          onClick={prevSlide}
          style={{ 
            backgroundImage: `url(${slides[indices.left]})`,
          }}
        />

        <div 
          className={`slide slide-center ${transitionDirection ? `sliding-${transitionDirection}` : ''}`}
          style={{ 
            backgroundImage: `url(${slides[indices.center]})`,
          }}
        />

        <div 
          className={`slide slide-right ${transitionDirection === 'left' ? 'sliding-left' : ''}`}
          onClick={nextSlide}
          style={{ 
            backgroundImage: `url(${slides[indices.right]})`,
          }}
        />
      </div>

      <button 
        className="nav-btn nav-prev" 
        onClick={prevSlide}
        disabled={!!transitionDirection}
      >
        ‹
      </button>
      
      <button 
        className="nav-btn nav-next" 
        onClick={nextSlide}
        disabled={!!transitionDirection}
      >
        ›
      </button>


    </div>
  )
}