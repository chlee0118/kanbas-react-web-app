import { Module } from "module";
import ModuleList from "./List";
import ModuleButtons from "./ModuleButtons";

function Modules() {
  return (
    <div>
      <ModuleButtons />
      <hr></hr>
      <ModuleList />
    </div>
  );
}
export default Modules;