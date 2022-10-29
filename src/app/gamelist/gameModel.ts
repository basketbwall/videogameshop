import { Review } from "./review";

export interface Game {
    id: number;
    title: string;
    publisher: string;
    releaseDate: string;
    reviews: Review[];
    description: string;
}