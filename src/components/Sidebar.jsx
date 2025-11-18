import React, { useState } from "react";
import "../assets/css/Sidebar.css";
import {
    AiFillHome,
    AiOutlineMessage,
    AiOutlineAppstore,
    AiOutlineCalendar,
    AiOutlineBarChart,
    AiOutlineRead,
    AiOutlineSetting,
} from "react-icons/ai";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function Sidebar({ isOpen, toggleSidebar }) {
    // State for tracking which dropdown is open
    const [openDropdown, setOpenDropdown] = useState(null);
    // State for tracking which menu item is active (highlighted)
    const [activeMenu, setActiveMenu] = useState(null);

    // Toggle a dropdown menu open/close
    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    // Set active menu item for visual highlight
    const handleMenuClick = (menuName) => {
        setActiveMenu(menuName);
    };

    return (
        <div className={`sb-container ${isOpen ? "active" : ""}`}>
            {/* Close button for mobile sidebar */}
            <div className="sb-close-icon" onClick={toggleSidebar}>
                <IoClose />
            </div>

            {/* Sidebar title */}
            <h3 className="sb-title mb-4">Lorem ipsum.</h3>

            <ul className="sb-nav nav flex-column gap-2">
                {/* Dashboard link */}
                <li className="sb-nav-item nav-item">
                    <a
                        className={`sb-nav-link nav-link ${activeMenu === "dashboard" ? "active" : ""}`}
                        href="#"
                        onClick={() => handleMenuClick("dashboard")}
                    >
                        <AiFillHome className="sb-icon" /> Dashboard
                    </a>
                </li>

                {/* Message link */}
                <li className="sb-nav-item nav-item">
                    <a
                        className={`sb-nav-link nav-link ${activeMenu === "message" ? "active" : ""}`}
                        href="#"
                        onClick={() => handleMenuClick("message")}
                    >
                        <AiOutlineMessage className="sb-icon" /> Message
                    </a>
                </li>

                {/* Schedule link */}
                <li className="sb-nav-item nav-item">
                    <a
                        className={`sb-nav-link nav-link ${activeMenu === "schedule" ? "active" : ""}`}
                        href="#"
                        onClick={() => handleMenuClick("schedule")}
                    >
                        <AiOutlineCalendar className="sb-icon" /> Schedule
                    </a>
                </li>

                {/* Analysis dropdown */}
                <li className="sb-nav-item nav-item">
                    <div
                        className={`sb-nav-link nav-link d-flex justify-content-between align-items-center ${activeMenu === "analysis" ? "active" : ""}`}
                        onClick={() => {
                            toggleDropdown("analysis"); // Open/close dropdown
                            handleMenuClick("analysis"); // Highlight main menu
                        }}
                    >
                        <span>
                            <AiOutlineBarChart className="sb-icon" /> Analysis
                        </span>
                        <span className="sb-dropdown-icon">
                            {openDropdown === "analysis" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </span>
                    </div>

                    {/* Submenu items */}
                    <ul className={`sb-submenu ${openDropdown === "analysis" ? "active" : ""}`}>
                        <li className="nav-item">
                            <a
                                className={`sb-sub-link nav-link ${activeMenu === "reports" ? "active" : ""}`}
                                href="#"
                                onClick={() => handleMenuClick("reports")}
                            >
                                Reports
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`sb-sub-link nav-link ${activeMenu === "statistics" ? "active" : ""}`}
                                href="#"
                                onClick={() => handleMenuClick("statistics")}
                            >
                                Statistics
                            </a>
                        </li>
                    </ul>
                </li>

                {/* News link */}
                <li className="sb-nav-item nav-item">
                    <a
                        className={`sb-nav-link nav-link ${activeMenu === "news" ? "active" : ""}`}
                        href="#"
                        onClick={() => handleMenuClick("news")}
                    >
                        <AiOutlineRead className="sb-icon" /> News
                    </a>
                </li>

                {/* Products dropdown */}
                <li className="sb-nav-item nav-item">
                    <div
                        className={`sb-nav-link nav-link d-flex justify-content-between align-items-center ${activeMenu === "products" ? "active" : ""}`}
                        onClick={() => {
                            toggleDropdown("products"); // Toggle products dropdown
                            handleMenuClick("products"); // Highlight main menu
                        }}
                    >
                        <span>
                            <AiOutlineAppstore className="sb-icon" /> Products
                        </span>
                        <span className="sb-dropdown-icon">
                            {openDropdown === "products" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </span>
                    </div>

                    {/* Submenu items */}
                    <ul className={`sb-submenu ${openDropdown === "products" ? "active" : ""}`}>
                        <li className="nav-item">
                            <a
                                className={`sb-sub-link nav-link ${activeMenu === "product1" ? "active" : ""}`}
                                href="#"
                                onClick={() => handleMenuClick("product1")}
                            >
                                Product 1
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`sb-sub-link nav-link ${activeMenu === "product2" ? "active" : ""}`}
                                href="#"
                                onClick={() => handleMenuClick("product2")}
                            >
                                Product 2
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`sb-sub-link nav-link ${activeMenu === "product3" ? "active" : ""}`}
                                href="#"
                                onClick={() => handleMenuClick("product3")}
                            >
                                Product 3
                            </a>
                        </li>
                    </ul>
                </li>

                {/* Settings link */}
                <li className="sb-nav-item nav-item">
                    <a
                        className={`sb-nav-link nav-link ${activeMenu === "settings" ? "active" : ""}`}
                        href="#"
                        onClick={() => handleMenuClick("settings")}
                    >
                        <AiOutlineSetting className="sb-icon" /> Settings
                    </a>
                </li>
            </ul>

            {/* Footer */}
            <div className="sb-footer mt-auto text-center">
                <p>© 2025 Lorem ipsum dolor sit amet. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Sidebar;
