import { configureStore } from "@reduxjs/toolkit";
import stockReducer from "./components/features/stock/stockSlice";

export const store = configureStore({
  reducer: { stock: stockReducer },
});
