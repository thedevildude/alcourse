import { UserGroupIcon } from "@heroicons/react/16/solid";
import React from "react";

interface TotalRegistrationProps {
  registrations: number;
}

const TotalRegistration: React.FC<TotalRegistrationProps> = ({
  registrations,
}) => {
  const displayText =
    registrations <= 10
      ? registrations.toString()
      : registrations < 50
      ? "10+"
      : "50+";

  return (
    <div className="flex items-center">
      <UserGroupIcon className="w-5 h-5 mr-1 text-gray-500" />
      <span className="text-gray-700">{displayText}</span>
    </div>
  );
};

export default TotalRegistration;
