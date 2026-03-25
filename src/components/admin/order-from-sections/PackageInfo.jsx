import React from 'react';
import { LuPackage, LuTriangleAlert, LuFileText, LuWeight } from "react-icons/lu";
import Dropdown from "../../common/Dropdown"; 

export default function PackageInfo() {
  const sizes = [
    { id: 1, name: "Small ", value: "small" },
    { id: 2, name: "Medium ", value: "medium" },
    { id: 3, name: "Large ", value: "large" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6 text-orange-600">
        <LuPackage size={22} />
        <h2 className="text-lg font-bold text-gray-800">Package Details</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Package Weight */}
        <div className="flex flex-col">
          <label htmlFor="weight" className="text-sm font-bold text-gray-700 mb-1 flex items-center gap-1">
            Pacakge Weight
          </label>
          <input 
            type="number" 
            min={0} 
            id="weight" 
            placeholder="0.00"
            className="p-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-orange-500 focus:bg-white transition-all w-full font-medium" 
          />
        </div>

        {/* Package Size */}
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-700 mb-1">
            Package Size
          </label>
          <Dropdown 
            options={sizes} 
            placeholder="Select Size"
            value="" 
            onSelect={() => {}} 
          />
        </div>

        {/* Fragile */}
        <div className="md:col-span-2">
          <label className="flex items-center gap-3 p-4 bg-orange-50/50 border border-orange-100 rounded-xl cursor-pointer hover:bg-orange-50 transition-colors w-fit">
            <input 
              type="checkbox" 
              id="isFragile" 
              className="w-5 h-5 accent-orange-600 cursor-pointer" 
            />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-800 flex items-center gap-1">
                <LuTriangleAlert className="text-orange-500" size={16} /> Fragile Package
              </span>
              <span className="text-xs text-gray-500">Handle with extra care during transit</span>
            </div>
          </label>
        </div>

        {/* Notes */}
        <div className="md:col-span-2 flex flex-col">
          <label htmlFor="note" className="text-sm font-bold text-gray-700 mb-1 flex items-center gap-1">
            Notes
          </label>
          
          <div className="relative">
            <textarea 
              id="note" 
              maxLength={200}
              placeholder="Add any specific delivery instructions here..."
              className="p-4 pb-8 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-orange-500 focus:bg-white transition-all w-full min-h-[120px] resize-none text-sm"
            ></textarea>
            

            <div className="absolute bottom-3 right-3 text-[10px] text-gray-400 uppercase tracking-widest font-bold bg-white/50 px-1 rounded">
              0/200
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}