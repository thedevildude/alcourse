import { Link } from "react-router-dom";
import ThemeSwitch from "../components/ui/ThemeSwitch";

const AppBar = () => {
  return (
    <>
      <nav className="mx-auto h-16 sm:px-6 lg:px-8 shadow-md flex items-center justify-between">
        <Link to="/">
          <h1 className="text-3xl font-bold text-purple-900 dark:bg-yellow-500 dark:text-white">
            Al Courses
          </h1>
        </Link>
        <div>
          <ThemeSwitch />
        </div>
      </nav>
    </>
  );
};

export default AppBar;
