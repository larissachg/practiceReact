import { useEffect, useState } from "react";
import {
  Character,
  RickAndMortyResponse,
} from "./interfaces/RickMorty.interface";

export const RickAndMorty = () => {
  const [characters, setCharacters] = useState<Character[]>();

  const getData = async () => {
    const url = "https://rickandmortyapi.com/api/character";
    try {
      const response = await fetch(url);
      const data: RickAndMortyResponse = await response.json();
      setCharacters(data.results);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Rick and Morty</h1>
      <div>
        {characters?.map((character) => {
          return (
            <div key={character.id}>
              <p>{character.name}</p>
              <img src={character.image} alt={character.name} />
            </div>
          );
        })}
      </div>
    </>
  );
};
