import React, { useState } from "react";
import "../styles/components/Navbar.css";
import MLogo from "../../public/medium-m.svg";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img
                    src={MLogo}
                    alt="mBayram Logo"
                    style={{ width: '25px', height: 'auto' }}
                />
                <p style={{ fontSize: '11px', marginLeft: '3px' }}>mBayram</p>
                <ul className="nav-links">
                    <li>Home</li>
                    <li>About</li>
                    <li
                        className="dropdown"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        Courses <MdKeyboardArrowDown className="chevron" />
                        {dropdownOpen && (
                            <ul className="dropdown-menu">
                                <li>Frontend</li>
                                <li>Backend</li>
                                <li>Fullstack</li>
                            </ul>
                        )}
                    </li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="navbar-center">
                <div className="search-wrapper">
                    <CiSearch className="search-icon" />
                    <input className="search" type="text" placeholder="Search by Inspiration" />
                </div>
            </div>

            <div className="navbar-right">
                <button className="text-btn">Login</button>
                <button className="text-btn">Sign Up</button>
                <button className="black-btn">@luuvl3ss</button>
                <button className="outline-btn">dev.mbayram@gmail.com</button>
            </div>
        </nav>
    );
};

export default Navbar;
