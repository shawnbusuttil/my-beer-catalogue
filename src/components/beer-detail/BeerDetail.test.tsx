import React from "react";
import { render } from "@testing-library/react";

import { MOCK_BEER } from "../../testing/mocks";

import BeerDetail from "./BeerDetail";

describe("BeerDetailSpecs", () => {
    it("renders the beer details and all its data", () => {
        const { getByTestId } = render(<BeerDetail beer={MOCK_BEER} />);

        expect(getByTestId("beer-detail-name").textContent).toEqual(MOCK_BEER.name);
        expect(getByTestId("beer-detail-tagline").textContent).toEqual(MOCK_BEER.tagline);
        expect(getByTestId("beer-detail-volume").textContent).toEqual(`Alcohol: ${MOCK_BEER.volume.value}% ABV`);
        expect((getByTestId("beer-detail-image") as HTMLImageElement).src).toContain(MOCK_BEER.image_url);

        expect(getByTestId("beer-detail-desc").textContent).toEqual(MOCK_BEER.description);
        expect(getByTestId("beer-detail-brewed").textContent).toEqual(`First brewed on: ${MOCK_BEER.first_brewed}`);
        expect(getByTestId("beer-detail-pairings").textContent).toEqual(`Goes great with: ${MOCK_BEER.food_pairing.join(", ")}`);
    });
});