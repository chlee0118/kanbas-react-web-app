import { Link, useLocation } from 'react-router-dom';
import "./index.css"
import { FaUser, FaTachometerAlt, FaBook, FaCalendar, FaEnvelopeOpenText, FaClock, FaCameraRetro, FaSignOutAlt, FaQuestionCircle } from 'react-icons/fa';

function KanbasNavigation() {
  const location = useLocation();
  const pathname = location.pathname;
  const links = [
    { label: "", path: "http://northeastern.edu", icon: <img src="/neulogo.png" style={{ width: '50px', height: 'auto' }} />, isExternal: true },
    { label: "Account", path: "/Kanbas/Account", icon: <FaUser className={`icon ${pathname.includes("/Kanbas/Account") ? "account-icon-active" : "account-icon"}`} /> },
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: <FaTachometerAlt className="icon" /> },
    { label: "Courses", path: "/Kanbas/Courses", icon: <FaBook className="icon" /> },
    { label: "Calendar", path: "/Kanbas/Calendar", icon: <FaCalendar className="icon" /> },
    { label: "Inbox", path: "/Kanbas/Inbox", icon: <FaEnvelopeOpenText className="icon" /> },
    { label: "History", path: "/Kanbas/History", icon: <FaClock className="icon" /> },
    { label: "Studio", path: "/Kanbas/Studio", icon: <FaCameraRetro className="icon" /> },
    { label: "Commons", path: "/Kanbas/Commons", icon: <FaSignOutAlt className="icon" /> },
    { label: "Help", path: "/Kanbas/Help", icon: <FaQuestionCircle className="icon" /> },
  ];

  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.path) ? "wd-active" : ""}>
          <Link to={link.path}>
            {link.icon}
            <br />
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default KanbasNavigation;