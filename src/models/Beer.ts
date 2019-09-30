export interface Beer {
    id: number;
    name: string;
    tagline: string;
    image_url: string;
    volume: {
        unit: string;
        value: number;
    },
    description: string;
    first_brewed: string;
    food_pairing: string[];
}