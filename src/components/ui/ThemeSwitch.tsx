import { ChangeEvent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../../redux/features/theme";
import { getValue } from "../../redux/features/theme/selectors";

const ThemeSwitch = () => {
  const { theme: themeValue } = useSelector(getValue);
  const dispatch = useDispatch();

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      dispatch(changeTheme(theme));
    }
  }, [dispatch]);

  useEffect(() => {
    if (themeValue === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeValue]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeTheme(e.target.value));
    localStorage.setItem("theme", e.target.value);
  };

  return (
    <>
      <select
        value={themeValue}
        onChange={(e) => handleChange(e)}
        className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </>
  );
};

export default ThemeSwitch;
