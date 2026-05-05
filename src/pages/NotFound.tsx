import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found">
      <h1>404</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go back to dashboard</Link>
    </section>
  );
}

export default NotFound;