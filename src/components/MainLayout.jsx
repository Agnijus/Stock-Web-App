import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const { isSideBarOpened } = useSelector((state) => state.menu);

  return (
    <main className="app">
      <Sidebar />
      <div className={`right-side ${isSideBarOpened ? "active" : ""}`}>
        <TopBar />
        <Outlet />
      </div>
    </main>
  );
};
export default MainLayout;
