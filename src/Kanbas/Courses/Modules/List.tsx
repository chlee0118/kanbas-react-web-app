import React, { useEffect, useState } from "react";
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
  setModules
} from "./reducer";
import { KanbasState } from "../../store";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client"

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

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
          onClick={handleAddModule}
        >
          Add
        </button>
        <button
          className="btn btn-secondary"
          style={{ width: 'auto', backgroundColor:'grey', color:'white' }}
          onClick={handleUpdateModule}
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
                  onClick={() => handleDeleteModule(module._id)}
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
              {selectedModule?._id === module._id && (
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

