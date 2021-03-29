import music from './mussic.png';
import circle from './circle.svg';
import { Link } from 'react-router-dom';
import home from '../home.css';
import Navbar from './Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';
const Home = () => {

    return ( 
          <div className = 'home'>
               <header>
                   <Navbar />
              <div className = 'divide'>
              <div className = "content">
                   <h2>New Playlist</h2>
                   <p>Welcome to my mini playlist that understand the inflence of trap on our generation and appreciates the importance of this influence and how far they have come..</p>
                   <Link className = 'link' to = '/music'>Play Now <FontAwesomeIcon icon = {faPlay} /></Link>
               </div>
               <div className= 'image-container'>
                    <img src={music} className="App-logo" alt="logo" />
               </div> 
              
              </div>
           </header>
            <img src={circle} className="bg" alt="Bg" />
          </div>
     );
}
 
export default Home;