import { MdDeliveryDining } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { AiFillBell } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import avatar from "../../assets/avatar.png"
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header({ onMenuClick }) {
  const { t, i18n } = useTranslation()
  const [langOpen, setLangOpen] = useState(false)

  const languages = [
    { code: "en", label: "English" },
    { code: "fa", label: "فارسی" },
    { code: "ps", label: "پښتو" },
  ];

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-200 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center md:w-auto gap-y-3">
        <div className="flex items-center justify-center gap-4 md:gap-2 sm:gap-1">
          {/* Mizban */}
          <div className="flex items-center gap-2 md:gap-1 mx-4 ">
            <button
              className="md:hidden mr-4 p-2 rounded bg-gray-100 transition-all ease-in-out duration-150 hover:bg-gray-200"
              onClick={onMenuClick}
            >
              <FiMenu size={18} />
            </button>

            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
              <MdDeliveryDining size={20} />
            </div>
            <span className="text-xl font-bold text-gray-800 tracking-tight truncate">
              {t("Mizban")} <span className="text-orange-600">{t("Delivery")}</span>
            </span>
          </div>

          {/* Search box */}
          <div className="bg-gray-100 px-3 rounded-md shadow-sm flex items-center gap-2 w-32 sm:w-48 md:w-72 lg:w-96 transition-all duration-300">
            <button className="hover:cursor-pointer">
              <IoSearchSharp size={18} className="text-gray-400" />
            </button>
            <input
              className="bg-gray-100 w-full outline-none placeholder:text-gray-400 placeholder:text-sm py-1 text-gray-500"
              placeholder={t("Search deliveries, drivers ...")}
              type="text"
            />
          </div>

          {/* Language Dropdown */}
          <div className="relative ml-4">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center justify-between min-w-[110px] bg-white border 
                border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 
                shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition
              "
            >
              <span>
                {languages.find((l) => l.code === i18n.language.split("-")[0])
                  ?.label || "Language"}
              </span>
              <svg
                className={`w-4 h-4 ml-2 text-gray-500 transition-transform ${langOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {langOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)}></div>
                <div className="absolute left-0 mt-2 w-full min-w-30 bg-white border border-gray-200 rounded-lg shadow-xl z-20 overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                        i18n.language.split("-")[0] === lang.code
                          ? "bg-orange-50 text-orange-600 font-semibold"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="hidden lg:flex md:flex sm:flex items-center justify-center ">
          {/* notifs, and settings */}
          <div className="flex items-center justify-center gap-2 border-r border-gray-300 px-2 ">
            <div className="bg-gray-100 rounded-xl p-1.5 text-gray-500">
              <button className="hover:cursor-pointer flex justify-center">
                <AiFillBell size={24} />
              </button>
            </div>

            <div className="bg-gray-100 rounded-xl p-1.5 text-gray-500">
              <button className="hover:cursor-pointer flex justify-center">
                <IoMdSettings size={24} />
              </button>
            </div>
          </div>

          {/* admin part */}
          <div className="ml-4 hidden lg:flex md:flex xl:flex gap-4 items-center justify-center px-4">
            <div className="text-right">
              <h3 className="text-gray-600 text-xs font-semibold ">{t("Mizban Central")}</h3>
              <h6 className="text-gray-400 text-[10px]">{t("Admin Account")}</h6>
            </div>
            <div>
              <div className="rounded-full">
                <img src={avatar} className="w-10 h-10 bg-green-200 rounded-full p-1 border border-slate-200" alt="admin" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}