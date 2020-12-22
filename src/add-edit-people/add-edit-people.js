import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { uid } from "../common/helpers/util";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  ButtonGroup,
  MessageBox,
} from "../common/components";
import EmployeeForm from "./components/employee-form";
import useForm from "../hooks/use-form";
import useDataApi from "../hooks/use-data-api";
import "./add-edit-people.scss";

const INITIAL_STATE = {
  name: "",
  birthDate: "",
  jobTitle: "",
  country: "",
  salary: "",
};

function AddEditPeople() {
  let { id } = useParams();
  const [response, saveData] = useDataApi({
    url: "getItem",
    query: id,
    initialData: INITIAL_STATE,
  });
  const { data, error } = response;
  const [state, onChange] = useForm(data);

  const history = useHistory();
  const title = id ? "Edit employee" : "Add a new employee";
  const description = id
    ? "Edit the information of your employee."
    : "Fill out the information of your new employee.";
  const actionBtnLabel = id ? "Save" : "Add employee";

  const navigate = () => {
    history.push("/");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const uniqueId = id || uid();
    saveData(uniqueId, { ...state, id: uniqueId }, navigate);
  };

  return (
    <Container>
      {error && (
        <MessageBox message={error.message} type="error" />
      )}
      <form className="employee-form" onSubmit={handleFormSubmit}>
        <Card>
          <CardHeader title={title} description={description} />
          <CardContent>
            <EmployeeForm state={state} onChange={onChange} />
          </CardContent>
          <CardActions>
            <ButtonGroup>
              <item label="Cancel" onClick={navigate} outline />
              <item type="submit" label={actionBtnLabel} />
            </ButtonGroup>
          </CardActions>
        </Card>
      </form>
    </Container>
  );
}

export default AddEditPeople;
