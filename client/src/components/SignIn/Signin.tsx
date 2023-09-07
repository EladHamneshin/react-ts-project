import './Signin.css'
import { SubmitHandler, useForm } from "react-hook-form"
import User from "../../models/User"
import { loginUser } from "../../services/userService"
import { useNavigate } from 'react-router-dom';

type Props = {};

export default function SignIn({}: Props) {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<User>()
  const onSubmit: SubmitHandler<User> = (user) => loginUser(user).then(() => navigate("/")).catch((err) => console.log(err.message))

  
  return <div className="form-container sign-in-container">
  <form action="#" onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign in</h1>
      <div className="social-container">
          <a href="#" className="social"><i className="fa fa-github"></i></a>
          <a href="#" className="social"><i className="fa fa-google"></i></a>
          <a href="#" className="social"><i className="fa fa-linkedin"></i></a>
      </div>
      <span>or use your account</span>
      <input type="email" placeholder="Email" {...register("email") }/>
      <input type="password" placeholder="Password" {...register("password")}/>
      <a href="#">Forgot your password?</a>
      <button type='submit'>Sign In</button>
  </form>
</div>;
}
