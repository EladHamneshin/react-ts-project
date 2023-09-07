import "./Signup.css";
import { SubmitHandler, useForm } from 'react-hook-form'
import User from '../../models/User'
import { registerUser } from '../../services/userService'



type Props = {};

export default function Signup({}: Props) {
  const { register, handleSubmit } = useForm<User>()
  const onSubmit: SubmitHandler<User> = (user) => registerUser(user).then((user) => console.log(user)).catch((err) => console.log(err.message))

  return 	<div className="form-container sign-up-container">
  <form action="#" onSubmit={handleSubmit(onSubmit)}>
      <h1>Create Account</h1>
      <div className="social-container">
      <a href="#" className="social"><i className="fa fa-github"></i></a>
      <a href="#" className="social"><i className="fa fa-google"></i></a>
      <a href="#" className="social"><i className="fa fa-linkedin"></i></a>      </div>
      <span>or use your email for registration</span>
      <input type="email" placeholder="Email"  {...register("email") }/>
      <input type="password" placeholder="Password" {...register("password")}/>
      <button type="submit" >Sign Up</button>
  </form>
</div>;
}

