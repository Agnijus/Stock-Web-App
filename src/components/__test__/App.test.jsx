import React from "react";
import { render } from "@testing-library/react";
import { test } from "vitest";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "../../App";
import stockReducer from "../../components/features/stock/stockSlice";
import menuReducer from "../../components/features/menu/menuSlice";

const renderWithProviders = (
  ui,
  {
    store = configureStore({
      reducer: { stock: stockReducer, menu: menuReducer },
    }),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

test("renders App component", () => {
  renderWithProviders(<App />);
});
