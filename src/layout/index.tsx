import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";

const AppLayout = () => {
  return (
    <>
      <AppBar />
      <main>
        <div className="mx-auto py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default AppLayout;
