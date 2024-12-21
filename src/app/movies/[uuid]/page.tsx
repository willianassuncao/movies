"use client";

import { IDetailsMovie, IMoviePageProps } from "@/core/interface";
import { fetchDetailsMovie } from "@/core/services/app/movies.service";
import React, { useEffect, useState } from "react";

const MoviePage: React.FC<IMoviePageProps> = ({ params }) => {
  const [movie, setMovie] = useState<IDetailsMovie>();
  const [loading, setLoading] = useState(true);
  const [uuid, setUuid] = useState<string | null>(null);

  const fetchDetailMovies = async (id: string) => {
    try {
      const data = await fetchDetailsMovie(id);
      setMovie(data);

    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params; 
      setUuid(resolvedParams.uuid); 
    };

    resolveParams();
  }, [params]);

  useEffect(() => {
    if (uuid) {
      fetchDetailMovies(uuid);
    }
  }, [uuid]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-100">
        <p className="text-xl font-semibold">Carregando...</p>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-100">
        <p className="text-xl font-semibold">Filme não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-gray-100 p-4">
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex flex-col lg:flex-row items-start">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-72 h-auto rounded-md shadow-lg"
          />
          <div className="lg:ml-6 mt-4 lg:mt-0">
            <h1 className="text-3xl font-bold text-yellow-400">{movie.Title}</h1>
            <p className="text-gray-400">{movie.Year} | {movie.Runtime}</p>
            <p className="text-gray-300 mt-4">{movie.Plot}</p>
            <p className="text-sm text-gray-500 mt-2">
              <strong>Gênero:</strong> {movie.Genre}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Diretor:</strong> {movie.Director}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Escritor:</strong> {movie.Writer}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Atores:</strong> {movie.Actors}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              <strong>Avaliação IMDb:</strong> {movie.imdbRating}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
