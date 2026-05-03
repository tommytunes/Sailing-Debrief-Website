import { NavLink } from "react-router-dom";
import DebriefIcon from "../assets/DebriefIcon.png";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <img src={DebriefIcon} className="h-12 w-12" alt="Sailing Debrief logo" />
                <NavLink to="/" className="btn btn-ghost text-lg" end>Sailing Debrief</NavLink>
            </div>
            <div className="navbar-end">
                <NavLink to="/" className="btn btn-ghost text-lg" end>Features</NavLink>
                <NavLink to="/pricing" className="btn btn-ghost text-lg">Pricing</NavLink>
                <NavLink to="/download" className="btn btn-ghost text-lg">Download</NavLink>
                <NavLink to="/getting-started" className="btn btn-ghost text-lg">Getting Started</NavLink>
                <NavLink to="/account" className="btn btn-ghost text-lg">Account</NavLink>
                <NavLink to="/download" className="btn btn-primary text-lg">Get the App</NavLink>
            </div>
        </div>
    );
}

export default Navbar;