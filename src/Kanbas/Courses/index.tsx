import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import './index.css';

function Courses() {
  const { courseId } = useParams();
  const location = useLocation();
  const course = courses.find((course) => course._id === courseId);

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
            <Route path="Grades" element={<h1>Grades</h1>} />
            <Route path="Assignments" element={<h1>Assignments</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;