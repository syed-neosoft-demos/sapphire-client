import { Navigate, Outlet } from "react-router";

const AuthRoute = () => {
  const auth = true;
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default AuthRoute;
