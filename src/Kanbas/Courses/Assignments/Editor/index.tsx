import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import './index.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAssignment, updateAssignment } from '../reducer';
import * as client from "../client";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = useSelector((state: any) =>
    state.assignments.assignments.find((assignment: any) => assignment._id === assignmentId)
  );
  const { courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [assignmentDetails, setAssignmentDetails] = useState({
    title: '',
    description: '',
    points: 0,
    dueDate: '',
    availableFromDate: '',
    availableUntilDate: '',
  });

  const handleAddAssignment = () => {
    client.createAssignment(courseId, assignmentDetails).then((newAssignment) => {
      dispatch(addAssignment(newAssignment));
    });
  };

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

  const handleUpdateAssignment = async () => {
    await client.updateAssignment(assignment._id, assignmentDetails);
    dispatch(updateAssignment({...assignmentDetails, _id: assignment._id}));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const payload = {
        ...assignmentDetails,
        course: courseId,
        _id: assignment ? assignment._id : new Date().getTime().toString(),
    };

    if (assignment) {
        handleUpdateAssignment();
    } else {
        handleAddAssignment();
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
      <button type="submit">Save/Add</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
}
  
export default AssignmentEditor;