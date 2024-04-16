import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope,  } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./SideContect.scss"
const SideContact = () => {
    return (
        <>
            <ul id='SideContect'>
                <li><FontAwesomeIcon icon={faPhone} beat size='2xl' /></li>
                <li><FontAwesomeIcon icon={faEnvelope} beat size='2xl' /></li>
                <li><FontAwesomeIcon icon={faInstagram} beat size='2xl' /></li>
                <li><FontAwesomeIcon icon={faLinkedin} beat size='2xl' /></li>
            </ul>
        </>
    );
}

export default SideContact;
