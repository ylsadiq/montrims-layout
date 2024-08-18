import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const location = useLocation();
	const user = JSON.parse(localStorage.getItem("user"));
	// console.log(user);
	if (!user || !user.isLoggedIn) {
		return <Navigate to="/login" state={{ from: location }}></Navigate>;
	}
	return children;
};

export default ProtectedRoute;
