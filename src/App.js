import React, {useState} from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import { Feedback, Project } from "./pages";

function App() {
  const [show, setShow] = useState(true)
  const handleShow = () => setShow(prev => !prev)
  return (
    <div className="App">
      <Navbar handleCilck={handleShow} />
      <div style={{display: "flex"}}>
        <Sidebar showNav={show} />
        <Routes>
          <Route path="/"  element={<Feedback />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
