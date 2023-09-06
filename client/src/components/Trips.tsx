import { useState } from 'react'
import {getTrips} from '../services/tripService.ts'
import Trip from '../models/Trip.ts';
import TripCard from './TripCard.tsx';

type Props = {}

export default function Trips({}: Props) {
  const [trips, setTrips] = useState<Trip[]>([])

  getTrips().then((trips) => {
    setTrips(trips)
  });


  return (
    <div className='trips-root'>
      <div className='trips-title'>Trips</div>
      <div className='trips-list'>  {trips.map((trip) => { return <TripCard key={trip.id} trip={trip}/>})} </div>
    </div>
  )
}