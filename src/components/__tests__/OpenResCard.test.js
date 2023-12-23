import { OpenResCard } from "../ResCardContainer";
import { MOCK_DATA_OPENRESCARD } from "../../utils/mockData";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should contain open label", () => {
    render(<OpenResCard {...MOCK_DATA_OPENRESCARD}/>);

    const card = screen.getByTestId("open-label");

    expect(card).toBeInTheDocument();
});