import { render, screen } from "@testing-library/react";
import CardHeader from "./card-header";

describe("CardHeader", () => {
  test("renders title", () => {
    render(<CardHeader title="Add Employee" />);
    expect(screen.getByText("Add Employee")).toBeInTheDocument();
  });

  test("renders description", () => {
    render(<CardHeader title="Add Employee" description="Add an employee" />);
    expect(screen.getByText("Add an employee")).toBeInTheDocument();
  });
});
