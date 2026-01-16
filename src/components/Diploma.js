import { useParams, NavLink, Outlet } from "react-router-dom";
import { getDiploma } from "../api"; // Updated to fetch a single diploma

export default function Diploma() {
  const { diplomaId } = useParams();
  const diploma = getDiploma(diplomaId);

  // Safety check: display a message if the diplomaId in the URL is invalid
  if (!diploma) {
    return <p className="container">Diploma not found.</p>;
  }

  return (
    <div className="container">
      <h2>{diploma.name} Modules</h2>
      
      <ul className="session-list">
        {diploma.modules.map((module) => (
          <li className="session" key={module.id}>
            <NavLink
              className={({ isActive }) => (isActive ? "session-active" : "session-link")}
              to={module.id}
            >
              <p className="session-name">{module.name}</p>
              <p>
                Module Code: {module.id.toUpperCase()}
              </p>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* This Outlet renders the Module detail component (Module.js) */}
      <div className="module-detail-area">
        <Outlet />
      </div>
    </div>
  );
}