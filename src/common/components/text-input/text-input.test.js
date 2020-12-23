import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextInput from "./text-input";

describe("TextInput", () => {
  test("renders input element with label and helper text", () => {
    const onChange = jest.fn();
    const { container, getByText } = render(
      <TextInput
        label="Name"
        name="name"
        value="John"
        onChange={onChange}
        helperText="Name of the employee"
      />
    );
    expect(getByText("Name")).toBeInTheDocument();
    expect(getByText("Name of the employee")).toBeInTheDocument();
    expect(container.querySelector("input[type='text']")).toBeInTheDocument();
  });

  test("calls the onChange callback handler", () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <TextInput
        label="Name"
        name="name"
        value="John"
        onChange={onChange}
        helperText="Name of the employee"
      />
    );
    userEvent.type(getByRole("textbox"), "John");
    //userEvent triggers it for every key stroke: John so total 4
    expect(onChange).toHaveBeenCalledTimes(4);
  });
});
