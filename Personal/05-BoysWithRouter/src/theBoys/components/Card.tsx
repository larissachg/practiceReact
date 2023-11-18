import { Character } from "../../interfaces/boysApi.interface";

interface CardProps {
  character: Character;
}

export const Card = ({ character }: CardProps) => {
  return (
    <div className="w-full sm:w-[40%] md:[23%] border rounded-lg shadow-md shadow-yellow-200 transition-all hover:scale-105 overflow-hidden">
      <h4 className="p-3">{character.name}</h4>
      <img src={character.image} alt="hola" />
      <p className="p-2 overflow-hidden text-sm line-clamp-3 text-ellipsis">
        {character.portrayed}
      </p>
    </div>
  );
};
