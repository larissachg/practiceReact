import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular`;

    const result = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGE5MzU2ZGQzZTFmMjRjMGU3M2M4ZTUyMTcwYzcwYiIsInN1YiI6IjY1MWYyNDNmMDcyMTY2MDBjNTY5ODIzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rE5m3PKvX4kECN85IF3j-JHylUSa_TpelEFGfQODptE",
      },
    });
    const { results } = await result.json();
    setMovies(results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <h1 className="text-6xl font-bold">Movies API</h1>
      <h2 className="mt-5 text-xl font-bold">Lista de Peliculas</h2>
      <div className="grid grid-cols-4 gap-5 m-5">
        {movies.map((movie) => {
          return (
            <div className="h-72" key={movie.id}>
              <img
                className="w-full h-[75%] object-contain object-top"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="movie-poster"
              />
              <div className="flex flex-col items-center justify-center h-[25%]">
                <p className="text-lg font-bold">{movie.original_title}</p>
                <p className="text-sm text-slate-900">{movie.release_date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
