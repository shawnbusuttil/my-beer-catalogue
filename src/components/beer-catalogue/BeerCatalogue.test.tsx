import React from "react";
import { cleanup, render, waitForElement } from "@testing-library/react";

import { Beer } from "../../models/Beer";
import { MOCK_BEERS } from "../../testing/mocks";

import BeerCatalogue from "./BeerCatalogue";

jest.mock("./../beer-item/BeerItem", () =>
    jest.fn((props: { beer: Beer }) => (<p>{props.beer.id}</p>))
);

jest.mock("./../spinner/Spinner", () =>
    jest.fn(() => (<p data-testid="spinner"></p>))
);

describe("BeerCatalogueSpecs", () => {
    let { historyMock, locationMock }: any = jest.fn();
    let matchMock: any = { params: { id: undefined } };
    
    it("fetches data from server and displays it", async() => {
        window.fetch = jest.fn().mockImplementation(() => ({
            json: () => Promise.resolve(MOCK_BEERS)
        }));
    
        jest.spyOn(window, "fetch");

        const { getByTestId, queryByTestId } = render(<BeerCatalogue history={historyMock} location={locationMock} match={matchMock} />);

        let spinner: HTMLElement | null;

        spinner = queryByTestId("spinner");
        expect(spinner).toBeTruthy();

        const elements = await waitForElement(() => getByTestId("beer-items"));

        expect(elements.childElementCount).toEqual(MOCK_BEERS.length);
        expect(window.fetch).toHaveBeenCalledTimes(1);
        
        spinner = queryByTestId("spinner");
        expect(spinner).toBeFalsy();

        cleanup();
    });
});