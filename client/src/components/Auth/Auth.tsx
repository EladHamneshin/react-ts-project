import Signup from "../Signup/Signup";
import SignIn from "../SignIn/Signin";
import "./Auth.css";

type Props = {};

export default function Auth({}: Props) {
  return <div className="auth-root">
  <div className="container" id="container">
    <Signup />
    <SignIn />
  <div className="overlay-container">
      <div className="overlay">
          <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn">Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp">Sign Up</button>
          </div>
      </div>
  </div>
</div>
  </div>
}
