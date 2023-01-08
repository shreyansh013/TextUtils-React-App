import React, { useState } from "react";
import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <div>
      {/* <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route
            path="/"
            element={<TextForm heading="Enter Text to Analyze" mode={mode} />}
          />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Enter Text to Analyze" mode={mode} />
    </div>
  );
};

export default App;
