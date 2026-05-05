import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-mark">ES</span>
        <div>
          <h1>Enterprise Service</h1>
          <p>Request System</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/" className="nav-link">
          Dashboard
        </NavLink>

        <NavLink to="/requests" className="nav-link">
          Requests
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;