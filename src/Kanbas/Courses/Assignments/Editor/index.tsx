import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import './index.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAssignment, updateAssignment } from '../reducer';

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = useSelector((state: any) =>
    state.assignments.assignments.find((assignment: any) => assignment._id === assignmentId)
  );  
  const { courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const [assignmentDetails, setAssignmentDetails] = useState({
    title: '',
    description: '',
    points: 0,
    dueDate: '',
    availableFromDate: '',
    availableUntilDate: '',
  });

  useEffect(() => {
    if (assignment) {
      setAssignmentDetails(assignment as any);
    }
  }, [assignment]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setAssignmentDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const payload = {
        ...assignmentDetails,
        course: courseId,
        _id: assignment ? assignment._id : new Date().getTime().toString(),
    };

    if (assignment) {
        dispatch(updateAssignment(payload));
    } else {
        dispatch(addAssignment(payload));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
};

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" name="title" value={assignmentDetails.title} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea name="description" value={assignmentDetails.description} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Points:
          <input type="number" name="points" value={assignmentDetails.points} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Due Date:
          <input type="date" name="dueDate" value={assignmentDetails.dueDate} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Available From Date:
          <input type="date" name="availableFromDate" value={assignmentDetails.availableFromDate} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Available Until Date:
          <input type="date" name="availableUntilDate" value={assignmentDetails.availableUntilDate} onChange={handleChange} />
        </label>
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
}
  
export default AssignmentEditor;