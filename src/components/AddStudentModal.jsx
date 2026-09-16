import React, { useState } from "react";

function AddStudentModal(props) {
  const { onSave, onClose } = props;

  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    email: "",
    course: "",
    phone: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.name || !formData.studentId) return;

    onSave({
      ...formData,
    });

    onClose();
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      
      <div className="bg-[#1e293b] border border-gray-700 rounded-2xl p-6 w-full max-w-md shadow-xl text-white animate-in fade-in zoom-in-95 duration-150">
        
        <h3 className="text-2xl font-bold mb-4">
          Add Student Info
        </h3>

        <form onSubmit={handleSubmit} className="space-y-3.5">

          {/* Student Name */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-[#0b0f19] border border-gray-700 p-3 rounded-xl text-white text-base"
          />

          {/* Student ID */}
          <input
            type="text"
            name="studentId"
            placeholder="Student ID"
            value={formData.studentId}
            onChange={handleChange}
            required
            className="w-full bg-[#0b0f19] border border-gray-700 p-3 rounded-xl text-white text-base"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-[#0b0f19] border border-gray-700 p-3 rounded-xl text-white text-base"
          />

          {/* Course */}
          <input
            type="text"
            name="course"
            placeholder="Course"
            value={formData.course}
            onChange={handleChange}
            required
            className="w-full bg-[#0b0f19] border border-gray-700 p-3 rounded-xl text-white text-base"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full bg-[#0b0f19] border border-gray-700 p-3 rounded-xl text-white text-base"
          />

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-3">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 border border-gray-600 rounded-md text-gray-300 font-bold text-base transition-transform duration-150 transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2.5 bg-indigo-600 text-white font-bold text-base rounded-md transition-transform duration-150 transform hover:scale-105 active:scale-95 cursor-pointer shadow"
            >
              Save
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStudentModal;