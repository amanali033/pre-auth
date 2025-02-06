import React from "react";

const statusStyles = {
  "Requested Sent": { bgColor: "bg-yellow-500", textColor: "text-white" },
  "Partially Approved": { bgColor: "bg-orange-500", textColor: "text-white" },
  Approved: { bgColor: "bg-green-500", textColor: "text-white" },
  Denied: { bgColor: "bg-red-500", textColor: "text-white" },
  Complete: { bgColor: "bg-blue-500", textColor: "text-white" },
  "Info Required": { bgColor: "bg-amber-500", textColor: "text-white" },
  "Service not reviewed": { bgColor: "bg-gray-500", textColor: "text-white" },
  "Not required": { bgColor: "bg-teal-500", textColor: "text-white" },
  Scheduled: { bgColor: "bg-lime-500", textColor: "text-white" },
  "Approved - Not Scheduled": {
    bgColor: "bg-cyan-500",
    textColor: "text-white",
  },
};

const StatusBadge = ({ status }) => {
  const { bgColor, textColor } = statusStyles[status] || {
    bgColor: "bg-gray-500",
    textColor: "text-white",
  };

  return (
    <button
      className={` inline-flex items-center justify-center py-[2px] min-h-[22px] px-[10px] rounded-full text-sm font-medium ${bgColor} ${textColor} capitalize`}
    >
      <span style={{ lineHeight: 1 }}>
        {status}
      </span>
    </button>
  );
};

export default StatusBadge;
