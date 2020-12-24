import { render, act } from "@testing-library/react";
import Home from "./home";
import StorageService from "../service/storage-service";

//mock storage service
jest.mock("../service/storage-service");

const employees = {
  1: {
    id: "1",
    name: "John",
    birthDate: "01/12/1985",
    jobTitle: "lead",
    country: "Portugal",
    salary: "60000",
  },
};

describe("Home", () => {
  test("renders page header", async () => {
    const promise = Promise.resolve(employees);
    StorageService.getAll.mockImplementationOnce(() => promise);

    const { getByText } = render(<Home />);
    await act(() => promise);
    expect(getByText("People")).toBeInTheDocument();
    expect(getByText("1 employees")).toBeInTheDocument();
    expect(getByText("Add employee")).toBeInTheDocument();
  });

  test("renders people list header", async () => {
    const promise = Promise.resolve(employees);
    StorageService.getAll.mockImplementationOnce(() => promise);

    const { container, getByText } = render(<Home />);
    await act(() => promise);
    expect(container.getElementsByClassName("people-list-header").length).toBe(
      1
    );
    expect(getByText("Employee")).toBeInTheDocument();
    expect(getByText("Job Title")).toBeInTheDocument();
    expect(getByText("Country")).toBeInTheDocument();
    expect(getByText("Salary")).toBeInTheDocument();
  });

  test("renders people list items", async () => {
    const promise = Promise.resolve(employees);
    StorageService.getAll.mockImplementationOnce(() => promise);

    const { container, getByText } = render(<Home />);
    await act(() => promise);
    expect(container.getElementsByClassName("people-list-item").length).toBe(1);
    expect(getByText("John")).toBeInTheDocument();
    expect(getByText("01/12/1985")).toBeInTheDocument();
    expect(getByText("lead")).toBeInTheDocument();
    expect(getByText("Portugal")).toBeInTheDocument();
    expect(getByText("60,000 USD")).toBeInTheDocument();
    expect(getByText("Edit")).toBeInTheDocument();
  });

  test("fetches employess from an API and fails", async () => {
    StorageService.getAll.mockImplementationOnce(() =>
      Promise.reject(new Error("Error in getting all values"))
    );

    const { findByText } = render(<Home />);
    const message = await findByText(/Error in getting all values/);
    expect(message).toBeInTheDocument();
  });
});
