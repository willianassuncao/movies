import axios from 'axios';

const API_KEY = '1e5700a2';
const BASE_URL = 'https://www.omdbapi.com/';

export interface OMDbSearchItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface OMDbSearchResult {
  Search?: OMDbSearchItem[];
  totalResults?: string;
  Response: string;
  Error?: string;
}

export interface OMDbMovieDetails {
  Title: string;
  Year: string;
  Writer: string;
  Language: string;
  Country: string;
  Poster: string;
  imdbID: string;
}

export async function searchMarvelMovies(page: number = 1): Promise<OMDbSearchResult> {
  const response = await axios.get<OMDbSearchResult>(BASE_URL, {
    params: {
      apikey: API_KEY,
      s: 'marvel',
      type: 'movie',
      page
    }
  });
  return response.data;
}

export async function getMovieDetails(imdbID: string): Promise<OMDbMovieDetails> {
  const response = await axios.get<OMDbMovieDetails>(BASE_URL, {
    params: {
      apikey: API_KEY,
      i: imdbID,
      plot: 'short'
    }
  });
  return response.data;
}
