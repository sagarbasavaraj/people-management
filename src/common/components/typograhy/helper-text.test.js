import { render } from "@testing-library/react";
import HelperText from "./helper-text";

describe("HelperText", () => {
  test("renders helper text", () => {
    const { getByText } = render(<HelperText text="What is their role?" />);
    expect(getByText("What is their role?")).toBeInTheDocument();
  });
});
