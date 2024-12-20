"use client";

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  searchMarvelMovies,
  OMDbSearchItem,
  getMovieDetails,
  OMDbMovieDetails,
} from "../services/omdb";

const MovieCarousel: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: false,
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
          slidesToShow: 2,
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

  const [movies, setMovies] = useState<OMDbSearchItem[]>([]);
  const [details, setDetails] = useState<Record<string, OMDbMovieDetails>>({});
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [initialized, setInitialized] = useState(false); // Controla se já inicializou

  const fetchMovies = async () => {
    try {
        const data = await searchMarvelMovies(page);
        if (data.Search && Array.isArray(data.Search)) {
          setMovies((prev) => [...prev, ...data.Search]);
          setHasMore(data.Search.length > 0);
        
          const newDetails = await Promise.all(
            data.Search.map((movie) =>
              details[movie.imdbID]
                ? Promise.resolve(details[movie.imdbID])
                : getMovieDetails(movie.imdbID)
            )
          );
        
          const detailsMap = newDetails.reduce((acc, detail) => {
            acc[detail.imdbID] = detail;
            return acc;
          }, {} as Record<string, OMDbMovieDetails>);
        
          setDetails((prev) => ({ ...prev, ...detailsMap }));
        } else {
          setHasMore(false);
        }        
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  useEffect(() => {
    // Forçar atualização apenas na inicialização
    if (!initialized && sliderRef.current) {
      sliderRef.current.slickGoTo(0);
      setInitialized(true);
    }
  }, [initialized]);

  return (
    <div className="w-4/5 mx-auto">
      <h2 className="text-center text-xl font-bold mb-4 mt-4">Marvel Movies</h2>
      {movies.length > 0 ? (
        <Slider ref={sliderRef} {...settings}>
          {movies.map((movie) => (
            <div key={movie.imdbID} className="px-2 mb-4">
              <div className="bg-white text-black flex flex-col shadow-md rounded overflow-hidden">
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
                    <strong>Title:</strong> {details[movie.imdbID]?.Title || "Loading..."}
                  </p>
                  <p>
                    <strong>Year:</strong> {details[movie.imdbID]?.Year || "Loading..."}
                  </p>
                  <p>
                    <strong>Writer:</strong> {details[movie.imdbID]?.Writer || "Loading..."}
                  </p>
                  <p>
                    <strong>Language:</strong> {details[movie.imdbID]?.Language || "Loading..."}
                  </p>
                  <p>
                    <strong>Country:</strong> {details[movie.imdbID]?.Country || "Loading..."}
                  </p>
                </div>
              </div>
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
