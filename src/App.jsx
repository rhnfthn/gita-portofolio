import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Achievment from './pages/Experience.jsx'
import ContactMe from './pages/ContactMe.jsx'

export default function App() {
  return (
    <div className="min-h-dvh text-zinc-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/achievment" element={<Achievment />} />
        <Route path="/experience" element={<Navigate to="/achievment" replace />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}
