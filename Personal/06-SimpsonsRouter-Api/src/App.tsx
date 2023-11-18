import { useEffect, useState } from "react";
import "./App.css";
import { SimpsonsResp } from './interfaces/respApi';
import { Card } from "./components/Card";
import { Pages } from "./components/Pages";

export function App() {
  const [characters, setCharacters] = useState<SimpsonsResp>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getCharacter = async () => {
      const url = `https://apisimpsons.fly.dev/api/personajes?limit=12&page=${page}`;

      const result = await fetch(url);
      const resp = await result.json();
      setCharacters(resp);
    };
    getCharacter();
  }, [page]);

  return (
    <>
      <h1 className="text-4xl font-bold text-yellow-500">The Simpsons API</h1>
      <h2 className="mt-5 text-xl font-bold text-yellow-300">Character List</h2>

      <Pages setPage={setPage} totalPages={characters?.totalPages ?? 0} page={page} />

      <div className="grid grid-cols-4 mt-10 gap-7">
        {characters &&
          characters.docs.map((character) => {
            return <Card character={character} key={character._id} />;
          })}
      </div>
    </>
  );
}
