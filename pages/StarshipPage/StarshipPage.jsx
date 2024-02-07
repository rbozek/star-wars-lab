// npm modules
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

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
        {starshipList.map(starship => 
          <div key={starship._id} className="starship-card">
            <Link to={`/${starship.url}`}>
              <Ship key={starship._id} starship={starship}/>
            </Link>
          </div>
        )}
    </main>
  )
}

export default StarshipPage