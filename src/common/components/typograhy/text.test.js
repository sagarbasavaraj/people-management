import { render } from "@testing-library/react";
import Text from "./text";

describe("Text", () => {
  test("renders helper text", () => {
    const { getByText } = render(<Text text="What is their role?" />);
    expect(getByText("What is their role?")).toBeInTheDocument();
  });
});
