import { useState, useEffect } from "react";

import { API_URL } from "../app.config";
import { Beer } from "../models/Beer";

interface BeerCatalogueResponse {
	payload?: Beer[];
	error?: Error;
}

const useBeerCatalogueService = () => {
	const [result, setResult] = useState<{ isBusy: boolean, data?: BeerCatalogueResponse }>({
		isBusy: true
	});

	useEffect(() => {
		function getBeers() {
			const cachedBeers = localStorage.getItem("beers");

			if (!!cachedBeers) {
				setResult({ 
					data: { payload: JSON.parse(cachedBeers) }, 
					isBusy: false 
				});
				return;
			}

			fetchBeers();
		}

		async function fetchBeers() {
			const response = await fetch(`${API_URL}/beers`);
			const data = await response.json();

			if (response.type === "error") {
				setResult({ 
					data: { error: data }, 
					isBusy: false 
				});
				return;
			}
			
			setResult({ 
				data: { payload: data }, 
				isBusy: false 
			});

			localStorage.setItem("beers", JSON.stringify(data));
		}

		getBeers();
	}, []);

	return result;
}

export default useBeerCatalogueService;