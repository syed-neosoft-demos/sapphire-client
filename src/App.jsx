import { Navigate, Route, Routes } from "react-router";
import ErrorBoundary from "./components/info/ErrorBoundary";
// import AuthRoute from "./routes/AuthRoute";
// import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/publicRoutes";

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/auth/*" element={<PublicRoutes />} />
        {/* <Route path="/panel" element={<AuthRoute />}>
          <Route path="/panel/*" element={<PrivateRoutes />} />
        </Route> */}
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
