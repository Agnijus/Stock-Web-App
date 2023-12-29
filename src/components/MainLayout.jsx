import SearchOverlay from "./SearchOverlay";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const { isSideBarOpened, isSearchActive } = useSelector(
    (state) => state.menu
  );

  return (
    <main className="app">
      {isSearchActive && (
        <div className="app-overlay">
          <SearchOverlay />
        </div>
      )}
      <Sidebar />
      <div className={`right-side ${isSideBarOpened ? "active" : ""}`}>
        <TopBar />
        <Outlet />
      </div>
    </main>
  );
};
export default MainLayout;
