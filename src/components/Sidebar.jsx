import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "./features/menu/menuSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { isSideBarOpened } = useSelector((state) => state.menu);
  return (
    <aside className={`sidebar-container ${isSideBarOpened ? "active" : ""}`}>
      <div className="sidebar-center">
        <header>
          <h3 className="title">Stocky</h3>

          <IoClose
            className="sidebar-close"
            onClick={() => dispatch(toggleSidebar())}
          />
        </header>
        <div className="link">Overview</div>
        <div className="link">WishList</div>
        <div className="link">News</div>
        <div className="link">Educational</div>
      </div>
    </aside>
  );
};
export default Sidebar;
