// npm modules
import { Route, Routes, Router, useNavigate } from 'react-router-dom'

//css
import './App.css'

//components
import StarshipPage from "../pages/StarshipPage/StarshipPage"
import ShipCard from '../components/ShipCard'

function App() {
  return (
    <main>
      {/* <StarshipPage/> */}
      {/* // wrap whole card in a link */}
        <Routes>
          <Route path='/' element={<StarshipPage />}/>
          <Route path='/starshipdeets/:starshipId'  element={<ShipCard  />} />
        </Routes>
    </main>
  )
}

export default App

