// npm modules
import { Link } from 'react-router-dom'

import './ShipCard.css'

const Ship = ({starship}) => {
  return (
    <>
      {/* <h1>Ship Card</h1>
       */}
      <div className="starship-card" >
      <h2>{starship.name}</h2>
      <div>
        <Link to='/starships/details' state={{starship}}><button>useLocation</button></Link>
        <Link to={`/starships/${starship.url.match(/\d+/)}`}><button>useParams</button></Link>
      </div>
    </div>
    </>
  )
}

export default Ship