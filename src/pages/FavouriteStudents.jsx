import React, { useContext, useState } from "react";
import { StudentContext } from "../StudentContext";
import StudentCard from "../components/StudentCard";
import StudentDetailModal from "../components/StudentDetailModal";

function FavouriteStudents() {
  const {
    favourites,
    removeFromFavourite,
  } = useContext(StudentContext);

  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div className="p-8 bg-[#0f0b1f] min-h-[calc(100vh-65px)] text-white">

      {/* Page Title */}

      <h2 className="text-4xl font-extrabold mb-8 max-w-5xl mx-auto text-[#c4b5fd] tracking-tight">
        Favourite Students
      </h2>

      {/* No Favourite Students */}

      {favourites.length === 0 ? (

        <div className="max-w-5xl mx-auto text-center py-20 border border-dashed border-[#312e81] rounded-3xl bg-[#1e1b4b] flex flex-col items-center justify-center p-8">

          <span className="text-6xl mb-4 animate-bounce">
            📚
          </span>

          <h3 className="text-3xl font-bold text-white mb-2">
            No Favourite Students Yet
          </h3>

          <p className="text-[#a78bfa] text-lg font-medium">
            Explore the Student List and add students to your favourites.
          </p>

        </div>

      ) : (

        /* Favourite Student Cards */

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">

          {favourites.map(function (student) {

            return (
              <StudentCard
                key={student.id}
                student={student}

                onClickCard={() =>
                  setSelectedStudent(student)
                }

                onButtonClick={(e) => {
                  e.stopPropagation();
                  removeFromFavourite(student.id);
                }}

                isFavourite={false}

                buttonLabel="Remove"

                buttonStyle="
                  px-5 py-2.5
                  rounded-md
                  text-base
                  font-bold
                  bg-[#7c3aed]
                  hover:bg-[#8b5cf6]
                  text-white
                  transition-transform
                  duration-150
                  transform
                  hover:scale-105
                  active:scale-90
                  shadow-md
                  shadow-purple-900/30
                  cursor-pointer
                "
              />
            );

          })}

        </div>
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

export default FavouriteStudents;