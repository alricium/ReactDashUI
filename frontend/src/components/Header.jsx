import React from "react";
import "../styles/components/Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header-top">
                <span className="site-of-day">Site of the Day</span>
                <span className="date">Aug 6, 2025</span>
                <span className="score">Producer <strong>@luuvl3ss</strong> | mBayram</span>
            </div>
            <h1 className="main-title">dev.mbayram@gmail.com</h1>
            <div className="author">
                <span className="author-badge">M.</span>
                <span className="author-name">Bayram.</span>
                <sup className="pro-badge">DEV</sup>
            </div>
        </header>
    );
};

export default Header;