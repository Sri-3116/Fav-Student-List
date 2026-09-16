import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StudentProvider } from "./StudentContext";
import Header from "./components/Header";
import StudentList from "./pages/StudentList";
import FavouriteStudents from "./pages/FavouriteStudents";
import "./index.css"

function App() {
  return (
    <StudentProvider>
      <Router>
        <div className="min-h-screen bg-[#0b0f19]">
          <Header />
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/favourites" element={<FavouriteStudents />} />
          </Routes>
        </div>
      </Router>
    </StudentProvider>
  );
}

export default App;