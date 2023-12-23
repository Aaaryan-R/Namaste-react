import { fireEvent, render,screen } from "@testing-library/react";
import { Body } from "../../components/Body";
import "@testing-library/jest-dom";
import { MOCK_RESLIST } from "../../utils/mockData";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

/* Static asset (skeleton-preloader.gif) issue fixed using "npm install --save-dev identity-obj-proxy" and "moduleNameMapper": { "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "identity-obj-proxy", } */

jest.mock('../../Assets/skeleton-preloader.gif', () => ''); /* This line is for the `src={Preloader}` in the Skeleton.js file */

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_RESLIST);
        }
    });
});

it("should return cards of top rated restaurants!", async () => {
    await act(async () => render(<BrowserRouter><Body/></BrowserRouter>));

    const topRatedBtn = screen.getByTestId("top-rated-btn");
    
    fireEvent.click(topRatedBtn);

    const cards = screen.getAllByTestId("res-card");
    console.log(cards.length);
    expect(cards.length).toBe(15);
});