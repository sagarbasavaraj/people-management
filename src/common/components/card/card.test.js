import { render, screen } from "@testing-library/react";
import Card from "./card";
import CardHeader from "./card-header";
import CardContent from "./card-content";
import CardActions from "./card-actions";
import ButtonGroup from "../button-group/button-group";

describe("Card", () => {
  test("renders card header, card content and card actions", () => {
    const { container } = render(
      <Card>
        <CardHeader title="Add Employee" description="Add an employee" />
        <CardContent>
          <h1>Card Content</h1>
        </CardContent>
        <CardActions>
          <ButtonGroup>
            <item label="Cancel" outline />
            <item type="submit" label="Submit" />
          </ButtonGroup>
        </CardActions>
      </Card>
    );
    expect(screen.getByText("Add Employee")).toBeInTheDocument();
    expect(screen.getByText("Add an employee")).toBeInTheDocument();
    expect(screen.getByText("Card Content")).toBeInTheDocument();
    expect(container.getElementsByTagName("button").length).toBe(2);
    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });
});
