import { renderHook } from "@testing-library/react-hooks";

import useBeerCatalogueService from "./BeerCatalogue";
import { MOCK_BEERS } from "../testing/mocks";

describe("useBeerCatalogueService", () => {
    it("should return the beer collection as data", async () => {
        window.fetch = jest.fn().mockImplementation(() => ({
            json: () => Promise.resolve(MOCK_BEERS)
        }));

        const { result, waitForNextUpdate } = renderHook(() => useBeerCatalogueService());

        await waitForNextUpdate();

        expect(result.current).toEqual({ isBusy: false, data: { payload: MOCK_BEERS } });
    });
})