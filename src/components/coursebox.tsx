import { Student } from "../types/course";

interface CourseBoxProps {
  id: number;
  name: string;
  instructor: string;
  description: string;
  enrollmentStatus: string;
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
    <div className="flex items-center w-full p-2 shadow-md">
      {thumbnail && (
        <img src={thumbnail} alt={name} className="w-[300px] h-[200px]" />
      )}
      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm">{description}</p>
        <p className="text-sm">{instructor}</p>
        <p className="text-sm">{duration}</p>
        <p className="text-sm">{schedule}</p>
        <p className="text-sm">{location}</p>
        <p className="text-sm">{enrollmentStatus}</p>
        <p className="text-sm">{students.length}</p>
      </div>
    </div>
  );
};
