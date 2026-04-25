import { NavLink } from "react-router-dom";
import DebriefIcon from "../assets/DebriefIcon.png";

const Footer = () => {
    return (
        <div className="bg-base-200 text-base-content">
            <footer className="footer max-w-5xl mx-auto px-10 py-12 flex flex-row justify-between items-start">
                <aside>
                    <img src={DebriefIcon} className="h-12 w-12" alt="Sailing Debrief logo" />
                    <p className="text-lg font-bold">Sailing Debrief</p>
                    <p className="opacity-70">Review every race. Learn what worked. Win the next one.</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Product</h6>
                    <NavLink to="/" className="link link-hover" end>Features</NavLink>
                    <NavLink to="/pricing" className="link link-hover">Pricing</NavLink>
                    <NavLink to="/pricing" className="link link-hover">Download</NavLink>
                    <NavLink to="/account" className="link link-hover">Account</NavLink>
                </nav>
            </footer>
            <div className="border-t border-base-300">
                <p className="text-center text-sm opacity-70 py-4">
                    © {new Date().getFullYear()} Sailing Debrief
                </p>
            </div>
        </div>
    );
}

export default Footer;
