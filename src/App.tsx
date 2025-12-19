import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { DesignPage } from './pages/DesignPage'
import { BookPage } from './pages/BookPage'
import { ProjectPage } from './pages/ProjectPage'
// import { ContactPage } from './pages/ContactPage'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<DesignPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/book" element={<BookPage />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
