import { IoClose } from "react-icons/io5";

const Sidebar = ({ isSideBarOpened, setIsSideBarOpened }) => {
  return (
    <aside className={`sidebar-container ${isSideBarOpened ? "active" : ""}`}>
      <div className="sidebar-center">
        <header>
          <h3 className="title">Stocky</h3>

          <IoClose
            className="sidebar-close"
            onClick={() => setIsSideBarOpened(false)}
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
