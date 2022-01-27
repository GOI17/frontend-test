import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("Title tests", () => {
  test("This test should be check if the title component is visible", async () => {
    render(<Title />);

    expect(await screen.findByTestId("title")).toBeVisible();
  });
});
