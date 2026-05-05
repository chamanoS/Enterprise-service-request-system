import { Route, Routes } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout/AppLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Requests from "../pages/Requests/Requests";
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/requests" element={<Requests />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;