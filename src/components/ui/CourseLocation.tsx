import { MapPinIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

interface CourseLocationProps {
  location: string;
}

const CourseLocation = ({ location }: CourseLocationProps) => {
  const [show, setShow] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        if (location !== "Online") setShow(true);
      }}
      onClick={() => {
        if (location !== "Online") setShow(!show);
      }}
      onMouseLeave={() => setShow(false)}
      className="relative inline-block cursor-pointer"
    >
      <div className="flex items-center gap-1 text-sm">
        <MapPinIcon className="w-4 h-4" />
        <p className="hover:border-b-2 border-dotted">
          {location === "Online" ? location : "Physical"}
        </p>
      </div>
      <span
        className={`${
          show ? "" : "hidden"
        } absolute bg-gray-800 text-white text-center z-10 bottom-full left-1/2 rounded-md px-2 py-1`}
      >
        {location}
      </span>
    </div>
  );
};

export default CourseLocation;
