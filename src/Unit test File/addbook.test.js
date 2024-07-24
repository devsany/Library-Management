import { fireEvent, render, screen } from "@testing-library/react";
import Addbook from "../components/Addbook";

test("Addbook", () => {
  render(<Addbook />);
  let headerText = screen.getByText("Add Book");
  let input = screen.getByPlaceholderText("Enter Assession Number");

//   fireEvent.change(input, { target: { vlaue: "a" } });

  expect(headerText).toBeInTheDocument();
//   expect(input.value).toBe("a");
});