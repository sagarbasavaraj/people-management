import React, { useEffect } from "react";
import { Container, MessageBox } from "../common/components";
import { useHistory } from "react-router-dom";
import { keys } from "lodash";
import useDataApi from "../hooks/use-data-api";
import PageHeader from "./components/page-header";
import PeopleList from "./components/people-list";

function Home() {
  const history = useHistory();
  const [response] = useDataApi({ url: "getAll", initialData: {} });
  const { data, error } = response;

  useEffect(() => {
    document.title = "Home";
  }, []);

  const handleAddEditEmployeeBtnClick = (item) => {
    history.push(`/add-edit-people/${(item && item.id) || ""}`);
  };

  return (
    <Container>
      {error && <MessageBox message={error.message} type="error" />}
      <PageHeader
        numberOfPeople={keys(data).length}
        onAddEmployeeBtnClick={handleAddEditEmployeeBtnClick}
      />
      <PeopleList data={data} onEditEmployee={handleAddEditEmployeeBtnClick} />
    </Container>
  );
}

export default Home;
