import React, { useEffect } from "react";
import './main.css';
import Header from "./components/Header/Header";
import MainForm from "./components/MainForm/MainForm";
import Feedback from "./components/Feedback/Feedback";
import backgroundAnimations from "./components/backgroundAnimation/backgroundAnimations";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    backgroundAnimations();
  }, []);

  return (
    <Router>
      <div className="app">
        <div className="animated-background">
          <canvas id="lines-canvas"></canvas>
        </div>
        <Header />
        <Routes>
          <Route path="/" element={<MainForm />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
