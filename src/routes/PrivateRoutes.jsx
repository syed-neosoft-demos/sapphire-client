import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router";

const Home = lazy(() => import("@/screen/panel/Home"));
const Claim = lazy(() => import("@/screen/panel/ClaimForm"));
const ViewClaim = lazy(() => import("@/screen/panel/Claim"));
const Page404 = lazy(() => import("@/screen/error/NotFound"));

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/claim"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Claim />
          </Suspense>
        }
      />
      <Route
        path="/view-claim"
        element={
          <Suspense fallback={<>Loading...</>}>
            <ViewClaim />
          </Suspense>
        }
      />
      <Route
        path="/404"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Page404 />
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to="/panel/404" />} />
    </Routes>
  );
};
export default PrivateRoutes;
