import React, { useState } from "react";

const FilterButtons = () => {
  const [selected, setSelected] = useState([]); // Store selected filters as an array
  const filters = [
    "Requested Sent",
    "Partially Approved",
    "Approved",
    "Denied",
    "Complete",
    "Info Required",
    "Service not reviewed",
    "Not required",
    "Scheduled",
    "Approved - Not Scheduled",
  ];

  const handleClick = (filter) => {
    setSelected((prevSelected) => {
      // Check if the filter is already selected
      if (prevSelected.includes(filter)) {
        // If it's already selected, remove it
        return prevSelected.filter((item) => item !== filter);
      } else {
        // If it's not selected, add it
        return [...prevSelected, filter];
      }
    });
  };

  return (
    <div className="flex gap-2 flex-wrap">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleClick(filter)}
          className={`cursor-pointer px-4 py-2 rounded-lg text-sm font-medium border transition ${
            selected.includes(filter)
              ? "bg-[#1785C6] text-white border-primary"
              : "border-[#e4e4e7] text-primary hover:bg-secondary-light"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
