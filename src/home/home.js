import React from "react";
import { Container } from "../common/components";
import { useHistory } from "react-router-dom";
import PageHeader from "./components/page-header";
import PeopleList from "./components/people-list";

const employess = [
  {
    id: 34234,
    name: "Ann Henry",
    dateOfBirth: "04/12/1990",
    jobTitle: "Product Manager",
    country: "United States",
    salary: "60,000 USD",
  },
  {
    id: 34294,
    name: "Ann Henry",
    dateOfBirth: "04/12/1990",
    jobTitle: "Product Manager",
    country: "United States",
    salary: "60,000 USD",
  },
];

function Home() {
  const history = useHistory();

  const handleAddEditEmployeeBtnClick = (item) => {
    history.push(`/add-edit-people/${(item && item.id) || ""}`);
  };

  return (
    <Container>
      <PageHeader onAddEmployeeBtnClick={handleAddEditEmployeeBtnClick} />
      <PeopleList
        data={employess}
        onEditEmployee={handleAddEditEmployeeBtnClick}
      />
    </Container>
  );
}

export default Home;
