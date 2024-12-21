import { getMovieDetails, searchMarvelMovies } from "../http/api.service";

export const fetchDetailsMovie = async (imdbID: string) => {
  try {
    return await getMovieDetails(imdbID);
  } catch (error) {
    console.error("Erro ao buscar dados na api:", error);
    throw error;
  }
}

export const fetchListMovies = async () => {
  try {
    const movies = await searchMarvelMovies();

    for (const movie of movies.Search) {
        movie.details = await fetchDetailsMovie(movie.imdbID);
    }

    return movies;
  } catch (error) {
    console.error("Erro ao buscar dados na api:", error);
    throw error;
  }
};
