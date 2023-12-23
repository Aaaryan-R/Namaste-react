import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MOCK_MENU, MOCK_RESLIST } from "../../utils/mockData";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { Menu } from "../Menu";
import { Header } from "../Header";
import Cart from "../Cart";

jest.mock('../../Assets/skeleton-preloader.gif', () => ''); /* This line is for the `src={Preloader}` in the Skeleton.js file */

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_MENU);
        }
    });
});

it("should load cart component and add the items in the cart", async () => {
    await act(async () => render(<BrowserRouter><Provider store={appStore}><Header /><Cart /><Menu /></Provider></BrowserRouter>));
    const accordianHeader = screen.getByText("Recommended");
    fireEvent.click(accordianHeader);
    const items = screen.getAllByTestId("menu-items");
    const addBtns = screen.getAllByTestId("add-btn");
    fireEvent.click(addBtns[0]);
    console.log(screen.getByTestId("cart-length"));
    /* Note: (incomplete)test for the items to be in the cart page. */
    /* open coverage.html in the coverage folder to find out your test percentages */
});