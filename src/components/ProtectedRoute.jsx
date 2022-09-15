import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  category,
  limit,
  difficulty,
  children
}) => {
  if (category === "" || limit === "" || difficulty === "") {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
