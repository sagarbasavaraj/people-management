import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { isEmpty } from "lodash";
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
import useNavigate from "../hooks/use-navigate";
import useDataApi from "../hooks/use-data-api";
import useForm from "../hooks/use-form";
import { addEditPeopleScreenValidations } from "./validations";
import "./add-edit-person.scss";

const INITIAL_STATE = {
  name: "",
  birthDate: "",
  jobTitle: "",
  country: "",
  salary: "",
};

function AddEditPerson() {
  let { id } = useParams();
  const title = id ? "Edit employee" : "Add a new employee";
  const description = id
    ? "Edit the information of your employee."
    : "Fill out the information of your new employee.";
  const actionBtnLabel = id ? "Save" : "Add employee";

  const handleFormSubmit = () => {
    const uniqueId = id || uid();
    saveData(uniqueId, { ...state, id: uniqueId }, navigate);
  };

  const [response, saveData] = useDataApi({
    url: "getItem",
    query: id,
    initialData: INITIAL_STATE,
  });
  const { data, error } = response;
  //use navigate hook to perform navigation
  const [navigateTo] = useNavigate();
  //form hook
  const [state, onChange, handleSubmit, errors] = useForm(
    data,
    handleFormSubmit,
    addEditPeopleScreenValidations
  );
  useEffect(() => {
    document.title = "Add Edit Person";
  }, []);

  const navigate = () => {
    navigateTo("/");
  };

  return (
    <Container>
      {error && <MessageBox message={error.message} type="error" />}
      <form className="employee-form" onSubmit={handleSubmit}>
        <Card>
          <CardHeader title={title} description={description} />
          <CardContent>
            <EmployeeForm state={state} onChange={onChange} errors={errors} />
          </CardContent>
          <CardActions>
            <ButtonGroup>
              <item label="Cancel" onClick={navigate} outline />
              <item
                type="submit"
                label={actionBtnLabel}
                disabled={!isEmpty(errors)}
              />
            </ButtonGroup>
          </CardActions>
        </Card>
      </form>
    </Container>
  );
}

export default AddEditPerson;
