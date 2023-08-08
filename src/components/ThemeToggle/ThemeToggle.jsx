import React, { useState } from 'react';
import scss from './ThemeToggle.module.scss';

const ThemeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [togglePosition, setTogglePosition] = useState(false);

  const handleToggle = () => {
    setIsLightMode(!isLightMode);
    setTogglePosition(!togglePosition);
  };

  const toggleStyles = {
    transform: togglePosition ? 'translateX(100%)' : 'translateX(0)',
  };

  return (
    <div className={scss.themeToggle}>
      <input
        type="checkbox"
        className={scss.toggleInput}
        id="themeToggle"
        checked={isLightMode}
        onChange={handleToggle}
      />
      <label htmlFor="themeToggle" className={scss.toggleLabel}>
        <span className={scss.toggleText}>Dark</span>
        <span className={scss.toggleText}>Light</span>
        <span className={scss.toggleCircle} style={toggleStyles}></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
