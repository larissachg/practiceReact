import { Characters } from "../interfaces/respApi";

interface Props {
    character: Characters;
}

export const Card = ({character} : Props) => {


  return (
    <>
      <div
        className="h-full p-2 transition-shadow border rounded-xl border-amber-100 hover:shadow-lg hover:shadow-amber-300"
        key={character._id}
      >
        <h2 className="mb-5 text-2xl font-semibold text-amber-100">
          {character.Nombre}
        </h2>
        <img
          className="max-h-[300px] m-auto"
          src={character.Imagen}
          alt="img"
        />
        <p className="mt-5 line-clamp-3">{character.Historia}</p>
      </div>
    </>
  );
};
