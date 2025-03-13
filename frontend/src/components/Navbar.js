import { Component } from "react";
import "./NavbarStyles.css";
import {Link} from "react-router-dom";
import { MenuItems } from "./MenuItems";

class Navbar extends Component{
    state = {clicked: false};
    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">PlanItRight</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    
                </div>
                <ul className={this.state.clicked ? ".nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index} className={item.cName}>
                        <Link to={item.url} className="nav-links">
                        <i className={item.icon}></i>{item.title}
                        </Link>
                    </li>
                        );
                    })}
                    <li>
                        <Link to="/signup">
                            <button className="signup-btn">Sign Up</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;