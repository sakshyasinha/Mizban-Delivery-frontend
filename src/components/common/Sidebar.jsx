import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaBox } from "react-icons/fa";
import { FaTruckMoving } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { GrAnalytics } from "react-icons/gr";
import { GiKnifeFork } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";

export default function Sidebar({isOpen, setIsOpen}) {

  const navItems = [
    { key: "dashboard", path: "/", icon: <MdDashboard size={20} />, label: "Dashboard" },
    { key: "orders", path: "/orders", icon: <FaBox size={18} />, label: "Orders" },
    { key: "deliveries", path: "/deliveries", icon: <FaTruckMoving size={20} />, label: "Deliveries" },
    { key: "couriers", path: "/couriers", icon: <IoPeopleSharp size={20} />, label: "Couriers" },
    { key: "analytics", path: "/analytics", icon: <GrAnalytics size={20} />, label: "Analytics" },
    { key: "menu-manager", path: "/menu-manager", icon: <GiKnifeFork size={20} />, label: "Menu Manager" },
    { key: "settings", path: "/settings", icon: <IoMdSettings size={20} />, label: "Settings" },
  ];

  const activeStyle = ({ isActive }) =>
    isActive
      ? "bg-orange-600 text-white rounded-lg shadow-orange-100"
      : "text-gray-700 hover:bg-gray-200 hover:rounded-lg";

  return (
    <>
      {/* desktop lg */}
      <aside
        className={`
          hidden md:flex flex-col p-4
          w-64 fixed top-16 left-0 h-[calc(100vh-64px)] bg-white border-r border-gray-200overflow-y-auto mt-1
        `}
      >
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink key={item.key} to={item.path} className={activeStyle}>
              <div className="flex items-center gap-3 p-2 rounded-md">
                {item.icon} {item.label}
              </div>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* mobile sm, md */}      
      <aside
        className={`
          md:hidden fixed top-0 left-0 z-40
          w-64 h-screen bg-white border-r border-gray-200 p-4
          transform transition-transform duration-300 mt-12
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <nav className="flex flex-col gap-2 mt-16 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.path}
              className={activeStyle}
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center gap-3 p-2 rounded-md">
                {item.icon} {item.label}
              </div>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}