import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div>
        <h2>Service Request Portal</h2>
        <p>Manage and track internal service requests</p>
      </div>

      <div className="user-badge">
        <span>CR</span>
      </div>
    </header>
  );
}

export default Navbar;