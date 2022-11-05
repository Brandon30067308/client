import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./routes/registration/Registration";
import Confirmation from "./routes/confirmation-email/confirmation-email";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/registrationPage" element={<Registration />} />
          <Route path="/confirmationPage" element={<Confirmation/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
