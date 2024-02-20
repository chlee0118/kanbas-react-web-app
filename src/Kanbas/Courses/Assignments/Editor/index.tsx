import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import './index.css'

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    const { courseId } = useParams();
    const navigate = useNavigate();
  
    const handleSave = () => {
      console.log("Actually saving assignment TBD in later assignments");
      navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
  
    return (
      <div className="assignment-editor">
        <h2>Assignment Name</h2>
        <input value={assignment?.title || ''} onChange={() => {}} // Add onChange to suppress read-only warning
               className="form-control mb-2" />
        <hr />
        <div className="actions">
          <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn-cancel">
            Cancel
          </Link>
          <button onClick={handleSave} className="btn-danger">
            Save
          </button>
        </div>
      </div>
    );
}
  
export default AssignmentEditor;