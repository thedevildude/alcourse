import { Student } from "../types/course";
import CourseLocation from "./ui/CourseLocation";
import EnrollmentLabel from "./ui/EnrollmentLabel";
import TotalRegistration from "./ui/TotalRegistered";

interface CourseBoxProps {
  id: number;
  name: string;
  instructor: string;
  description: string;
  enrollmentStatus: "Open" | "Closed" | "In Progress";
  thumbnail: string;
  duration: string;
  schedule: string;
  location: string;
  students: Student[];
}

export const CourseBox = ({
  name,
  instructor,
  description,
  enrollmentStatus,
  thumbnail,
  duration,
  schedule,
  location,
  students,
}: CourseBoxProps) => {
  return (
    <div className="flex flex-col md:flex-row w-full border shadow-md gap-8 p-4 items-center md:items-start">
      <div className="relative md:w-[300px] md:h-[200px]">
        <img
          src={thumbnail}
          alt={name}
          className="w-full h-full object-cover"
        />
        <EnrollmentLabel
          className="absolute right-2 top-2"
          status={enrollmentStatus}
        />
      </div>
      <div className="flex flex-col flex-grow gap-5 justify-between">
        <div className="flex gap-2">
          <div className="flex flex-col w-11/12">
            <h3 className="text-lg md:text-2xl font-bold">{name}</h3>
            <p className="text-sm">{instructor}</p>
          </div>
          {location && <CourseLocation location={location} />}
        </div>
        <div className="text-sm md:text-md flex flex-col md:flex-row gap-2">
          <p className="">{duration}</p>
          {duration && schedule && <p className="hidden md:block">•</p>}
          <p className="">{schedule}</p>
        </div>
        <p className="text-sm">{description}</p>
        <TotalRegistration registrations={students.length} />
      </div>
    </div>
  );
};
