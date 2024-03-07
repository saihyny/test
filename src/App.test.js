import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import App from "./App";
import { click } from "@testing-library/user-event/dist/click";

describe("app component", () => {
  test("renders learn react link", () => {
    render(<App />);

    // act
    // nothing

    // assert
    const linkElement = screen.getByText("Hello World");
    expect(linkElement).toBeInTheDocument();
  });
  test("renders good to see text", () => {
    render(<App />);

    const renderText = screen.getByText("its good to see you");
    expect(renderText).toBeInTheDocument();
  });
  // test('checks the element render , that its rendr after button clickd!',async()=>{
  //   // Arrange
  //   render(<App/>)

  //   // Act
  //   const TchangeButton = screen.getByRole('button')
  //   userEvent.click(TchangeButton)

  //   // Assert
  //   const text = await waitFor(()=>screen.getByText("Changed!")) 
  //   expect(text).toBeInTheDocument()
  // })
  test('checks the element render , that its rendr after  not button clickd!',async()=>{
    // Arrange
    render(<App/>)

    // Act
    const TchangeButton = screen.getByRole('button')
    userEvent.click(TchangeButton)

    // Assert
    const text = await waitFor(()=>screen.queryByText("its good to see you")) 
    expect(text).toBeNull()
  })

});
