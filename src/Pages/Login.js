import "./Scss/Login.scss";
import Robo from "../Components/Robo/Robo";
import SideContact from "../Components/Contect/SideContect";
import robo from "./static/rgister.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import fatchApi from "../FatchMathodes/fatch";
const Login = ({ tp, pt, tx, state, gtt }) => {

  const isDesktop = window.innerWidth >= 1001;
  const lData = {};

  // const { setUserData } = state;
  const [isEValid, setIsValid] = useState(true);
  const [isPValid, setIsPValid] = useState(true);
  const [warning, setWarning] = useState("ok");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const url = "http://localhost:3000/users";

  
  
  
  const onSubmit=async()=>{
   const  response=await fatchApi(url,{},"POST",lData)
   console.log(response)
   if (response.token) {
    // Set a Cookie
    Cookies.set("tkn", response.token, { expires: 1, path: "/" });
  }
  }
  
  
  
  

  const inptvlue = (e) => {
    let name = e.target.name;
    lData[name] = e.target.value;
  };

  return (
    <div id="Login">
      <Robo img={robo} />
      <SideContact />
      <div id={isDesktop ? "FormDivD" : "FormDivM"}>
        <h1>{tp}</h1>
        <div>
          <input
            onChange={inptvlue}
            type="text"
            placeholder="Name"
            name="username"
          />
          <input
            onChange={(e) => {
              inptvlue(e);
            }}
            type="email"
            placeholder="Email"
            name="email"
          />
          <input
            onChange={inptvlue}
            type="password"
            placeholder="Password"
            name="password"
          />

          <input type="submit" onClick={()=>{onSubmit()}  } placeholder="Submit" />
          <p>{warning}</p>
          <div>
            <p>{tx}</p>
            <Link to={`${pt}`}>{gtt}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
