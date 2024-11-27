import { Navigate, Outlet } from "react-router";

const AuthRoute = () => {
  const auth = sessionStorage.getItem("is_login");
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default AuthRoute;
