import React, { useState } from "react";

export default function AddCourier() {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    profilePicture: null,
    vehicleType: "Bike",
    vehicleRegistration: "",
    maxWeightKg: 20,
    maxPackages: 10,
    shiftStart: "11:00",
    shiftEnd: "15:00",
    homeAddress: "",
    status: "Offline",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Container */}
      <div className="max-w-5xl mx-auto py-10 px-6">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Add Courier</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-md p-8 space-y-8"
        >
          {/* ---------------- Profile Picture Section ---------------- */}
          <div className="flex items-center gap-15">
            {/* Profile Picture */}
            <div className="shrink-0">
              {/* Profile Picture Placeholder Circle */}
              <div className="mt-4 flex justify-center items-center w-36 h-36 bg-gray-200 rounded-full relative">
                {!formData.profilePicture ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 4h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V6a2 2 0 012-2zM4 16h4a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4a2 2 0 012-2zm5-4h4m-2 2v6m2 0H7a2 2 0 01-2-2V10a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H7"
                    />
                  </svg>
                ) : (
                  <img
                    src={URL.createObjectURL(formData.profilePicture)}
                    alt="Profile Preview"
                    className="w-36 h-36 object-cover rounded-full border-2 border-gray-300"
                  />
                )}
              </div>

              {/* Update Picture Button */}
              <button
                type="button"
                onClick={() =>
                  document.getElementById("profilePicInput").click()
                }
                className="mt-4 py-1 px-5 bg-orange-500 text-white hover:bg-orange-600 transition shadow-md rounded-full"
              >
                Update Picture
              </button>

              {/* Hidden File Input */}
              <input
                id="profilePicInput"
                type="file"
                name="profilePicture"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
              />
            </div>

            {/* Form fields */}
            <div className="flex-1 space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Full Name <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              {/* Contact Number */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Contact Number <span className="text-orange-500">*</span>
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  required
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Enter contact number"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>
            </div>
          </div>

          {/* ---------------- Vehicle Info ---------------- */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Vehicle Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Vehicle Type */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Vehicle Type
                </label>
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                >
                  <option>Bike</option>
                  <option>Motorbike</option>
                  <option>Car</option>
                  <option>Van</option>
                </select>
              </div>

              {/* Registration */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Vehicle Registration Number
                </label>
                <input
                  type="text"
                  name="vehicleRegistration"
                  value={formData.vehicleRegistration}
                  onChange={handleChange}
                  placeholder="Enter registration number"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>
            </div>
          </div>

          {/* ---------------- Capacity & Availability ---------------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Capacity */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-700">
                Capacity
              </h2>

              <label className="block text-sm font-medium text-gray-600">
                Max Weight kg
              </label>
              <div className="space-y-4">
                <input
                  type="number"
                  name="maxWeightKg"
                  value={formData.maxWeightKg}
                  onChange={handleChange}
                  placeholder="Max Weight (kg)"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                />

                <label className="block text-sm font-medium text-gray-600">
                  Max Packages
                </label>
                <input
                  type="number"
                  name="maxPackages"
                  value={formData.maxPackages}
                  onChange={handleChange}
                  placeholder="Max Packages"
                  className="-mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>
            </div>

            {/* Availability */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-700">
                Availability
              </h2>

              <div className="flex gap-4">
                <input
                  type="time"
                  name="shiftStart"
                  value={formData.shiftStart}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                />

                <input
                  type="time"
                  name="shiftEnd"
                  value={formData.shiftEnd}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>
            </div>
          </div>

          {/* ---------------- Address & Status ---------------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Home Address
              </label>
              <textarea
                name="homeAddress"
                rows="3"
                value={formData.homeAddress}
                onChange={handleChange}
                placeholder="Enter home address"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
              >
                <option>Offline</option>
                <option>Idle</option>
                <option>Assigned</option>
                <option>Delivering</option>
              </select>
            </div>
          </div>

          {/* ---------------- Buttons ---------------- */}
          <div className="flex justify-end gap-4 pt-6 border-t">
            <button
              type="button"
              className="px-6 py-2 rounded-xl bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition shadow-md"
            >
              Save Courier
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
