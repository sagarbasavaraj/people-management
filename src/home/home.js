import React, { useEffect } from "react";
import { Container, MessageBox } from "../common/components";
import { keys } from "lodash";
import useDataApi from "../hooks/use-data-api";
import useNavigate from "../hooks/use-navigate";
import PageHeader from "./components/page-header";
import PeopleList from "./components/people-list";

function Home() {
  const [response] = useDataApi({ url: "getAll", initialData: {} });
  const { data, error } = response;
  const [navigateTo] = useNavigate();

  useEffect(() => {
    document.title = "Home";
  }, []);

  //edit add button click handler
  const handleAddEditEmployeeBtnClick = (item) => {
    navigateTo(`/add-edit-person/${(item && item.id) || ""}`);
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
