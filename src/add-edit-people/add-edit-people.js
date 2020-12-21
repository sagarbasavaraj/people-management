import React from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  ButtonGroup,
} from "../common/components";
import EmployeeForm from "./components/employee-form";
import "./add-edit-people.scss";

function AddEditPeople() {
  let { id } = useParams();
  const title = id ? "Edit employee" : "Add a new employee";
  const description = id
    ? "Edit the information of your employee."
    : "Fill out the information of your new employee.";
  const actionBtnLabel = id ? "Save" : "Add employee";
  const history = useHistory();

  const navigateToScreen = () => {
    history.push("/"); 
  };

  return (
    <Container>
      <form className="employee-form">
        <Card>
          <CardHeader title={title} description={description} />
          <CardContent>
            <EmployeeForm />
          </CardContent>
          <CardActions>
            <ButtonGroup>
              <item label="Cancel" onClick={navigateToScreen} outline />
              <item label={actionBtnLabel} onClick={() => null} />
            </ButtonGroup>
          </CardActions>
        </Card>
      </form>
    </Container>
  );
}

export default AddEditPeople;
