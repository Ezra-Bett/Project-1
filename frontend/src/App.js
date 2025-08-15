import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateUser from "./pages/CreateUser";
import ViewUsers from "./pages/ViewUsers";
import Results from "./pages/Results";
import Assignments from "./pages/Assignments";
import Attendance from "./pages/Attendance";
import ProtectedRoute from "./components/ProtectedRoute";
import BaseNavbar from "./components/BaseNavbar";
import TeacherAssignments from "./pages/TeacherAssignments";

function App() {
    const token = localStorage.getItem("access");

    return (
        <Router>
            {token && <BaseNavbar />}
            <Routes>
                {/* Login (Public) */}
                <Route path="/" element={<Login />} />

                {/* Dashboard (Any Role) */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                {/* Admin Only */}
                <Route
                    path="/create-user"
                    element={
                        <ProtectedRoute allowedRoles={["admin"]}>
                            <CreateUser />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/view-users"
                    element={
                        <ProtectedRoute allowedRoles={["admin"]}>
                            <ViewUsers />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/view-users"
                    element={<ProtectedRoute allowedRoles={['admin']} element={<ViewUsers />} />}
                />

                {/* Student Only */}
                <Route
                    path="/results"
                    element={
                        <ProtectedRoute allowedRoles={["student"]}>
                            <Results />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/assignments"
                    element={
                        <ProtectedRoute allowedRoles={["student"]}>
                            <Assignments />
                        </ProtectedRoute>
                    }
                />

                {/* Teacher Only */}
                <Route
                    path="/attendance"
                    element={
                        <ProtectedRoute allowedRoles={["teacher"]}>
                            <Attendance />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/teacher-assignments"
                    element={
                        <ProtectedRoute allowedRoles={["teacher"]}>
                            <TeacherAssignments />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
