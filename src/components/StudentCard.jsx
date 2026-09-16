import React from "react";

function StudentCard(props) {
  const {
    student,
    onClickCard,
    onButtonClick,
    isFavourite,
    buttonLabel,
    buttonStyle,
  } = props;

  return (
    <div
      onClick={onClickCard}
      className="bg-[#1e1b4b] border border-[#312e81] hover:border-[#8b5cf6] rounded-xl p-5 flex items-center justify-between cursor-pointer transition-all duration-150 transform hover:scale-[1.03] active:scale-[0.97] shadow-md hover:shadow-purple-900/30"
    >
      {/* Student Information */}

      <div className="flex items-center gap-4">

        {/* Student Avatar */}

        <div className="w-16 h-16 rounded-2xl border border-[#4c1d95] bg-white overflow-hidden flex items-center justify-center p-0.5 shadow-inner">
          <img
            src="/image.png"
            alt="Student Avatar"
            className="w-full h-full object-cover scale-110"
          />
        </div>

        {/* Student Name and ID */}

        <div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            {student.name}
          </h3>

          <p className="text-sm font-semibold text-[#a78bfa] mt-0.5">
            {/* Student ID: {student.studentId} */}
          </p>
        </div>
      </div>

      {/* Favourite Button */}

      <button
        onClick={onButtonClick}
        disabled={isFavourite}
        className={
          buttonStyle ||
          "px-4 py-2 bg-[#7c3aed] hover:bg-[#8b5cf6] text-white font-bold rounded-lg transition-all duration-150 transform hover:scale-105 active:scale-95 shadow-md shadow-purple-900/30"
        }
      >
        {buttonLabel}
      </button>
    </div>
  );
}

export default StudentCard;