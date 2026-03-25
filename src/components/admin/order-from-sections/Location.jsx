
import Map from "../../common/order/Map";
import { LuMapPin, LuNavigation } from "react-icons/lu";

export default function Location() {
  const inputStyle = "p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-500 font-mono outline-none w-full";
  const labelStyle = "text-xs font-bold text-gray-600 mb-1 uppercase tracking-wider";

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div className="lg:col-span-7 h-[400px] rounded-xl overflow-hidden border border-gray-100 shadow-inner">
          <Map />
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center gap-8">
          
          {/* Pick Up Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-orange-600">
              <LuMapPin size={20} />
              <h2 className="text-lg font-bold text-gray-800">Pick up Location</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="pick-lat" className={labelStyle}>Latitude</label>
                <input type="text" id="pick-lat" value="0.000000" readOnly className={inputStyle} />
              </div>
              <div className="flex flex-col">
                <label htmlFor="pick-long" className={labelStyle}>Longitude</label>
                <input type="text" id="pick-long" value="0.000000" readOnly className={inputStyle} />
              </div>
            </div>
          </div>

          <hr className="border-gray-50" />

          {/* Drop Off Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-orange-600">
              <LuNavigation size={20} />
              <h2 className="text-lg font-bold text-gray-800">Drop Off Location</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="drop-lat" className={labelStyle}>Latitude</label>
                <input type="text" id="drop-lat" value="0.000000" readOnly className={inputStyle} />
              </div>
              <div className="flex flex-col">
                <label htmlFor="drop-long" className={labelStyle}>Longitude</label>
                <input type="text" id="drop-long" value="0.000000" readOnly className={inputStyle} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}