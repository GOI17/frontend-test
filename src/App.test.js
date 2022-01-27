import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App component tests", () => {
  test("This test should be check if the App has the header component", async () => {
    render(<App />);

    const header = await screen.findByTestId("header");
    const title = await screen.findByTestId("title");

    expect(header).toBeVisible();
    expect(title).toBeVisible();
  });
});
