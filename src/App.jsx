import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Overview from "./components/Overview";
import { useState, useEffect } from "react";
import MenuModal from "./components/MenuModal";

function App() {
  const [isSideBarOpened, setIsSideBarOpened] = useState(
    window.innerWidth > 800
  );
  const [isManuallyClosed, setIsManuallyClosed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (!isManuallyClosed) {
        setIsSideBarOpened(window.innerWidth > 800);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isManuallyClosed]);

  const toggleSidebar = () => {
    setIsSideBarOpened(!isSideBarOpened);

    if (isSideBarOpened) {
      setIsManuallyClosed(true);
    } else {
      setIsManuallyClosed(false);
    }
  };

  return (
    <main className="app">
      <Sidebar
        isSideBarOpened={isSideBarOpened}
        setIsSideBarOpened={toggleSidebar}
      />
      <div className={`right-side ${isSideBarOpened ? "active" : ""}`}>
        <TopBar
          isSideBarOpened={isSideBarOpened}
          setIsSideBarOpened={toggleSidebar}
        />
        <Overview />
      </div>
    </main>
  );
}

export default App;
