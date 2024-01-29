import React from "react";
import { render } from "./test-utils";
import { screen } from "@testing-library/react";
import { test } from "vitest";
import Educational from "../Educational";

test("checks if 'Navigating the Stock Market' is rendered", () => {
  render(<Educational />);
  expect(screen.getByText("Navigating the Stock Market")).toBeInTheDocument();
});
