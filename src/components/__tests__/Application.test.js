/*
  We are rendering `<Application />` down below, so we need React.createElement
*/
import React from "react";

/*
  We import our helper functions from the react-testing-library
  The render function allows us to render Components
*/
import { fireEvent, render, waitForElement, prettyDOM, getByText, getByAltText, getByPlaceholderText, getAllByTestId } from "@testing-library/react";

/*
  We import the component that we are testing
*/
import Application from "components/Application";

/*
  A test that renders a React Component
*/
describe("Application", () => {
  
  //it("renders without crashing", () => {
  //  act(() => {
  //    render(<Application />);
  //  });
  //});

  //it("defaults to Monday and changes the schedule when a new day is selected", () => {
  //  const { getByText } = render(<Application />);
  //
  //  return waitForElement(() => getByText("Monday")).then(() => {
  //    fireEvent.click(getByText("Tuesday"));
  //    expect(getByText("Leopold Silvers")).toBeInTheDocument();
  //  });
  //});

  it("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {
    const { container } = render(<Application />);
  
    await waitForElement(() => getByText(container, "Archie Cohen"));
  
    const appointments = getAllByTestId(container, "appointment");
    const appointment = appointments[0];
  
    fireEvent.click(getByAltText(appointment, "Add"));
  
    fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
      target: { value: "Lydia Miller-Jones" }
    });
    fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));
  
    fireEvent.click(getByText(appointment, "Save"));
  
    console.log(prettyDOM(appointment));
  });

});