import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("renders App component", () => {
    render(<App />);
    expect(screen.getByText(/bill/i)).toBeDefined();
  });
});
