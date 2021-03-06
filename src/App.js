import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import './App.css';
import Details from './Components/Details';
const App=()=>{
    return(
  <Router>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/">MyAPP</Link>
          </li>
         <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/details">Details</Link>
          </li>
        </ul>
      </div>
    </nav>
    <div className="mt-4 p-5  text-dark rounded">
    
    <Route path="/" exact component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/contact" component={Contact}></Route>
    <Route path="/details" component={Details}></Route>
    
    </div>
    </Router>

    )
}

export default App