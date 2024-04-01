import React, { useEffect, useState } from "react";
import { FaPlusCircle, FaEllipsisV, FaFileInvoice } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import { assignments } from "../../Database";
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAssignment, setAssignments } from './reducer';
import * as client from "./client";

function Assignments() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const assignmentList = useSelector((state: any) => state.assignments.assignments.filter(
    (assignment: any) => assignment.course === courseId));

  const dispatch = useDispatch();
  // const handleDelete = (assignmentId: any) => {
  //   const isConfirmed = window.confirm('Are you sure you want to remove this assignment?');
  //   if (isConfirmed) {
  //     dispatch(deleteAssignment(assignmentId));
  //   }
  // };
  const handleDeleteAssignment = (assignmentId: string) => {
    const isConfirmed = window.confirm('Are you sure you want to remove this assignment?');
    if (isConfirmed) {
      client.deleteAssignment(assignmentId).then((status) => {
        dispatch(deleteAssignment(assignmentId));
      });
    }
  };

  useEffect(() => {
    client.findAssignmentsForCourse(courseId)
      .then((assignments) =>
        dispatch(setAssignments(assignments))
    );
  }, [courseId]);

  
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
            <button onClick={() => navigate(`/Kanbas/Courses/${courseId}/Assignments/new`)} className="add-assignment-btn">
              <FaPlusCircle className="icon-spacing" /> Assignment
            </button>
            <FaEllipsisV className="icon-spacing" />
          </span>
        </div>
        <ul className="list-group wd-modules">
          {assignmentList.map((assignment: any) => (
            <li className="list-group-item assignment-item">
              <FaEllipsisV className="icon-spacing" />
              <FaFileInvoice className="text-success icon-spacing" />
              <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    className="assignment-link">
                {assignment.title}
              </Link>
              <button onClick={() => handleDeleteAssignment(assignment._id)} className="delete-assignment-btn">
                Delete
              </button>
              <FaEllipsisV className="icon-spacing float-end" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Assignments;