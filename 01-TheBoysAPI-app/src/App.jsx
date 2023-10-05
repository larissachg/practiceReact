import { useEffect, useState } from "react";

function App() {
  const [images, setImages] = useState([]);

  const getImagesFetch = () => {
    const url = "https://www.theboysapi.com/api/character";
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then(({results}) => setImages(results))
  };

  useEffect(() => {
    getImagesFetch();
  }, []);

  return (
    <>
      <h1 className="text-6xl font-bold">The Boys</h1>
      <div className="w-4/5 m-auto mt-10">
        <h2>Lista de Personajes</h2>
        <div className="grid grid-cols-4 mt-5 gap-7">
        {images.map((image) => {
          return (
              <div className="border" key={image.id}>
                <img src={image.image} alt="" />
                <p>{image.name}</p>
              </div>
          );
        })}
        </div>
      </div>
    </>
  );
}

export default App;
