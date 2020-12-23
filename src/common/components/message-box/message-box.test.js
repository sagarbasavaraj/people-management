import { render } from "@testing-library/react";
import MessageBox from "./message-box";

describe("MessageBox", () => {
  test("renders given message of type error", () => {
    const { container, getByText } = render(
      <MessageBox message="test" type="error" />
    );
    expect(container.getElementsByClassName("error").length).toBe(1);
    expect(getByText("test")).toBeInTheDocument();
  });

  test("renders given message of type success", () => {
    const { container, getByText } = render(
      <MessageBox message="test" type="success" />
    );
    expect(container.getElementsByClassName("success").length).toBe(1);
    expect(getByText("test")).toBeInTheDocument();
  });
});
