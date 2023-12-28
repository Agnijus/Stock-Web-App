import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "./features/menu/menuSlice";
import { NavLink } from "react-router-dom";

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
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/wishlist">
          WishList
        </NavLink>
        <NavLink className="link" to="/news">
          News
        </NavLink>
        <NavLink className="link" to="/educational">
          Educational
        </NavLink>
      </div>
    </aside>
  );
};
export default Sidebar;
