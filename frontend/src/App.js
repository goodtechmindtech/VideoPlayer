import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";

import Login from "./pages/loginSignup/Login";
import Signup from "./pages/loginSignup/Signup";
import AddPlayer from "./pages/Dashboard/Players/AddPlayer";
import Players from "./pages/Dashboard/Players/Players";
import ContentUnits from "./pages/Dashboard/ContentUnits/ContentUnits";
import AddContentUnit from "./pages/Dashboard/ContentUnits/AddContentUnit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Players />} />
        <Route exact path="/dashboard" element={<Players />} />
        <Route exact path="/addPlayer" element={<AddPlayer />} />
        <Route exact path="/contentUnits" element={<ContentUnits />} />
        <Route exact path="/addContentUnit" element={<AddContentUnit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
