import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Overview from "./components/Overview";
import { useState, useEffect, createContext } from "react";

export const GlobalContext = createContext();

function App() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [interval, setInterval] = useState("5min");

  useEffect(() => {
    // 1D - Default Date
    const date = new Date();
    setEndDate(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    );

    date.setDate(date.getDate() - 1);
    setStartDate(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    );
  }, []);

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
    <GlobalContext.Provider
      value={{
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        interval,
        setInterval,
      }}
    >
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
    </GlobalContext.Provider>
  );
}

export default App;
