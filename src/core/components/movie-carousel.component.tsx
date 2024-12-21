"use client";

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchListMovies } from "@core/services/app/movies.service";
import { IMovie } from "@core/interface";
import Link from "next/link";

const MovieCarousel: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [initialized, setInitialized] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1368,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    afterChange: (current: number) => {
      if (hasMore && current >= movies.length - settings.slidesToShow!) {
        setPage((prev) => prev + 1);
      }
    },
  };

  const fetchMovies = async () => {
    try {
      const data = await fetchListMovies();
      setMovies((prev) => [...prev, ...data.Search]);
      setHasMore(data.Search.length > 0);
    } catch (error) {
      setError("Erro ao carregar dados");
      console.error("Erro ao carregar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  useEffect(() => {
    if (!initialized && sliderRef.current) {
      sliderRef.current.slickGoTo(0);
      setInitialized(true);
    }
  }, [initialized]);

  if (loading) return <p className="w-full text-center">Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="w-4/5 mx-auto">
      <h2 className="text-center text-xl font-bold mb-4 mt-4">Marvel Movies</h2>
      {movies.length > 0 ? (
        <Slider ref={sliderRef} {...settings}>
          {movies.map((movie) => (
            <div key={movie.imdbID} className="px-2 mb-4">
              <Link href={`/movies/${movie.imdbID}`}>
                <div className="bg-white text-black flex flex-col shadow-md rounded overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                  {movie.Poster !== "N/A" ? (
                    <img
                      src={movie.Poster}
                      alt={movie.Title}
                      className="w-full h-[400px] object-cover"
                    />
                  ) : (
                    <div className="h-[400px] flex items-center justify-center w-full bg-gray-200">
                      No Image
                    </div>
                  )}
                  <div className="p-2 text-sm min-h-[150px] max-h-[120px] overflow-auto">
                    <p>
                      <strong>Title:</strong> {movie.Title}
                    </p>
                    <p>
                    <strong>Year:</strong> {movie.details?.Year || "Loading..."}
                  </p>
                  <p>
                    <strong>Writer:</strong> {movie.details?.Writer || "Loading..."}
                  </p>
                  <p>
                    <strong>Language:</strong> {movie.details?.Language || "Loading..."}
                  </p>
                  <p>
                    <strong>Country:</strong> {movie.details?.Country || "Loading..."}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

export default MovieCarousel;
