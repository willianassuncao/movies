import Link from "next/link";
import React from "react";

const MinhaLista: React.FC = () => {
  const movies = [
    {
      title: "Captain Marvel",
      description: "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
      image: "https://m.media-amazon.com/images/M/MV5BZDI1NGU2ODAtNzBiNy00MWY5LWIyMGEtZjUxZjUwZmZiNjBlXkEyXkFqcGc@._V1_SX300.jpg",
      id: "tt4154664"
    },
    {
      title: "Marvel One-Shot: Agent Carter",
      description: "Frustrated at being marginalized at work, Peggy Carter goes on an unauthorized solo field mission.",
      image: "https://m.media-amazon.com/images/M/MV5BZDIwZTM4M2QtMWFhYy00N2VmLWFlMjItMzI3NjBjYTc0OTMxXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg",
      id: "tt3067038"
    },
    {
      title: "Marvel One-Shot: All Hail the King",
      description: "A documentary filmmaker interviews the now-famous Trevor Slattery from behind bars.",
      image: "https://m.media-amazon.com/images/M/MV5BZGFkMTZkMDQtNzM4Yy00YWEwLTkzOWEtZTMyNDRlNmJhYWJhXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg",
      id: "tt3438640"
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Minha Lista</h2>
          <p className="text-gray-400">
            Aqui estão os filmes que você adicionou à sua lista para assistir mais tarde. Aproveite para gerenciar e explorar!
          </p>
        </div>

        <div className="space-y-6">
          {movies.map((movie, index) => (
              <Link
                href={`/movies/${movie.id}`}
                key={index}
                className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
              >
                <div className="flex items-center">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-24 h-36 object-cover rounded-md"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">{movie.title}</h3>
                    <p className="text-gray-400 text-sm mt-2">{movie.description}</p>
                  </div>
                </div>
              </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MinhaLista;
