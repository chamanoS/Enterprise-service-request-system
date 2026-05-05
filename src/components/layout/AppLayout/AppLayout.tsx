import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "./AppLayout.css";

function AppLayout() {
  return (
    <div className="app-shell">
      <Sidebar />

      <div className="main-area">
        <Navbar />

        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;