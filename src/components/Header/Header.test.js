import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header tests", () => {
  test("This test should be check if the header exists", async () => {
    render(<Header />);

    expect(await screen.findByTestId("header")).toBeVisible();
  });

  test("This test should be check if the header has an image", async () => {
    render(<Header />);

    const header = screen.getByTestId("header");
    const headerLogo = screen.getByTestId("header-logo");

    expect(header).toContainElement(headerLogo);
  });
});
