import { render, screen } from "@testing-library/react";
import AppBar from "./app-bar";

describe("AppBar", () => {
  test("renders user avatar", () => {
    const { container } = render(<AppBar />);
    expect(container.getElementsByClassName("avatar")[0]).toBeInTheDocument();
  });

  test("renders user info", () => {
    render(<AppBar />);
    expect(screen.getByText("Julie Howard")).toBeInTheDocument();
  });

  test("renders user role", () => {
    render(<AppBar />);
    expect(screen.getByText("Admin")).toBeInTheDocument();
  });
});
