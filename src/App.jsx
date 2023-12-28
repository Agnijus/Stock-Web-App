import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";

import HomePage from "./components/HomePage";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleResize } from "./components/features/menu/menuSlice";
import {
  fetchStockData,
  searchStocks,
} from "./components/features/stock/stockSlice";
import WishList from "./components/WishList";
import News from "./components/News";
import Educational from "./components/Educational";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStockData());
  }, []);

  useEffect(() => {
    const resizeHandler = () => {
      dispatch(handleResize());
    };

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/news" element={<News />} />
          <Route path="/educational" element={<Educational />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
