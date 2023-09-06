import { SubmitHandler, useForm } from "react-hook-form"
import User from "../../models/User"
import { loginUser } from "../../services/userService"

type Props = {}

export default function UserLogin({}: Props) {
  const { register, handleSubmit } = useForm<User>()
  const onSubmit: SubmitHandler<User> = (user) => loginUser(user).then((user) => console.log(user)).catch((err) => console.log(err.message))

  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='email' {...register("email") }  />
      <input type='password' placeholder='password' {...register("password")} />
      <input type='submit' value='Submit' />
    </form>
    </div>
 
  )
}