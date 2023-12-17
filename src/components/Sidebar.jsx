const Sidebar = ({ isSideBarOpened }) => {
  console.log(isSideBarOpened);
  return (
    <aside className={`sidebar-container ${isSideBarOpened ? "active" : ""}`}>
      <div className="sidebar-center">
        <header>
          <h3 className="title">Stock App</h3>
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
