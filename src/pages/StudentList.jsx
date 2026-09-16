import React, { useContext, useState } from "react";
import StudentCard from "../components/StudentCard";
import StudentDetailModal from "../components/StudentDetailModal";
import AddStudentModal from "../components/AddStudentModal";
import { StudentContext } from "../StudentContext";

function StudentList() {
  const {
    students,
    favourites,
    addToFavourite,
    addStudent,
  } = useContext(StudentContext);

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="p-8 bg-[#0f0b1f] min-h-[calc(100vh-65px)] text-white">

      {/* Header Banner */}

      <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 max-w-5xl mx-auto mb-8">

        <div>
          <h2 className="text-4xl font-black text-[#c4b5fd] tracking-tight">
            Add or Remove your student
          </h2>

          <p className="text-[#a78bfa] text-base font-normal mt-1.5">
            View student profiles and save your favourite students.          </p>
        </div>

        {/* Add Student Button */}

        <button
          onClick={() => setShowAddModal(true)}
          className="bg-[#7c3aed] hover:bg-[#8b5cf6] text-white font-bold text-base px-6 py-3 rounded-md transition-transform duration-150 transform hover:scale-105 active:scale-95 shadow-lg shadow-purple-900/30 cursor-pointer self-start md:self-auto"
        >
          + Add Student
        </button>

      </div>

      {/* Grid List */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">

        {students.map(function (student) {

          const isFav = favourites.some(
            (fav) => fav.id === student.id
          );

          return (
            <StudentCard
              key={student.id}
              student={student}

              onClickCard={() =>
                setSelectedStudent(student)
              }

              onButtonClick={(e) => {
                e.stopPropagation();
                addToFavourite(student);
              }}

              isFavourite={isFav}

              buttonLabel={
                isFav
                  ? "❤️ Added"
                  : "❤️ Add to Favourite"
              }

              buttonStyle={`px-5 py-2.5 rounded-md text-base font-bold transition-transform duration-150 transform ${isFav
                  ? "bg-[#312e81] text-[#a78bfa] cursor-not-allowed opacity-80 border border-[#4c1d95]"
                  : "bg-[#7c3aed] text-white hover:bg-[#8b5cf6] hover:scale-105 active:scale-90 cursor-pointer shadow-md shadow-purple-900/30"
                }`}
            />
          );
        })}

      </div>

      {/* Add Student Modal */}

      {showAddModal && (
        <AddStudentModal
          onSave={addStudent}
          onClose={() => setShowAddModal(false)}
        />
      )}

      {/* Student Detail Modal */}

      {selectedStudent && (
        <StudentDetailModal
          student={selectedStudent}
          onClose={() =>
            setSelectedStudent(null)
          }
        />
      )}

    </div>
  );
}

export default StudentList;