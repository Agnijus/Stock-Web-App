import React from "react";
import { render } from "./test-utils";
import { screen } from "@testing-library/react";
import { test } from "vitest";
import HomePage from "../HomePage";

test("checks if 'Navigating the Stock Market' is rendered", () => {
  render(<HomePage />);
});
