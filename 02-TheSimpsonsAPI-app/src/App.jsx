import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const url = `https://apisimpsons.fly.dev/api/personajes?limit=20`;

    const result = await fetch(url);
    const {docs} = await result.json();
    setCharacters(docs);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      <h1 className="text-6xl font-bold">The Simpsons</h1>
      <h2 className="mt-5 text-xl font-bold">Lista de Personajes</h2>
      <div className="grid grid-cols-4 gap-5 m-5">
        {characters.map((character) => {
          return(
          <div className="border h-72 " key={character._id}>
            <img className="m-auto h-4/6" src={character.Imagen} alt="" />
            <p className="text-lg font-bold text-slate-900">{character.Nombre}</p>
            <p className="text-sm">{character.Ocupacion}</p>
          </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
