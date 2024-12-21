import { IMovie } from "./movie.interface";

export interface IListMovies {
    Search: IMovie[];
    totalResults: string;
    Response: string;
}