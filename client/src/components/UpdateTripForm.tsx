import React from 'react'
import { useParams } from 'react-router-dom'
import Trip from '../models/Trip'
import { getTrip, updateTrip } from '../services/tripService'
import { SubmitHandler, useForm } from 'react-hook-form'

export default function UpdateTripForm() {
  const { id } = useParams()
  const form = useForm<Trip>()
  const onSubmit: SubmitHandler<Trip> = (trip) => updateTrip(trip).then((trip) => console.log(trip)).catch((err) => console.log(err.message))

  React.useEffect(() => {
    if (!id) return
    getTrip(id).then((trip) => {
      form.reset(trip)
    })
  }, [id])

  const { register, handleSubmit } = form

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name") }/>
        <input {...register("description") } />
        <input {...register("destination") } />
        <input {...register("startDate") }/>
        <input {...register("endDate") }/>
        <input type='url'  {...register("image") }/>
        <input type='number' {...register("price") }/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}