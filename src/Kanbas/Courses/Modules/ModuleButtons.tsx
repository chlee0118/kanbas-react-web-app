import { FaEllipsisV, FaCheckCircle, FaPlus } from 'react-icons/fa';

const ModuleButtons = () => {
  return (
    <div className="module-buttons">
      <button className="btn btn-outline-secondary me-2">Collapse All</button>
      <button className="btn btn-outline-secondary me-2">View Progress</button>
      <div className="btn-group me-2">
        <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Publish All
        </button>
        <ul className="dropdown-menu">
          <li><button className="dropdown-item" type="button">Option 1 <FaCheckCircle className="text-success" /></button></li>
          <li><button className="dropdown-item" type="button">Option 2</button></li>
        </ul>
      </div>
      <button className="btn btn-danger">+ Module</button>
      <FaEllipsisV className="ms-2" />
    </div>
  );
};

export default ModuleButtons;