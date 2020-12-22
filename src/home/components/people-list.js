import React from "react";
import { Button } from "../../common/components";
import { map } from "lodash";
import { object, func } from "prop-types";
import PeopleListHeader from "./people-list-header";
import PeopleListItem from "./people-list-item";
import "./people-list.scss";

function PeopleList({ data = {}, onEditEmployee }) {
  return (
    <ul className="people-list-container">
      <PeopleListHeader />
      {map(data, (people) => {
        return (
          <PeopleListItem
            key={people.id}
            item={people}
            editBtn={
              <Button
                label="Edit"
                onClick={() => onEditEmployee(people)}
                outline
              />
            }
          />
        );
      })}
    </ul>
  );
}

PeopleList.propTypes = {
  data: object,
  onEditEmployee: func.isRequired,
};

export default PeopleList;
