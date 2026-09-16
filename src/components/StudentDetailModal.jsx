import { useContext } from "react";
import { StudentContext } from "../StudentContext";

function StudentDetailModal({ student, onClose }) {
   const {
    favourites,
    addToFavourite,
    removeFromFavourite,
    deleteStudent,
} = useContext(StudentContext);

    if (!student) return null;

    const isFavourite = favourites.some(
        (fav) => fav.id === student.id
    );

    const handleFavourite = () => {
        if (isFavourite) {
            removeFromFavourite(student.id);
        } else {
            addToFavourite(student);
        }
    };

    const handleDelete = () => {
        deleteStudent(student.id);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">

            {/* Modal */}
            <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[#4c1d95] bg-[#1e1b4b] p-6 shadow-2xl shadow-purple-900/40">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#312e81] pb-5">

                    <div>
                        <h2 className="text-2xl font-bold text-white">
                            Student Info
                        </h2>

                        <p className="mt-1 text-sm font-semibold tracking-wider text-[#a78bfa]">
                            Student Details
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="text-3xl font-light text-[#c4b5fd] transition hover:text-white"
                        aria-label="Close"
                    >
                        ×
                    </button>
                </div>


                {/* Student Information */}
                <div className="mt-6 space-y-4">

                    {/* Name */}
                    <div className="flex items-center gap-4 rounded-2xl border border-[#312e81] bg-[#0f0b1f] p-4 transition hover:border-[#8b5cf6]">

                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#7c3aed] text-2xl shadow-lg shadow-purple-900/30">
                            👤
                        </div>

                        <div className="min-w-0">
                            <p className="text-xs font-bold tracking-wide text-[#a78bfa]">
                                NAME
                            </p>

                            <p className="mt-1 break-words text-lg font-bold text-white">
                                {student.name}
                            </p>
                        </div>
                    </div>


                    {/* Student ID */}
                    <div className="flex items-center gap-4 rounded-2xl border border-[#312e81] bg-[#0f0b1f] p-4 transition hover:border-[#8b5cf6]">

                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#7c3aed] text-2xl shadow-lg shadow-purple-900/30">
                            🪪
                        </div>

                        <div className="min-w-0">
                            <p className="text-xs font-bold tracking-wide text-[#a78bfa]">
                                STUDENT ID
                            </p>

                            <p className="mt-1 break-words text-lg font-bold text-white">
                                {student.studentId}
                            </p>
                        </div>
                    </div>


                    {/* Course */}
                    <div className="flex items-center gap-4 rounded-2xl border border-[#312e81] bg-[#0f0b1f] p-4 transition hover:border-[#8b5cf6]">

                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#7c3aed] text-2xl shadow-lg shadow-purple-900/30">
                            🎓
                        </div>

                        <div className="min-w-0">
                            <p className="text-xs font-bold tracking-wide text-[#a78bfa]">
                                COURSE
                            </p>

                            <p className="mt-1 break-words text-lg font-bold text-white">
                                {student.course}
                            </p>
                        </div>
                    </div>


                    {/* Email */}
                    <div className="flex items-center gap-4 rounded-2xl border border-[#312e81] bg-[#0f0b1f] p-4 transition hover:border-[#8b5cf6]">

                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#7c3aed] text-2xl shadow-lg shadow-purple-900/30">
                            ✉️
                        </div>

                        <div className="min-w-0">
                            <p className="text-xs font-bold tracking-wide text-[#a78bfa]">
                                EMAIL
                            </p>

                            <p className="mt-1 break-words text-lg font-bold text-white">
                                {student.email}
                            </p>
                        </div>
                    </div>


                    {/* Phone */}
                    <div className="flex items-center gap-4 rounded-2xl border border-[#312e81] bg-[#0f0b1f] p-4 transition hover:border-[#8b5cf6]">

                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#7c3aed] text-2xl shadow-lg shadow-purple-900/30">
                            📞
                        </div>

                        <div className="min-w-0">
                            <p className="text-xs font-bold tracking-wide text-[#a78bfa]">
                                PHONE NO
                            </p>

                            <p className="mt-1 break-words text-lg font-bold text-white">
                                {student.phone}
                            </p>
                        </div>
                    </div>

                </div>


                {/* Buttons */}
                <div className="mt-6 grid grid-cols-1 gap-3 border-t border-[#312e81] pt-5 sm:grid-cols-2">

                    {/* Favourite */}
                    <button
                        onClick={handleFavourite}
                        className={`rounded-xl px-5 py-3 font-bold transition ${
                            isFavourite
                                ? "border border-[#4c1d95] bg-[#312e81] text-[#c4b5fd] hover:bg-[#3b3575]"
                                : "border border-[#7c3aed] bg-transparent text-[#c4b5fd] hover:bg-[#7c3aed]"
                        }`}
                    >
                        {isFavourite
                            ? "❤️ Favourite Student"
                            : "♡ Add to Favourite"}
                    </button>


                    {/* Delete */}
                    <button
                        onClick={handleDelete}
                        className="rounded-xl bg-[#7c3aed] px-5 py-3 font-bold text-white shadow-lg shadow-purple-900/30 transition hover:bg-[#8b5cf6]"
                    >
                        🗑️ Delete
                    </button>

                </div>

            </div>
        </div>
    );
}

export default StudentDetailModal;