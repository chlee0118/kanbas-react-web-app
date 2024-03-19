import React, { useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import * as db from "../Database";

function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; })
   {  
  return (
    <div className="p-4">
      <h1>Dashboard</h1><hr />
      <div className="form-row d-flex align-items-end">
        <div className="col">
            <h5>Course</h5>
            <input value={course.name} className="form-control"
                  onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
          </div>
          <div className="col">
            <h5>Number</h5>
            <input value={course.number} className="form-control"
                  onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
          </div>
          <div className="col">
            <h5>Start Date</h5>
            <input value={course.startDate} className="form-control" type="date"
                  onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
          </div>
          <div className="col">
            <h5>End Date</h5>
            <input value={course.endDate} className="form-control" type="date"
                  onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
          </div>
          <div>
            <button onClick={addNewCourse} className="btn btn-primary" style={{
              backgroundColor: 'red'
            }}>
              Add
            </button>
            <button onClick={updateCourse} className="btn btn-secondary" style={{
              backgroundColor: 'grey',
              color: 'white'
            }}>
              Update
            </button>
          </div>
        </div><hr />
      <h2>Published Courses (12)</h2><hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top" style={{ height: 150 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name}
                  </Link>
                  <p className="card-text">{course.name}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary" style={{backgroundColor: 'green', color: 'white'}}>Go</Link>
                  <button onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                      }} className="btn btn-primary" style={{backgroundColor: 'red'}}>
                    Edit
                    </button>
                    <button onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }} className="btn btn-secondary" style={{backgroundColor: 'grey', color: 'white'}}>
                      Delete
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
