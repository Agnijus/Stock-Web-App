import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Overview from "./components/Overview";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOneDay } from "./components/features/stock/stockSlice";
import { handleResize } from "./components/features/menu/menuSlice";

function App() {
  const dispatch = useDispatch();
  const { isSideBarOpened } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(setOneDay());
  }, []);

  // const [isSideBarOpened, setIsSideBarOpened] = useState(
  //   window.innerWidth > 800
  // );
  // const [isManuallyClosed, setIsManuallyClosed] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      dispatch(handleResize());
    };

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [dispatch]);

  return (
    <main className="app">
      <Sidebar />
      <div className={`right-side ${isSideBarOpened ? "active" : ""}`}>
        <TopBar />
        <Overview />
      </div>
    </main>
  );
}

export default App;
