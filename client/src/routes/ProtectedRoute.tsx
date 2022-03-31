import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context";

const ProtectedRoute = () => {
  const [state, setState] = useContext(UserContext);

  if (state.loading) return <div>Spinner...</div>;

  return state.data ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
