import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithObjects() {
  const buttonStyle = {
    padding: '10px 15px',
    margin: '5px',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    backgroundColor: 'blue',
    textDecoration: 'none',
    display: 'inline-block'
  };
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"
  const [module, setModule] = useState({
    id: 1,
    name: 'WebDev',
    description: 'Webdev description',
    course: 'Web Dev course'
  });
  const MODULE_URL = "http://localhost:4000/a5/module"
  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios
      .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <input onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title} type="text" />
      <button onClick={updateTitle} >
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} >
        Fetch Assignment
      </button>
      <br/>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}/>
      <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`} style={buttonStyle}>
        Update Title
      </a>
      <input type="number" 
      onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })}
      value={assignment.score}/>
      <a href={`http://localhost:4000/a5/assignment/score/${assignment.score}`} style={buttonStyle}>
        Update Score
      </a>
      <input type="checkbox" 
        onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
        checked={assignment.completed}/>
      <a href={`http://localhost:4000/a5/assignment/completed/${assignment.completed}`} style={buttonStyle}>
        Update Completed
      </a>
      <h4>Retrieving Objects</h4>
      <a href="http://localhost:4000/a5/assignment" style={buttonStyle}>
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a href="http://localhost:4000/a5/assignment/title" style={buttonStyle}>
        Get Title
      </a>

      <h4>Module Details</h4>
        <a href="http://localhost:4000/a5/module" style={buttonStyle}>
        Get Module
        </a>
        <a href="http://localhost:4000/a5/module/name" style={buttonStyle}>
        Get Module Name
        </a>
        <input type="text" 
        onChange={(e) => setModule({ ...module, name: e.target.value })}
        value={module.name}/>
        <a href={`${MODULE_URL}/name/${module.name}`} style={buttonStyle}>
        Update Module Name
        </a>
    </div>
  );
}
export default WorkingWithObjects;