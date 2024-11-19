import React from "react";
import './main.css';
import Header from "./components/Header/Header";
import MainForm from "./components/MainForm/MainForm";
import Feedback from "./components/Feedback/Feedback";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<MainForm />} />  {/* Страница с формой */}
          <Route path="/feedback" element={<Feedback />} />  {/* Страница обратной связи */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
