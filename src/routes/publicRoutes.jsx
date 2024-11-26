import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router";

const SignUp = lazy(() => import("../screen/auth/Signup"));
const Login = lazy(() => import("../screen/auth/Login"));
// const Forget = lazy(() => import("../pages/auth/Forget"));
// const Reset = lazy(() => import("../pages/auth/Reset"));

const PublicRoutes = () => {
  return (
    <Routes>
      <Route
        path="/signup"
        element={
          <Suspense fallback={<>Loading...</>}>
            <SignUp />
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Login />
          </Suspense>
        }
      />
      {/* <Route
        path="/forget"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Forget />
          </Suspense>
        }
      />
      <Route
        path="/reset"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Reset />
          </Suspense>
        }
      /> */}
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
export default PublicRoutes;
