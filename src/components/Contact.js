import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import home from '../home.css';
import circle from './circle.svg';



const Contact = () => {


    return ( 
        <div className="contact">
            <h3>Contact With me on social media</h3>
            <div className="icons">
                <a href="https://twitter.com/pappychulow"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
            

                <a href="https://api.whatsapp.com/qr/64KTAL3UFLWOB1"><FontAwesomeIcon icon={['fab', 'whatsapp']} /></a>

                <a href="https://www.linkedin.com/in/olorunfemi-daramola-06aa73190/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>

                <a href="https://github.com/berryboylb"><FontAwesomeIcon icon={['fab', 'github']} /></a>
            </div>
            <img src={circle} className="bg" alt="Bg" />
        </div>
     );
}
 
export default Contact;