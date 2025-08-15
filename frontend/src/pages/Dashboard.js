import React from "react";
import { useParams } from "react-router-dom";

function Dashboard() {
    const { role } = useParams();
    const regNo = localStorage.getItem("registration_number");

    return (
        <div className="container mt-5">
            <h2>{role.toUpperCase()} Dashboard</h2>
            {role === "student" && (
                <p>Your Registration Number: <strong>{regNo}</strong></p>
            )}
        </div>
    );
}

export default Dashboard;
