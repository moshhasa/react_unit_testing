import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./greeting";

describe("Greeting component", () => {
  test("renders Hello World heading element", () => {
    //Arrange
    render(<Greeting />);

    //Act
    // ... nothing at the moment but normally peform actions here

    //Assert
    const helloWorldElement = screen.getByText("Hello World");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders Iniital test when component first initialises", () => {
    render(<Greeting />);
    const paragraphTextElement = screen.getByText(/Iniital test/i);
    expect(paragraphTextElement).toBeInTheDocument();
  });


  test("renders changed when button is clicked", () => {
       //Arrange
    render(<Greeting />);

     //Act
    const buttonElement = screen.getByRole('button'); // screen.getByText("Change");
    userEvent.click(buttonElement);

     //Assert
    const paragraphTextElement = screen.getByText("changed", {exact :false});
    expect(paragraphTextElement).toBeInTheDocument();
  });

  test("does not render Iniital test when button is clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByText("Change");
    userEvent.click(buttonElement);

    //Assert
    const paragraphTextElement = screen.getByText("changed", {exact :false});
    expect(paragraphTextElement).toBeInTheDocument();

    const notVisibleParagraph = screen.queryByText("Iniital test", {exact :false});
    expect(notVisibleParagraph).toBeNull();
});
});
