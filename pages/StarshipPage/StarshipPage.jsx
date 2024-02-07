// npm modules
import { useState, useEffect } from "react"

// services
import { getAllStarships } from "../../services/sw-api.js"

// components
import Ship from "../../components/ShipCard"

// css
import './StarshipPage.css'


const StarshipPage = () => {
  
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
      <h1> StarShipPage</h1>
      {/* <Ship/> */}
      <h1>StarShipPage!</h1>
      {starshipList.map(starship => 
        <Ship key={starship._id} starship={starship}/>
      )}
    </main>
  )
}

export default StarshipPage