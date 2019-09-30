import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { MOCK_BEER } from '../../testing/mocks';

import BeerItem from './BeerItem';

describe("BeerItemSpecs", () => {
    it("renders the beer item and all its data", () => {
        const { getByTestId } = render(<BrowserRouter>
            <BeerItem beer={MOCK_BEER} />
        </BrowserRouter>);

        expect(getByTestId("beer-item-name").textContent).toEqual(MOCK_BEER.name);
        expect(getByTestId("beer-item-tagline").textContent).toEqual(MOCK_BEER.tagline);
        expect(getByTestId("beer-item-volume").textContent).toEqual(`Vol. ${MOCK_BEER.volume.value}% per ${MOCK_BEER.volume.unit}`);
        expect((getByTestId("beer-item-img") as HTMLImageElement).src).toContain(MOCK_BEER.image_url);
    });
});

