import { useState } from 'react'
import {getTrips} from '../../services/tripService.ts'
import Trip from '../../models/Trip.ts';
import TripCard from '../TripCard/TripCard.tsx';
import NavBarLink from '../../routes/NavBarLink.tsx';
import './Trips.css'

type Props = {}

export default function Trips({}: Props) {
  const [trips, setTrips] = useState<Trip[]>([])

  getTrips().then((trips) => {
    setTrips(trips)
  }).catch((err) => console.log(err.message));


  return (
    <div className='trips-root'>
      <NavBarLink to={`/trip/create`}>
      <button >Add Trip</button>
      </NavBarLink>
      <div className='trips-title'>Trips</div>
      <div className='trips-list'>  {trips.map((trip) => { return <TripCard key={trip.id} trip={trip}/>})} </div>
    </div>
  )
}