import { samplecourses } from "../../assets/samplecourses";
import { CourseBox } from "../../components/coursebox";

const CourseList = () => {
  return (
    <section className="flex flex-col w-full">
      <h2 className="text-2xl font-bold">Courses</h2>
      <div className="flex flex-col gap-5">
        {Object.keys(samplecourses).map((key) => {
          return (
            <>
              <CourseBox
                key={key}
                id={samplecourses[key].id}
                name={samplecourses[key].name}
                instructor={samplecourses[key].instructor}
                description={samplecourses[key].description}
                enrollmentStatus={samplecourses[key].enrollmentStatus}
                thumbnail={samplecourses[key].thumbnail}
                duration={samplecourses[key].duration}
                schedule={samplecourses[key].schedule}
                location={samplecourses[key].location}
                students={samplecourses[key].students}
              />
            </>
          );
        })}
      </div>
    </section>
  );
};

export default CourseList;
