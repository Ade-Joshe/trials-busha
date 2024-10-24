import React from 'react';

interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: (isOn: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, onToggle }) => {
  return (
    <div
      className={`${isOn ? 'bg-black' : 'bg-gray-300'
        } relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition-colors duration-300`}
      onClick={() => onToggle(!isOn)}
    >
      <span
        className={`${isOn ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform bg-white rounded-full transition-transform duration-300`}
      />
    </div>
  );
};

export default ToggleSwitch;
