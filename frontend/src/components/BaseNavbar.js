// src/components/BaseNavbar.js
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import navLinks from "./NavLinks";

const BaseNavbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const role = localStorage.getItem("role");

    // Hide navbar on login page
    if (location.pathname === "/") return null;

    const handleLogout = () => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        localStorage.removeItem("role");
        navigate("/");
    };

    return (
        <nav style={{ background: "#333", color: "#fff", padding: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>School MIS</h3>
                <div>
                    {navLinks[role]?.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            style={{
                                color: "#fff",
                                marginRight: "15px",
                                textDecoration: "none"
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button onClick={handleLogout} style={{ background: "red", color: "white", border: "none", padding: "5px 10px" }}>
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default BaseNavbar;
