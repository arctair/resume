import { Link, Route, Routes } from 'react-router-dom'
import Generic from './resumes/Generic'
import Mojang from './resumes/Mojang'
import Prime from './resumes/Prime'

export default function App() {
  return (
    <Routes>
      <Route path="/mojang" element={<Mojang />} />
      <Route path="/prime" element={<Prime />} />
      <Route path="/generic" element={<Generic />} />
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
            <Link to="/generic" style={{ display: 'block' }}>
              generic
            </Link>
          </>
        }
      />
    </Routes>
  )
}
