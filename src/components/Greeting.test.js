import { render, screen } from '@testing-library/react';
import Greeting from './greeting';

test('renders Hello World heading element', () => {
    //Arrange
    render(<Greeting />); 

    //Act
    // ... nothing at the moment but normally peform actions here

    //Assert
  const helloWorldElement = screen.getByText('Hello World'); 
  expect(helloWorldElement).toBeInTheDocument(); 
});


test('renders Test sample paragraph', () => {
    render(<Greeting />);
    const headingElementElement = screen.getByText(/test sample/i);
    expect(headingElementElement).toBeInTheDocument();
  });
  