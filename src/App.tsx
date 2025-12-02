import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/services" element={<HomePage />} />
        <Route path="/book" element={<HomePage />} />
        <Route path="/contact" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
