import { NavLink } from "react-router-dom";
import DebriefIcon from "../assets/DebriefIcon.png";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink to="/" end>Features</NavLink></li>
                        <li><NavLink to="/pricing">Pricing</NavLink></li>
                        <li><NavLink to="/download">Download</NavLink></li>
                        <li><NavLink to="/getting-started">Getting Started</NavLink></li>
                        <li><NavLink to="/account">Account</NavLink></li>
                        <li><NavLink to="/download" className="btn btn-primary btn-sm mt-1">Get the App</NavLink></li>
                    </ul>
                </div>
                <img src={DebriefIcon} className="h-12 w-12" alt="Sailing Debrief logo" />
                <NavLink to="/" className="btn btn-ghost text-lg" end>Sailing Debrief</NavLink>
            </div>
            <div className="navbar-end hidden lg:flex">
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
