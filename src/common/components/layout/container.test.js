import { render } from "@testing-library/react";
import Container from "./container";

describe("Container", () => {
  test("renders container element with h1 as child element", () => {
    const { container, getByText } = render(
      <Container>
        <h1>test</h1>
      </Container>
    );
    expect(container.getElementsByClassName("container").length).toBe(1);
    expect(getByText("test")).toBeInTheDocument();
  });
});
