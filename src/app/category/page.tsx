import React from "react";

const Categorias: React.FC = () => {
  const categories = [
    {
      name: "Ação",
      description: "Filmes repletos de adrenalina, lutas épicas e explosões emocionantes.",
    },
    {
      name: "Comédia",
      description: "As melhores histórias para garantir boas risadas e momentos leves.",
    },
    {
      name: "Drama",
      description: "Tramas intensas que exploram emoções humanas profundas e impactantes.",
    },
    {
      name: "Ficção Científica",
      description: "Viagens espaciais, futuros distópicos e avanços tecnológicos fascinantes.",
    },
    {
      name: "Terror",
      description: "Prepare-se para sustos e histórias que vão deixar você sem dormir.",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Categorias</h2>
          <p className="text-gray-400">
            Explore nossas categorias de filmes e encontre a próxima história que vai te emocionar.
          </p>
        </div>

        <div className="space-y-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
            >
              <div className="flex items-center">
                <div className="ml-4">
                  <h3 className="text-xl font-bold">{category.name}</h3>
                  <p className="text-gray-400 text-sm mt-2">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categorias;
