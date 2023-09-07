import NavBarLink from '../../routes/NavBarLink';
import Trip from '../../models/Trip'
import { deleteTrip } from '../../services/tripService';
import './TripCard.css'

type Props = {trip: Trip}

export default function TripCard(props: Props) {
  return (
    <div className='trip-card'>
    <NavBarLink to={`/trip/${props.trip.id}`}>
      <img  src={props.trip.image} alt={props.trip.name} />
      <p>{props.trip.name}</p>
      <p>{props.trip.destination}</p>
      <p>{`from ${props.trip.startDate} to ${props.trip.endDate}`}</p>
    </NavBarLink>

    <NavBarLink to={`/trip/update/${props.trip.id}`}>
        <button >edit</button>
    </NavBarLink>
    <button onClick={()=>{deleteTrip(props.trip.id).then(()=>{window.location.reload()})
  .catch((error)=> console.log(error.message))}} >delete</button>
    </div>
  )
}