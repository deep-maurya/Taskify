import React from 'react';

const AddIcon = ({ className }) => (
  <svg
    className={className} // ✅ Accept className
    width="20" // ✅ Default size (if missing)
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 5v14M5 12h14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default AddIcon;
