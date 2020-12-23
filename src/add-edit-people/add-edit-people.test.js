import { render, act } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router, Route } from "react-router-dom";
import AddEditPeople from "./add-edit-people";
import StorageService from "../service/storage-service";

//mock storage service
jest.mock("../service/storage-service");

const employee = {
  id: "1",
  name: "John",
  birthDate: "01/12/1985",
  jobTitle: "lead",
  country: "Portugal",
  salary: "60,000",
};

describe("AddEditPeople", () => {
  describe("Add a new Employee", () => {
    let component = {};
    beforeEach(async () => {
      const promise = Promise.resolve({});
      StorageService.getItem.mockImplementationOnce(() => promise);
      await act(() => promise);
      const history = createMemoryHistory();
      const route = "/add-edit-people";
      history.push(route);
      component = render(
        <Router history={history}>
          <Route path="/add-edit-people/:id?">
            <AddEditPeople />
          </Route>
        </Router>
      );
    });

    afterEach(() => {
      component = null;
    });

    test("renders page title and description", async () => {
      const { getByText } = component;
      expect(getByText("Add a new employee")).toBeInTheDocument();
      expect(
        getByText("Fill out the information of your new employee.")
      ).toBeInTheDocument();
    });

    test("renders Name input field", async () => {
      const { getByText } = component;
      expect(getByText("Name")).toBeInTheDocument();
      expect(getByText("First and last names")).toBeInTheDocument();
    });

    test("renders Birthdate input field", async () => {
      const { getByText } = component;
      expect(getByText("Birthdate")).toBeInTheDocument();
      expect(getByText("DD/MM/YYYY")).toBeInTheDocument();
    });

    test("renders Job title input field", async () => {
      const { getByText } = component;
      expect(getByText("Job title")).toBeInTheDocument();
      expect(getByText("What is their role?")).toBeInTheDocument();
    });

    test("renders Country input field", async () => {
      const { getByText } = component;
      expect(getByText("Country")).toBeInTheDocument();
      expect(getByText("Where are they based?")).toBeInTheDocument();
    });

    test("renders Salary input field", async () => {
      const { getByText } = component;
      expect(getByText("Salary")).toBeInTheDocument();
      expect(getByText("Gross yearly salary")).toBeInTheDocument();
    });

    test("renders Cancel button", async () => {
      const { getByText } = component;
      expect(getByText("Cancel")).toBeInTheDocument();
    });

    test("renders Add employee button", async () => {
      const { getByText } = component;
      expect(getByText("Add employee")).toBeInTheDocument();
    });
  });

  describe("Edit Employee", () => {
    let component = {};
    let promise = null;

    beforeEach(async () => {
      promise = Promise.resolve(employee);
      StorageService.getItem.mockImplementationOnce(() => promise);

      const history = createMemoryHistory();
      const route = "/add-edit-people/1";
      history.push(route);

      component = render(
        <Router history={history}>
          <Route path="/add-edit-people/:id?">
            <AddEditPeople />
          </Route>
        </Router>
      );

      await act(() => promise);
    });

    afterEach(() => {
      component = null;
      promise = null;
    });

    test("renders page title and description", async () => {
      const { getByText } = component;
      const text = getByText("Edit employee");
      expect(text).toBeInTheDocument();
      expect(
        getByText("Edit the information of your employee.")
      ).toBeInTheDocument();
    });

    test("renders Name input field", async () => {
      const { getByText, getByTestId } = component;
      expect(getByText("Name")).toBeInTheDocument();
      expect(getByTestId("name").value).toBe("John");
      expect(getByText("First and last names")).toBeInTheDocument();
    });

    test("renders Birthdate input field", async () => {
      const { getByText, getByTestId } = component;
      expect(getByText("Birthdate")).toBeInTheDocument();
      expect(getByTestId("birthDate").value).toBe("01/12/1985");
      expect(getByText("DD/MM/YYYY")).toBeInTheDocument();
    });

    test("renders Job title input field", async () => {
      const { getByText, getByTestId } = component;
      expect(getByText("Job title")).toBeInTheDocument();
      expect(getByTestId("jobTitle").value).toBe("lead");
      expect(getByText("What is their role?")).toBeInTheDocument();
    });

    test("renders Country input field", async () => {
      const { getByText } = component;
      expect(getByText("Country")).toBeInTheDocument();
      expect(getByText("Portugal")).toBeInTheDocument();
      expect(getByText("Where are they based?")).toBeInTheDocument();
    });

    test("renders Salary input field", async () => {
      const { getByText, getByTestId } = component;
      expect(getByText("Salary")).toBeInTheDocument();
      expect(getByTestId("salary").value).toBe("60,000");
      expect(getByText("Gross yearly salary")).toBeInTheDocument();
    });

    test("renders Cancel button", async () => {
      const { getByText } = component;
      expect(getByText("Cancel")).toBeInTheDocument();
    });

    test("renders Add employee button", async () => {
      const { getByText } = component;
      expect(getByText("Save")).toBeInTheDocument();
    });
  });
});
