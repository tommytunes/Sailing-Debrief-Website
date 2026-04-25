import { NavLink } from "react-router-dom";
import DebriefIcon from "../assets/DebriefIcon.png";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <img src={DebriefIcon} className="h-12 w-12" alt="Sailing Debrief logo" />
                <NavLink to="/" className="btn btn-ghost text-xl" end>Sailing Debrief</NavLink>
            </div>
            <div className="navbar-end">
                <NavLink to="/" className="btn btn-ghost text-xl" end>Features</NavLink>
                <NavLink to="/pricing" className="btn btn-ghost text-xl">Pricing</NavLink>
                <NavLink to="/download" className="btn btn-ghost text-xl">Download</NavLink>
                <NavLink to="/account" className="btn btn-ghost text-xl">Account</NavLink>
                <NavLink to="/download" className="btn btn-primary text-xl">Get the App</NavLink>
            </div>
        </div>
    );
}

export default Navbar;