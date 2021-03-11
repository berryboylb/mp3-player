import { Link } from "react-router-dom"

const Navbar = () => {
        
    return ( 
        <nav>
            <form>
                <button type = 'submit'>Search</button>
                <input id = 'myColor' type = 'search' />
            </form>

            <ul>
                <li><Link>About</Link></li>
                <li><Link>Music</Link></li>
                <li><Link>New</Link></li>
                <li><Link>Contact</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;