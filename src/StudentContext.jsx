import React, { createContext, useContext, useState } from "react";

// ========================
// Initial student data
// ========================

const initialStudents = [
  {
    id: 1,
    name: "Peter",
    studentId: "ECE1011",
    course: "Full Stack Web Development",
    email: "Peter@gmail.com",
    phone: "9876543210",
  },
  {
    id: 2,
    name: "Smith",
    studentId: "ECE1012",
    course: "Full Stack Web Development",
    email: "Smith@gmail.com",
    phone: "9876543211",
  },
  {
    id: 3,
    name: "Raaga",
    studentId: "ECE1013",
    course: "Full Stack Web Development",
    email: "Raaga@gmail.com",
    phone: "9876543212",
  },
  {
    id: 4,
    name: "Mike",
    studentId: "ECE1014",
    course: "Full Stack Web Development",
    email: "Mike@gmail.com",
    phone: "9876543213",
  },
  {
    id: 5,
    name: "Vega",
    studentId: "ECE1015",
    course: "Full Stack Web Development",
    email: "Vega@gmail.com",
    phone: "9876543214",
  },
  {
    id: 6,
    name: "Zara",
    studentId: "ECE1016",
    course: "Full Stack Web Development",
    email: "Zara@gmail.com",
    phone: "9876543215",
  },
];

export const StudentContext = createContext();

// ========================
// Student Provider
// ========================

export function StudentProvider({ children }) {
  const [students, setStudents] = useState(initialStudents);
  const [favourites, setFavourites] = useState([]);

  // Add new student
  function addStudent(newStudent) {
    const createdStudent = {
      ...newStudent,
      id: Date.now(),
    };

    setStudents((prev) => [createdStudent, ...prev]);
  }

  // Add to favourites
  function addToFavourite(student) {
    const isAlreadyFav = favourites.some(
      (item) => item.id === student.id
    );

    if (!isAlreadyFav) {
      setFavourites((prev) => [...prev, student]);
    }
  }

  // Remove from favourites
  function removeFromFavourite(studentId) {
    setFavourites((prev) =>
      prev.filter((item) => item.id !== studentId)
    );
  }

  // Delete student
  function deleteStudent(studentId) {
    setStudents((prev) =>
      prev.filter((item) => item.id !== studentId)
    );

    setFavourites((prev) =>
      prev.filter((item) => item.id !== studentId)
    );
  }

  return (
    <StudentContext.Provider
      value={{
        students,
        favourites,
        addStudent,
        addToFavourite,
        removeFromFavourite,
        deleteStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

// ========================
// Custom Hook
// ========================

export function useStudentContext() {
  return useContext(StudentContext);
}