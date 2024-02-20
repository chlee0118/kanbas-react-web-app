import { FaPlusCircle, FaEllipsisV, FaFileInvoice } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import './index.css';

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  
  return (
    <>
      <div className="assignments-header">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for Assignments"
            className="search-assignment"
          />
        </div>
        <div className="actions-container">
          <button className="btn group-btn">
            +Group
          </button>
          <button className="btn assignment-btn">
            Assignment
          </button>
          <select className="edit-assignment-dropdown">
            <option selected value="EDITASSIGNMENTDATE">Edit Assignment Date</option>
            <option value="ASSIGNMENTGROUPWEIGHT">Assignment Groups Weight</option>
            <option value="GRADESCOPE">Gradescope 1.3</option>
            <option value="COMMONSFAVORITES">Commons Favorites</option>
          </select>
        </div>
      </div>
      <hr />
      <div className="assignment-section">
        <div className="assignment-row-header">
          <span><FaEllipsisV className="icon-spacing" /> ASSIGNMENTS</span>
          <span className="float-end">
            <span className="border rounded px-3 py-1">40% of Total</span>
            <FaPlusCircle className="icon-spacing" />
            <FaEllipsisV className="icon-spacing" />
          </span>
        </div>
        <ul className="list-group wd-modules">
          {assignmentList.map((assignment) => (
            <li className="list-group-item assignment-item">
              <FaEllipsisV className="icon-spacing" />
              <FaFileInvoice className="text-success icon-spacing" />
              <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    className="assignment-link">
                {assignment.title}
              </Link>
              <FaEllipsisV className="icon-spacing float-end" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Assignments;