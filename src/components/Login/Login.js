import LoginForm from "./LoginForm";
import SignUp from "./SignUp";
const Login = (props) => {
  return <div>{props.signup ? <SignUp /> : <LoginForm />}</div>;
};

export default Login;
