import { FaClipboardList, FaHome, FaStream, FaBullhorn, FaChartLine, FaBell, FaCheckCircle } from 'react-icons/fa';
import './Status.css';

const Status = () => {
    const handleButtonClick = (action: string) => {
      };

  return (
    <div className="status-container">
      <button className="status-item btn" onClick={() => handleButtonClick('import')}>
        <FaClipboardList className="status-icon" />
        <span>Import Existing Content</span>
      </button>
      <button className="status-item btn" onClick={() => handleButtonClick('choose-home')}>
        <FaHome className="status-icon" />
        <span>Choose Home Page</span>
      </button>
      <button className="status-item btn" onClick={() => handleButtonClick('view-stream')}>
        <FaStream className="status-icon" />
        <span>View Course Stream</span>
      </button>
      <button className="status-item btn" onClick={() => handleButtonClick('announcement')}>
        <FaBullhorn className="status-icon" />
        <span>New Announcement</span>
      </button>
      <button className="status-item btn" onClick={() => handleButtonClick('analytics')}>
        <FaChartLine className="status-icon" />
        <span>New Analytics</span>
      </button>
      <button className="status-item btn" onClick={() => handleButtonClick('notifications')}>
        <FaBell className="status-icon" />
        <span>View Course Notifications</span>
      </button>
      {/* To Do Section */}
      <div className="status-section">
        <h4>To Do</h4>
        <button className="status-item btn" onClick={() => handleButtonClick('grade-a1')}>
          <FaCheckCircle className="status-icon text-success" />
          <span>Grade A1 - ENV + HTML</span>
        </button>
        <button className="status-item btn" onClick={() => handleButtonClick('grade-a2')}>
          <FaCheckCircle className="status-icon text-success" />
          <span>Grade A2 - CSS + BOOTSTRAP</span>
        </button>
      </div>
    </div>
  );
};

export default Status;
