import { IDetailsMovie } from "./details-movie.interface";

export interface IMovie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
    details: IDetailsMovie | null;
}

