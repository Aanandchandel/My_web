import "./Header.scss";
import barr from "./bars-solid.svg";
import { useState, useEffect } from "react";
const Header = () => {
  const [hide, setHide] = useState(true);
  console.log(window.innerWidth); 

  useEffect(() => {
    window.innerWidth <= 500 ? setHide(false) : setHide(true);
  }, []);

  return (
    <div id="header">
      <h1>
        
        <span className="aicon">A</span> anand <span>Chandel</span>
      </h1>

      {hide && (
        <ul>
          <li>Projects</li>
          <li>Contect</li>
          <li>LogIn</li>
        </ul>
      )}
      {!hide && <img src={barr}  alt="img"/>}
    </div>
  );
};
export default Header;
