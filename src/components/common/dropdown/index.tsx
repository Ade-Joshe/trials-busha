import React, { useState, useEffect, useRef } from 'react';

interface DropdownProps {
  onSelect: (option: any) => void;
  target: React.ReactNode;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ target, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // const handleSelect = (option: string) => {
  //   onSelect(option);
  //   setIsOpen(false);
  // };

  // for Click-away listener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on cleanup
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">

      <button
        onClick={toggleDropdown}
        className="flex items-center hover:bg-gray-100 focus:bg-gray-100 p-2 rounded-lg transition-color duration-300"
      >
        {target}
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1">
            {children}
            {/* {options.map((option) => (
              <a
                key={option}
                href="#"
                onClick={() => handleSelect(option)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {option}
              </a>
            ))} */}
          </div>
        </div>
      )}

    </div>
  );
};

export default Dropdown;
