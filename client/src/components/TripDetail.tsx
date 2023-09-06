import React from 'react'
import { getTrip } from '../services/tripService'
import Trip from '../models/Trip'
import { useParams } from 'react-router-dom'

type Props = {}

export default function TripDetail({}: Props) {

  const { id } = useParams()
  const [trip, setTrip] = React.useState<Trip | null>(null)

  React.useEffect(() => {
    if (!id) return
    getTrip(id).then((trip) => {
      setTrip(trip)
    }).catch((err) => console.log(err.message))
  }, [id])

  if (!trip) return <div>loading...</div>
  return (
    <div className='trip-detail-root' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${trip.image})`}}>
      <h1>{trip.name}</h1>
      <h3 >{trip.description}</h3>
      <p >{trip.destination}</p>
      <p>{trip.price}</p>
      <p>{`from ${trip.startDate} to ${trip?.endDate}`}</p>
    </div>

  )
}