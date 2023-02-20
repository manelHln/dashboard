import Sidebar from "./components/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import { Feedback, Preview, Project } from "./pages";

function App() {
  
  return (
    <div className="main-container">
      {/* <Navbar handleCilck={handleShow} /> */}
        <Sidebar />
        <Routes>
          <Route path="/"  element={<Feedback />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </div>
  );
}

export default App;
