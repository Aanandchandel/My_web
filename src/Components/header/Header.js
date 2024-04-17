import { useState } from "react";
import "./Header.scss";
import "./HeaderM.scss";
import Logo from "../Logo/Logi";
import MediaQuery from "react-responsive";
import barr from "./bars-solid.svg";
import { Link } from "react-router-dom";
const Header = () => {
  const [show, setShow] = useState(false);

  const isDesktop = window.innerWidth >= 1000;
  return (
    <div id={isDesktop ? "headerD" : "headerM"}>
      <Logo />

      <MediaQuery minWidth={1001}>
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/project">Projects</Link>
          </li>
          <li>
            <Link to="/contect">Contect</Link>
          </li>
          <li>
            <Link to="/login">LogIn</Link>
          </li>
        </ul>
      </MediaQuery>
      <MediaQuery maxWidth={1000}>
        <div>
          {show && (
            <ul>
              <li>
            <Link to="/">Home</Link>
          </li>
              <li>
            <Link to="/project">Projects</Link>
          </li>
          <li>
            <Link to="/contect">Contect</Link>
          </li>
          <li>
            <Link to="/login">LogIn</Link>
          </li>
            </ul>
          )}
          <img
            src={barr}
            onClick={() => {
              setShow(!show);
            }}
            alt="img"
          />
        </div>
      </MediaQuery>
    </div>
  );
};
export default Header;
