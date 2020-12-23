import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Dropdown from "./dropdown";

describe("Dropdown", () => {
  test("renders Dropdown component", () => {
    const mockFn = jest.fn();
    render(
      <Dropdown
        label="Country"
        name="country"
        value="Portugal"
        onSelect={mockFn}
      />
    );
    expect(screen.getByText("Country")).toBeInTheDocument();
  });

  test("renders given options", async () => {
    const mockFn = jest.fn();
    const options = ["1", "2", "3"];
    const {container, getByTestId, getByText} = render(
      <Dropdown
        label="Country"
        name="country"
        options={options}
        value="Portugal"
        onSelect={mockFn}
      />
    );
    userEvent.click(getByTestId("dropdown"));
    expect(container.getElementsByClassName("dropdown-option").length).toBe(3);
    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
    expect(getByText("3")).toBeInTheDocument();
  });

  test("calls the onSelect callback handler", async () => {
    const onSelect = jest.fn();
    const options = ["1", "2", "3"];
    const {getByTestId, getByText} = render(
      <Dropdown
        label="Country"
        name="country"
        options={options}
        value="Portugal"
        onSelect={onSelect}
      />
    );
    userEvent.click(getByTestId("dropdown"));
    userEvent.click(getByText("1"));
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  test("display the option selected", async () => {
    const onSelect = jest.fn();
    const options = ["1", "2", "3"];
    const {getByText} = render(
      <Dropdown
        label="Country"
        name="country"
        options={options}
        value="2"
        onSelect={onSelect}
      />
    );
    expect(getByText("2")).toBeInTheDocument();
  });
});
