// npm modules
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Route, Routes, useNavigate } from 'react-router-dom'

// services
import { getAllStarships } from "../../services/sw-api.js"


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
    // console.log('test 2nd',starshipList);
  }, [])

  if(!starshipList.length) return <h1>Loading...</h1>

  return (
    <main>
        {starshipList.map(starship => 
          <div key={starship._id}  className="starship-card">
            <Link
              key={starship._id}
              to={`/starshipdeets/${starship.url.match(/\d+/)}`}
            >
                <div>
                  <h2>{starship.name}</h2>
                </div>
            </Link>
          </div>
        )}
    </main>
  )
}

export default StarshipPage