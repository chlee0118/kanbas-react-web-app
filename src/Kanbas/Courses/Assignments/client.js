import axios from 'axios';
const COURSES_API = "http://localhost:4000/api/courses";
const ASSIGNMENTS_API = "http://localhost:4000/api/assignments"

export const createAssignment = async (courseId, assignment) => {
  const response = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
  console.log(response.data);
  return response.data;
};

export const findAssignmentsForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

export const updateAssignment = async (assignmentId, assignment) => {
    const response = await axios.put(`${ASSIGNMENTS_API}/${assignmentId}`, assignment);
    return response.data;
  };

export const deleteAssignment = async (assignmentId) => {
  const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};