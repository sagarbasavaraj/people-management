import { render, screen } from "@testing-library/react";
import CardContent from "./card-content";

describe("CardContent", () => {
  test("renders specified content", () => {
    render(
      <CardContent>
        <h1>Card Content</h1>
      </CardContent>
    );
    expect(screen.getByText("Card Content")).toBeInTheDocument();
  });
});
