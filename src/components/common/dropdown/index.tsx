import React, { useState, useEffect, useRef, Fragment } from 'react';
import { twMerge } from 'tailwind-merge';
import { CheckIcon, DropdownIcon } from '../../../assets';

interface DropdownProps {
  trigger: React.ReactNode;
  selectedOption?: string;
  options?: any[];
  onSelect?: (option: any) => void;
  children?: Function;
  triggerClassName?: string,
  position?: "left" | "right",
  className?: string
}

const Dropdown: React.FC<DropdownProps> = ({ trigger, options, onSelect, children, triggerClassName, position = "left", selectedOption, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    setIsOpen(false);
    onSelect && onSelect(option);
  };

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
    <div ref={dropdownRef} className={twMerge("relative inline-block text-left z-[10]", className)}>

      <button
        onClick={toggleDropdown}
        className={twMerge("flex items-center hover:bg-gray-100 focus:bg-gray-100 p-2 rounded-lg transition-color duration-300", triggerClassName)}
      >
        {trigger} <DropdownIcon />
      </button>

      {isOpen && (
        <div
          className={twMerge("origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
            position === "right" ? "right-0" : "left-0"
          )}
        >
          <div className="py-1">
            {options ?
              options.map((option) => (
                <Fragment key={option?.value}>
                  <a
                    href="#"
                    onClick={() => handleSelect(option)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  >
                    {option?.label}

                    {selectedOption === option?.value && <CheckIcon className={"ml-auto"} />}
                  </a>

                  {option?.hasDivider && <hr />}
                </Fragment>
              ))
              :
              children && children(handleSelect)}
          </div>
        </div>
      )}

    </div>
  );
};

export default Dropdown;
