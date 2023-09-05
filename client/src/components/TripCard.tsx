import Trip from '../types/Trip'

type Props = {trip: Trip}

export default function TripCard(props: Props) {
  return (
    <div className='trip-card'>
        <img className='trip-card-image' src={props.trip.image} alt={props.trip.name} />
        <p className='trip-card-title'>{props.trip.name}</p>
        <p className='trip-card-description'>{props.trip.destination}</p>
        <p className='trip-card-date'>{`from ${props.trip.startDate} to ${props.trip.endDate}`}</p>
    </div>
  )
}