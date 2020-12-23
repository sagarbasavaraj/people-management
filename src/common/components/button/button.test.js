import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./button";

describe("Button", () => {
  test("renders button element", () => {
    render(<Button label="Save" />);
    expect(screen.getByText("Save")).toBeInTheDocument();
  });

  test("renders button with icon", () => {
    const { container } = render(<Button label="Save" icon="far fa-user" />);
    expect(container.getElementsByTagName("i")[0]).toBeInTheDocument();
    expect(container.getElementsByClassName("far fa-user").length).toBe(1);
  });

  test("renders button with disabled state", () => {
    const { container } = render(
      <Button label="Save" icon="far fa-user" disabled />
    );
    expect(container.getElementsByTagName("button")[0]).toBeDisabled();
  });

  test("calls the onClick callback handler", () => {
    const onClick = jest.fn();
    render(<Button label="Save" icon="far fa-user" onClick={onClick} />);
    fireEvent.click(screen.getByText("Save"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
