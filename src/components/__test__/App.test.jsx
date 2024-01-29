import React from "react";
import { render } from "./test-utils";
import { screen } from "@testing-library/react";
import { test } from "vitest";
import App from "../../App";
import { Route, Router } from "react-router-dom";
import { toast } from "react-toastify";
import StockView from "../StockView";

test("checks if 'Navigating the Stock Market' is rendered", () => {
  render(<App />);
});

test("test stock page", () => {
  // Render the StockView component within MemoryRouter
  render(<StockView toast={toast} />, {
    initialEntries: ["/stock/TSLA/NASDAQ"], // Set the initial route here
  });

  expect(screen.getByTestId("stock-view-default")).toBeInTheDocument();
});
