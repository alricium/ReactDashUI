import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
    // State to track whether sidebar is open (for mobile)
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Toggle sidebar open/close
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="app-container">
            {/* Sidebar component */}
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Main content area */}
            <div className="main-area">
                {/* Navbar component */}
                <Navbar toggleSidebar={toggleSidebar} />

                {/* Page content */}
                <div className="content-area">
                    <h2>Dashboard Content</h2>
                    <p>Main content will go here.</p>
                </div>
            </div>
        </div>
    );
}

export default App;
