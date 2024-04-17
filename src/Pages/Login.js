import "./Scss/Login.scss"
import Robo from "../Components/Robo/Robo"
import SideContact from "../Components/Contect/SideContect";
import robo from "./static/robot-with-clipboard.jpg"
import { Link } from "react-router-dom";
const Login=({tp,pt,tx})=>{
    const isDesktop=window.innerWidth>=1001
    return(<div id="Login">
 <Robo img={robo} />
 <SideContact/>
 <div id={isDesktop?"FormDivD":"FormDivM"}>
    <h1>{tp}</h1>
    <div>
<input type="email" placeholder="Email"/>
<input type="text" placeholder="Name" />
<input type="password" placeholder="Password" />
<input type="submit" placeholder="Submit"/>
<div>
 <p>{tx}</p><Link
  to={`${pt}`}
//   to="/signup"
  >Signup</Link>
</div>


    </div>

 </div>



    </div>)
}

export default Login;