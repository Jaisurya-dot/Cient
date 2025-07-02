import React, { useState, useRef } from "react";
import { CiGlobe } from "react-icons/ci";
import { useLanguage } from "../context/LanguageProvider";

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
];

const LanguageToggleButton = () => {
  const context = useLanguage();
  if (!context) {
    throw new Error("LanguageToggleButton must be used within a LanguageProvider");
  }
  const { language, setLanguage } = context;
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative max-md:relative max-md:bottom-5 right-8 min-lg:relative min-lg:bottom-4 left-10" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Select language"
        className="p-1 rounded-lg bg-gray-200 hover:bg-gray-400 transition text-[#0a0a0b] text-xl flex items-center absolute "
      >
        <CiGlobe className="size-7 " />
      </button>
      {open && (
        <div
          className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg py-2 z-50"
          onMouseLeave={() => setOpen(false)}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setOpen(false);
              }}
              className={`w-full flex items-center px-4 py-2 text-left text-base transition
                ${language === lang.code
                  ? "bg-[#ffffff] text-[#000000] font-semibold"
                  : "hover:bg-gray-100 text-[#000000]"
                }`}
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageToggleButton;
