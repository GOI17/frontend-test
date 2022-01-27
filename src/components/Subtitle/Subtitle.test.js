import { render, screen } from "@testing-library/react";

import Subtitle from "./Subtitle";

describe("Subtitle tests", () => {
  test("This test should be check if the subtitle component render the subtitle prop", () => {
    const subtitleProps = {
      id: "my-subtitle",
      subtitle: "My Subtitle",
    };

    render(
      <Subtitle id={subtitleProps.id} subtitle={subtitleProps.subtitle} />
    );

    const subtitle = screen.getByTestId(subtitleProps.id);

    expect(subtitle).toHaveTextContent(subtitleProps.subtitle);
  });
  test("This test should be check if the subtitle component render the subtitle correctly", () => {
    const subtitleProps = {
      id: "my-subtitle",
      subtitle: "My Subtitle",
    };

    render(
      <Subtitle id={subtitleProps.id} subtitle={subtitleProps.subtitle} />
    );

    const subtitle = screen.getByTestId(subtitleProps.id);
    const updatedSubtitle = subtitleProps.subtitle.toUpperCase();
    expect(subtitle).not.toHaveTextContent(updatedSubtitle);
  });
});
