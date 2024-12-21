import axios from "axios";
import { APPCONFIG } from "@/core/configs/app.config";
import { IDetailsMovie, IListMovies } from "@/core/interface";

const api = axios.create({
  baseURL: APPCONFIG.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function searchMarvelMovies(page: number = 1): Promise<IListMovies> {
  const response = await api.get<IListMovies>("", {
    params: {
      apikey: APPCONFIG.API_KEY,
      s: "marvel",
      type: "movie",
      page,
    },
  });
  return response.data;
}

export async function getMovieDetails(imdbID: string): Promise<IDetailsMovie> {
  const response = await api.get<IDetailsMovie>("", {
    params: {
      apikey: APPCONFIG.API_KEY,
      i: imdbID,
      plot: "short",
    },
  });
  return response.data;
}
  