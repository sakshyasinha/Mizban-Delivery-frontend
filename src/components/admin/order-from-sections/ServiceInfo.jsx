import React from 'react';
import { MdOutlineSettingsSuggest } from "react-icons/md";
import Dropdown from "../../common/Dropdown"; 

export default function ServiceInfo() {
  
  const categories = [
    { id: 1, name: "All Categories", value: "all categories" },
    { id: 2, name: "Food", value: "food" },
    { id: 3, name: "Parcel", value: "parcel" },
    { id: 4, name: "Grocery", value: "grocery" },
    { id: 5, name: "Other", value: "other" },
  ];

  const serviceTypes = [
    { id: 1, name: "Immediate", value: "immediate" },
    { id: 2, name: "Scheduled", value: "scheduled" },
  ];

  const serviceLevels = [
    { id: 1, name: "Standard", value: "standard" },
    { id: 2, name: "Express", value: "express" },
  ];

  const priorities = [
    { id: 1, name: "Normal", value: "normal" },
    { id: 2, name: "High", value: "high" },
    { id: 3, name: "Critical", value: "critical" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6">
      {/* Header*/}
      <div className="flex items-center gap-2 mb-6 text-orange-600">
        <MdOutlineSettingsSuggest size={22} />
        <h2 className="text-lg font-bold text-gray-800">Service Details</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Delivery Category */}
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-700 mb-1">
            Delivery Category
          </label>
          <Dropdown 
            options={categories} 
            value="" 
            onSelect={() => {}} 
          />
        </div>

        {/* Service Type */}
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-700 mb-1">
            Service Type
          </label>
          <Dropdown 
            options={serviceTypes} 
            value="" 
            onSelect={() => {}} 
          />
        </div>

        {/* Service Level */}
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-700 mb-1">
            Service Level
          </label>
          <Dropdown 
            options={serviceLevels} 
            value="" 
            onSelect={() => {}} 
          />
        </div>

        {/* Priority */}
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-700 mb-1">
            Priority
          </label>
          <Dropdown 
            options={priorities} 
            value="" 
            onSelect={() => {}} 
          />
        </div>

        {/* Delivery Deadline */}
        <div className="flex flex-col md:col-span-2 lg:col-span-1">
          <label htmlFor="deadline" className="text-sm font-bold text-gray-700 mb-1">
            Delivery Deadline
          </label>
          <input 
            type="date" 
            id="deadline" 
            className="p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-orange-500 focus:bg-white transition-all w-full" 
          />
        </div>
      </div>
    </div>
  );
}