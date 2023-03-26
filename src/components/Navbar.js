import '../styles/main.css'
import Search from './Search'
import { useHistory } from "react-router-dom";



export default function Navbar(){
    const history = useHistory();

    function home() {
      history.push("/");
    }

    function movies() {
        history.push("/movies");
    }
    
    return(
        <nav className="navbar">
            <div className="navbar">
            <img src="./images/logo.png" height="25px" />
            <ul>
                <li><a href="/">HOME</a></li>
                <li>TV-SHOWS</li>
                <li><a href="/movies">MOVIES</a></li>
                <li>NEW</li>
                <li>POPULAR</li>
            </ul>
            </div>
        </nav>
    )
}