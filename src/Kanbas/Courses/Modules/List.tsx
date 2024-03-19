import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
      <div className="list-group-item d-flex align-items-center gap-2">
        <input
          value={module.name}
          className="form-control"
          style={{ width: 'auto', flexGrow: 1 }}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
          placeholder="Module Name"
        />
        <textarea
          value={module.description}
          className="form-control"
          style={{ width: 'auto', flexGrow: 1 }}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
          placeholder="Module Description"
        />
        <button
          className="btn btn-primary"
          style={{ width: 'auto', backgroundColor:'red' }}
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}
        >
          Add
        </button>
        <button
          className="btn btn-secondary"
          style={{ width: 'auto', backgroundColor:'grey', color:'white' }}
          onClick={() => dispatch(updateModule(module))}
        >
          Update
        </button>
      </div>
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index}
              className="list-group-item"
              onClick={() => setSelectedModule(module)}>
              <div className="list-group-item d-flex align-items-center gap-2">
                <FaEllipsisV className="me-2" />
                {module.name}
                <button
                  onClick={() => dispatch(setModule(module))}
                  className="btn btn-primary"
                  style={{width: 'auto', backgroundColor: 'red'}}>
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteModule(module._id))}
                  className="btn btn-secondary"
                  style={{width: 'auto', backgroundColor: 'grey', color:'white'}}>
                  Delete
                </button>
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson: any, index: any) => (
                    <li className="list-group-item" key={index}>
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
    </>
  );
}
export default ModuleList;

