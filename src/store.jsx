import { configureStore } from "@reduxjs/toolkit";
import stockReducer from "./components/features/stock/stockSlice";
import menuReducer from "./components/features/menu/menuSlice";

export const store = configureStore({
  reducer: { stock: stockReducer, menu: menuReducer },
});
