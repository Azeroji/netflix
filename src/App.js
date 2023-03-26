import Navbar from "./components/Navbar"
import './styles/main.css'
import Movies from "./screens/Movies"
import Home from "./screens/Home"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

export default function App(){
    return(
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path ="/">
                        <Home/>
                    </Route>
                    <Route exact path ="/movies">
                        <Movies/>
                        </Route>
                </Switch>
            </Router>
    )
}