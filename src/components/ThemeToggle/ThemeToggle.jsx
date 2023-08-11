import React, { useState } from 'react';
import { FaRegSun } from 'react-icons/fa';
import { BsMoonStars } from 'react-icons/bs';
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
          <FaRegSun className={scss.iconToggle} />
        </span>
        <span className={scss.toggleIcon}>
          <BsMoonStars className={scss.iconToggle} />
        </span>
        <span className={scss.toggleCircle} style={toggleStyles}></span>
      </label>
    </div>
  );
};
