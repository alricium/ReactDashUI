import React from "react";
import "../assets/css/Navbar.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar({ toggleSidebar }) {
    return (
        <nav className="nb-navbar navbar">
            <div className="nb-left-section">
                {/* Hamburger Icon for mobile: toggles sidebar */}
                <div className="nb-hamburger" onClick={toggleSidebar}>
                    <GiHamburgerMenu />
                </div>
            </div>

            <div className="nb-right-section">
                {/* Notifications with badge */}
                <div className="nb-icon-box">
                    <IoIosNotificationsOutline className="nb-notifications-icon" />
                    <span className="nb-badge">3</span>
                </div>

                {/* User profile image */}
                <div className="nb-profile-box">
                    <img
                        src="https://i.pravatar.cc/50"
                        className="nb-profile-img"
                        alt="profile"
                    />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
