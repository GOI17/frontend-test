import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App component tests", () => {
  test("This test should be check if the App component show up a text message", () => {
    render(<App />);

    expect(screen.getByText("Hello world!")).toBeVisible();
  });
});
