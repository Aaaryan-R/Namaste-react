import { render, screen } from "@testing-library/react";
import { Header } from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load header component", () => {
    render(<BrowserRouter><Provider store={appStore}><Header /></Provider></BrowserRouter>);

    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
});