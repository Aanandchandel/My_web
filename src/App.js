import './App.scss';
import { useState,useContext } from 'react';
import { Route, Routes} from "react-router-dom"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Header from './Components/header/Header';
import Footer from './Components/Footer/Footer';

// imporing pages
import Home from './Pages/Home';
import Login from './Pages/Login';
import LOgin from './PrivateComponents/_Login';
import Notification from './Components/Notification/Notification';
import { CounterContext } from './Context/MyContext';


function App() {
  const statusData=useContext(CounterContext)
  const{login,setLogin,lin,setLin,showMessage,setShowMessage}=statusData
  const {mode,setMode}=statusData
  // const isDesktop = window.innerWidth >= 1000;
  
  return (
    <div
    className={mode? "light App":" dark App"} 
    // className="App" 
      >
      <div id='headermain'>
      <Header  />
      </div>
      
   { showMessage &&<Notification/>} 
     

<Routes>
<Route path='/' element={<Home />}/>
{/* <Route path='/' element={<_Login  mode={mode} Component={ Home } /> }/> */}

<Route path='/login' element={<LOgin  state={{setLogin}} mode={mode} tp="Login" gtt="Signup" pt="/Signup" tx="Don't have account" Component={Login} />}/>
{/* <Route path='/login' element={<Login mode={mode} tp="Login" pt="/Signup" tx="Don't have account"/>}/> */}

<Route path='/signup' element={<LOgin  state={{setLogin}} mode={mode} tp="Signup" gtt="Login" pt="/login" tx="Go to the Login" Component={Login} />}/>
{/* <Route path='/signup' element={<Login tp="Signup" pt="/login" tx="Go to the Login"/>}/> */}
</Routes>

<button onClick={()=>{setMode(!mode)}}>sdfsfasfasfasfasfasfafaffsadffff</button>

<Footer/>
   
    </div>
  );
}

export default App;
