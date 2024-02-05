import { useState, useEffect } from 'react'
import './App.css'

// services
import { getAllStarships } from '../services/sw-api'

function App() {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      // make an API call
      const starshipData = await getAllStarships()
      // set state to the result from that call (data!)
      setStarshipList(starshipData)
    }
    fetchStarshipList()
    // console.log('test '+starshipList);
  }, [])
  // console.log('test '+starshipList);


  return (
    <main>
      <h1>Test!</h1>
      {/* {console.log('testing '+starshipList)} */}
      {starshipList.map(starship => 
        <div className="starship-card" key={starship._id}>
          <p>{starship.name}</p>
        </div>
      )}
      
    </main>
  )
}

export default App

