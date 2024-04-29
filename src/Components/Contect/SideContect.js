import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope,  } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./SideContect.scss"

import { CounterContext } from '../../Context/MyContext';
import { useContext } from 'react';
const SideContact = () => {
    const {show}=useContext(CounterContext)
    
    return (
        <>
      {!show&&
            <ul id='SideContect'>
                <li><FontAwesomeIcon icon={faPhone} beat size='xl'  /></li>
                <li><FontAwesomeIcon icon={faEnvelope} beat size='xl' /></li>
                <li><FontAwesomeIcon icon={faInstagram} beat size='xl' /></li>
                <li><FontAwesomeIcon icon={faLinkedin} beat size='xl' /></li>
            </ul>
            }  
        </>
    );
}

export default SideContact;
