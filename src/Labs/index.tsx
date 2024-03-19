import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Nav from "../Nav";
import { Routes, Route, Link } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

function Labs() {
   return (
    <Provider store={store}>
      <div className="container-fluid">
       <Nav />
       <h1>Labs</h1>
       <Routes>
         <Route path="/a3/*" element={<Assignment3 />} />
         <Route path="/a4" element={<Assignment4 />} />
       </Routes>
     </div>
    </Provider>
   );
 }
 export default Labs;