import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_API = "https://kanbas-node-server-app-apg1.onrender.com/api/courses";
const ASSIGNMENTS_API = "https://kanbas-node-server-app-apg1.onrender.com/api/assignments";

export const createAssignment = async (courseId: any, assignment: any) => {
  const response = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
  console.log(response.data);
  return response.data;
};

export const findAssignmentsForCourse = async (courseId: any) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

export const updateAssignment = async (assignmentId: any, assignment: any) => {
    const response = await axios.put(`${ASSIGNMENTS_API}/${assignmentId}`, assignment);
    return response.data;
  };

export const deleteAssignment = async (assignmentId: any) => {
  const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};