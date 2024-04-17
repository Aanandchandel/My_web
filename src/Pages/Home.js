import myimg from "./static/dp.jpg"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import SideContect from "../Components/Contect/SideContect"
// import { useMediaQuery } from "react-responsive"
import MediaQuery from "react-responsive"
import "./Scss/Home.scss"
const Home=()=>{

    const isDesktop = window.innerWidth >= 1000;
return <div id={isDesktop?"HomeD":"HomeM"}>

<MediaQuery maxWidth={1000}>
<img src={myimg} alt="" />  <div>
<h1>
    Hi,It's <span>Aanand</span>
</h1>
<h2 id="iAmWebDeve"> I'm <span id="animated-textM"></span></h2>
<p>
Thank you for your visit and for considering my work.
</p>
<button>Resume</button>
        </div>
<SideContect/>
</MediaQuery>
<MediaQuery minWidth={1001}>
<div>
<h1>
    Hi,It's <span>Aanand</span>
</h1>
<h2 id="iAmWebDeve"> I'm <span id="animated-text"></span></h2>
<p>
Thank you for your visit and for considering my work.
</p>
<button>Resume</button>
        </div>
<img src={myimg} alt="" />
<SideContect/>
</MediaQuery>

    </div>
}



export default Home