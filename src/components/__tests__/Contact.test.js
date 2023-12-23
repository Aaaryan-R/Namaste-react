import Contact from "../Contact";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Should load contact us heading", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

test("Should load 2 input boxes!", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
});

test("Should load submit button component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});