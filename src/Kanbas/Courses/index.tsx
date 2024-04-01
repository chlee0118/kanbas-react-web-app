import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import './index.css';
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
  const { courseId } = useParams();
  const API_BASE = process.env.REACT_APP_API_BASE;
  const COURSES_API = `${API_BASE}/api/courses`;
  const [course, setCourse] = useState<any>({ _id: "" });
  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(
      `${COURSES_API}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);
  const location = useLocation();

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const pathParts = location.pathname.split('/');
  const currentPath = pathParts[pathParts.length - 1];
  const breadcrumb = currentPath ? `> ${capitalizeFirstLetter(currentPath)}` : '';

  return (
    <div className="course-container">
      <div className="course-header">
        <HiMiniBars3 className="menu-icon" />
        <span>{course?._id} {course?.name}</span>
        <span className="breadcrumb">{breadcrumb}</span>
      </div>
      <hr />
      <div className="layout-container">
        <CourseNavigation />
        <div className="course-content">
          <Routes>
            <Route path="/" element={<Navigate to="Home" replace />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Grades" element={<Grades />} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/new" element={<AssignmentEditor/>}/>
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;