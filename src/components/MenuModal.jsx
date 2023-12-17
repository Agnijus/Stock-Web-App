const MenuModal = ({ isSideBarOpened, setIsSideBarOpened }) => {
  return (
    <section className={`modal-container ${isSideBarOpened ? "active" : ""}`}>
      <div className="modal-center">
        <button
          onClick={() => setIsSideBarOpened(false)}
          className="modal-close"
        >
          Close
        </button>
        <div className="link">Overview</div>
        <div className="link">WishList</div>
        <div className="link">News</div>
        <div className="link">Educational</div>
      </div>
    </section>
  );
};
export default MenuModal;
