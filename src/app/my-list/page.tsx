import React from "react";

const MinhaLista: React.FC = () => {
  const movies = [
    {
      title: "Vingadores: Ultimato",
      description: "Após o estalar de dedos de Thanos, os Vingadores se unem para reverter o caos.",
      image: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg",
    },
    {
      title: "A Origem",
      description: "Um ladrão que invade sonhos tenta implantar uma ideia na mente de um executivo.",
      image: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg",
    },
    {
      title: "Matrix",
      description: "Um programador descobre a verdade sobre sua realidade e seu papel em uma guerra contra as máquinas.",
      image: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
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
            <div
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MinhaLista;
