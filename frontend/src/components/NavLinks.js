// src/components/NavLinks.js

const navLinks = {
    admin: [
        { name: "Create User", path: "/create-user" },
        { name: "View All Users", path: "/view-users" }
    ],
    teacher: [
        { name: "Attendance", path: "/attendance" },
        { name: "Assignments", path: "/teacher-assignments" }
    ],
    student: [
        { name: "Results", path: "/results" },
        { name: "Assignments", path: "/assignments" }
    ]
};

export default navLinks;
