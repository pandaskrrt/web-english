import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Intership from './components/homepages/Intership'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/intership" element={<Intership />} />
    </Routes>
  )
}

export default App
