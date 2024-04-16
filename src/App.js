import './App.scss';
import { Route, Routes} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Header from './Components/header/Header';
// imporing pages
import Home from './Pages/Home';



function App() {
  return (
    <div className="App">
      <div id='headermain'>
      <Header/>
      </div>

<Routes>
<Route path='/' element={<Home/>}/>
</Routes>

  


   
    </div>
  );
}

export default App;
