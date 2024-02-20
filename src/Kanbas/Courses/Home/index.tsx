import ModuleList from "../Modules/List";
import ModuleButtons from "../Modules/ModuleButtons";
import Status from "./Status";
import './index.css';

function Home() {
  return (
    <div className="home-container">
      <div className="modules-container">
        <ModuleButtons />
        <hr />
        <ModuleList />
      </div>
      <Status />
    </div>
  );
}

export default Home;
