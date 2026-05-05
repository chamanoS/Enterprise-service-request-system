function Dashboard() {
  return (
    <section>
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>Overview of service request activity.</p>
      </div>

      <div className="stats-grid">
        <div className="card">
          <p>Total Requests</p>
          <h2>24</h2>
        </div>

        <div className="card">
          <p>Pending</p>
          <h2>8</h2>
        </div>

        <div className="card">
          <p>Resolved</p>
          <h2>16</h2>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;