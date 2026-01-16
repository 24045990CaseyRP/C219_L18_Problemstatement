import { useParams } from "react-router-dom";
import { getModule } from "../api"; // Assuming your API helper is updated

export default function Module() {
  // useParams retrieves the dynamic segments from the URL: /diplomas/:diplomaId/:moduleId
  const { diplomaId, moduleId } = useParams();

  // Fetch the specific module data
  const module = getModule({ diplomaId, moduleId });

  // Safety check if the module doesn't exist
  if (!module) {
    return <p>Module details not found.</p>;
  }

  return (
    <div className="module-container">
      <h3>{module.name}</h3>
      <p className="module-description">{module.description}</p>

      {/* RP Requirement: Displaying specific course details */}
      <div className="module-meta">
        <h4>Module Leader</h4>
        <p><strong>{module.lecturer.name}</strong></p>
        <span>
          {module.lecturer.title} | {module.lecturer.office}
        </span>
      </div>
    </div>
  );
}