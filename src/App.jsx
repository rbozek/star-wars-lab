// npm modules
import { Route, Routes, useNavigate } from 'react-router-dom'

//css
import './App.css'

//components
import StarshipPage from "../pages/StarshipPage/StarshipPage"

function App() {

  return (
    <main>
      {/* <StarshipPage/> */}
        <Routes>
          <Route path='/' element={<StarshipPage />}/>
        </Routes>
    </main>
  )
}

export default App

