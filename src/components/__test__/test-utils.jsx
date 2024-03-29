import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import stockReducer from "../features/stock/stockSlice";
import menuReducer from "../features/menu/menuSlice";
import { MemoryRouter } from "react-router-dom";

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: { stock: stockReducer, menu: menuReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <MemoryRouter>{children}</MemoryRouter>
      </Provider>
    );
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
export { render };
