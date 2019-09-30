import { Beer } from "../models/Beer";

export const MOCK_BEERS: Beer[] = [{
    id: 66,
    name: "Guinness",
    tagline: "So Irish!",
    image_url: "some-url.jpg",
    volume: {
        unit: "litres",
        value: 40,
    },
    description: "An Irish brew.",
    first_brewed: "01/01",
    food_pairing: ["fish", "potatoes"]
},
{
    id: 67,
    name: "Heineken",
    tagline: "So Dutch!",
    image_url: "some-url2.jpg",
    volume: {
        unit: "litres",
        value: 40,
    },
    description: "A Dutch brew.",
    first_brewed: "01/01",
    food_pairing: ["cheese", "waffles"]
}];

export const MOCK_BEER = MOCK_BEERS[0];