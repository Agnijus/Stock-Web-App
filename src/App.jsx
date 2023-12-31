import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";

import HomePage from "./components/HomePage";
import StockView from "./components/StockView";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleResize } from "./components/features/menu/menuSlice";
import WishList from "./components/WishList";
import Educational from "./components/Educational";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const { isDarkModeActive } = useSelector((state) => state.menu);

  useEffect(() => {
    const resizeHandler = () => {
      dispatch(handleResize());
    };

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [dispatch]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose="1000"
        hideProgressBar="true"
        toastStyle={{
          backgroundColor: isDarkModeActive ? "#3a3a3a" : "white",
          color: isDarkModeActive ? "white" : "grey",
          width: "260px",
          margin: "0 auto",
        }}
      />
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/wishlist" element={<WishList toast={toast} />} />
            <Route path="/educational" element={<Educational />} />
            <Route
              path="/stock/:symbol/:exchange"
              element={<StockView toast={toast} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
