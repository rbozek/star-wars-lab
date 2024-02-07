// npm modules
import { Link } from 'react-router-dom'

import './ShipCard.css'

const Ship = ({starship}) => {
  return (
    <>

      <div >
        <h3>NAME: {starship.name}</h3>
        <h3>MODEL: {starship.model}</h3>
        <Link to={`/`}>
            RETURN
        </Link>
      </div>
    </>
  )
}

export default Ship