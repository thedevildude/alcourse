export type Course = {
  id: number;
  name: string;
  instructor: string;
  description: string;
  enrollmentStatus: "Open" | "Closed" | "In Progress";
  thumbnail: string;
  duration: string;
  schedule: string;
  location: string;
  prerequisites: string[];
  syllabus: Syllabus[];
  students: Student[];
};

export type Student = {
  id: number;
  name: string;
  email: string;
};

export type Syllabus = {
  week: number;
  topic: string;
  content: string;
};
