// npm modules
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { getStarshipData } from '../services/sw-api'

import './ShipCard.css'

const ShipCard = () => {
  const [shipDetails, setShipDetails] = useState({})
  const { shipId } = useParams()

  useEffect(() => {
    const fetchShipDetails = async () => {
      const starshipData = await getStarshipData(shipId)
      setShipDetails(starshipData)
    }
    fetchShipDetails()
    // console.log('test shipId', shipId);
  }, [shipId])


  return (
    <div className="starship-card">
        {/* <h1>Testing ShipCard!</h1> */}
        <h3>NAME: {shipDetails.name}</h3>
        <h3>MODEL: {shipDetails.model}</h3>
        <Link to={`/`}>RETURN</Link>
    </div>
  )
}

export default ShipCard