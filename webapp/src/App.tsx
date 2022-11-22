import { Link, Route, Routes } from 'react-router-dom'
import Mojang from './resumes/Mojang'
import Prime from './resumes/Prime'

export default function App() {
  return (
    <Routes>
      <Route path="/mojang" element={<Mojang />} />
      <Route path="/prime" element={<Prime />} />
      <Route
        path="*"
        element={
          <>
            <Link to="/mojang" style={{ display: 'block' }}>
              mojang
            </Link>
            <Link to="/prime" style={{ display: 'block' }}>
              prime
            </Link>
          </>
        }
      />
    </Routes>
  )
}
