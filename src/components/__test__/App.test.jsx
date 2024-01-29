import React from "react";
import { render } from "./test-utils";
import { screen } from "@testing-library/react";
import { test } from "vitest";
import App from "../../App";

test("checks if 'Navigating the Stock Market' is rendered", () => {
  render(<App />);
});
