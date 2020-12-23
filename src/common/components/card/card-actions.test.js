import { render } from "@testing-library/react";
import CardActions from "./card-actions";
import ButtonGroup from "../button-group/button-group";

describe("CardActions", () => {
  test("renders action buttons", () => {
    const { container, getByText } = render(
      <CardActions>
        <ButtonGroup>
          <item label="Cancel" outline />
          <item type="submit" label="Submit" />
        </ButtonGroup>
      </CardActions>
    );
    expect(container.getElementsByTagName("button").length).toBe(2);
    expect(getByText("Cancel")).toBeInTheDocument();
    expect(getByText("Submit")).toBeInTheDocument();
  });
});
