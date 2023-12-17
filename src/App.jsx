import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Overview from "./components/Overview";
import { useState } from "react";
import MenuModal from "./components/MenuModal";

function App() {
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);

  return (
    <main className="app">
      <Sidebar isSideBarOpened={isSideBarOpened} />
      <div className={`right-side ${isSideBarOpened ? "active" : ""}`}>
        <TopBar
          isSideBarOpened={isSideBarOpened}
          setIsSideBarOpened={setIsSideBarOpened}
        />
        <Overview />
      </div>
      <MenuModal
        setIsSideBarOpened={setIsSideBarOpened}
        isSideBarOpened={isSideBarOpened}
      />
    </main>
  );
}

export default App;
