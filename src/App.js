import './App.scss';
import { Route, Routes} from "react-router-dom"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Header from './Components/header/Header';
import Footer from './Components/Footer/Footer';

// imporing pages
import Home from './Pages/Home';
import Login from './Pages/Login';


function App() {
  const isDesktop = window.innerWidth >= 1000;
  const bgimgurl="htt://images.pexels.com/photos/6801869/pexels-photo-6801869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  return (
    <div className="App"  style={isDesktop?{}:{backgroundImage: `url(${bgimgurl})`,
    backgroundSize: "cover"}}>
      <div id='headermain'>
      <Header/>
      </div>

<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Login tp="Login" pt="/Signup" tx="Don't have account"/>}/>
<Route path='/signup' element={<Login tp="Signup" pt="/login" tx="Go to the Login"/>}/>
</Routes>

  

<Footer/>
   
    </div>
  );
}

export default App;
