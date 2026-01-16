import { NavLink, Outlet } from "react-router-dom";
import { getDiplomas } from "../api"; // Updated import

export default function Diplomas() {
  // Fetch the list of diplomas from your API/Data file
  const diplomas = getDiplomas();

  return (
    <div className="container">
      <h1>School of Infocomm Diplomas</h1>

      <ul className="diplomas-list">
        {diplomas.map((diploma) => (
          <li key={diploma.id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "diploma-active" : "diploma-link"
              }
              // This links to /diplomas/r47, etc.
              to={diploma.id}
            >
              {diploma.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <hr />
      
      {/* The Outlet will render the individual Diploma component 
          when a user clicks a link above */}
      <Outlet />
    </div>
  );
}