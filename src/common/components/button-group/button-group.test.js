import { render, screen } from "@testing-library/react";
import ButtonGroup from "./button-group";

describe("ButtonGroup", () => {
  test("renders group of buttons", () => {
    const { container } = render(
      <ButtonGroup>
        <item label="Cancel" outline />
        <item type="submit" label="Submit" />
      </ButtonGroup>
    );
    expect(container.getElementsByTagName("button").length).toBe(2);
    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });
});
