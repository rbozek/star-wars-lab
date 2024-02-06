import { useState, useEffect } from 'react'
import './App.css'
import { Link } from "react-router-dom"

// services
import { getAllStarships } from '../services/sw-api'

function App() {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      // make an API call
      const starshipData = await getAllStarships()

      // set state to the result from that call (data!)
      // DIFFERENT than DND! Data coming back from DB had nested property!! (have to look at data to see it should be .results)
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
    console.log('test 2nd',starshipList);
  }, [])
  // console.log('test '+starshipList);

  if(!starshipList.length) return <h1>Loading...</h1>

  return (
    <main>
      <h1>Test!</h1>
      {/* {console.log('testing '+starshipList)} */}
      {/* {Object.entries(starshipList).map(starship =>  */}
      {starshipList.map(starship => 
        <button className="starship-card" key={starship._id}>
          <h3>{starship.name}</h3>

        </button>
      )}
      
    </main>
  )
}

export default App

