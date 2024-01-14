import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "./features/menu/menuSlice";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import { IoNewspaper } from "react-icons/io5";
import { BiSolidGraduation } from "react-icons/bi";
import LogoWhite from "../assets/logoWhite.png";
import LogoBlack from "../assets/logoBlack.png";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { isSideBarOpened, isDarkModeActive } = useSelector(
    (state) => state.menu
  );

  const closeSidebarOnSmallScreen = () => {
    if (window.innerWidth <= 800) {
      dispatch(toggleSidebar());
    }
  };

  return (
    <aside
      className={`sidebar-container ${isSideBarOpened ? "active" : ""} ${
        isDarkModeActive ? "sidebar-dark" : ""
      }`}
    >
      <div className="sidebar-center">
        <header>
          <h3 className="title">
            <img
              className="logo"
              src={isDarkModeActive ? LogoWhite : LogoBlack}
              alt="Share Sight"
            />
            {/* Share <span className="title-two">Sight</span> */}
          </h3>

          <IoClose
            className="sidebar-close"
            onClick={() => dispatch(toggleSidebar())}
          />
        </header>
        <NavLink
          className={({ isActive }) =>
            `link ${isActive && "is-active"} ${
              isDarkModeActive ? "sidebar-dark" : ""
            }`
          }
          to="/"
          onClick={closeSidebarOnSmallScreen}
        >
          <FaHome className="link-icon" />
          <span className="link-title">Home</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => `link ${isActive && "is-active"}`}
          to="/wishlist"
          onClick={closeSidebarOnSmallScreen}
        >
          <TiStarFullOutline className="link-icon" />
          <span className="link-title">WishList</span>
        </NavLink>

        <NavLink
          className={({ isActive }) => `link ${isActive && "is-active"}`}
          to="/educational"
          onClick={closeSidebarOnSmallScreen}
        >
          <BiSolidGraduation className="link-icon" />
          <span className="link-title">Educational</span>
        </NavLink>
      </div>
    </aside>
  );
};
export default Sidebar;
