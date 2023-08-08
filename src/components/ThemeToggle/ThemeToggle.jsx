import React, { useState } from 'react';
import { ImSun } from 'react-icons/im';
import { MdOutlineDarkMode } from 'react-icons/md';
import scss from './ThemeToggle.module.scss';

export const ThemeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [togglePosition, setTogglePosition] = useState(false);

  const handleToggle = () => {
    setIsLightMode(!isLightMode);
    setTogglePosition(!togglePosition);
  };

  const toggleStyles = {
    transform: togglePosition ? 'translateX(180%)' : 'translateX(0)',
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
        <span className={scss.toggleIcon}>
          <ImSun className={scss.iconToggle} />
        </span>
        <span className={scss.toggleIcon}>
          <MdOutlineDarkMode className={scss.iconToggle} />
        </span>
        <span className={scss.toggleCircle} style={toggleStyles}></span>
      </label>
    </div>
  );
};
