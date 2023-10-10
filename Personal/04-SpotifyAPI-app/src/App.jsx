import { useEffect, useState } from "react";

function App() {
  const [songs, setSong] = useState([]);
  const [search, setSearch] = useState("");

  const getRecomendations = async () => {
    const url = `https://api.spotify.com/v1/recommendations?limit=10&market=ES&seed_genres=pop`;

    try {
      const result = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${await getToken()}`,
        },
      });
      const { tracks } = await result.json();
      setSong(tracks);
    } catch (error) {
      console.log(error);
    }
  };

  const getSongsSearch = async () => {
    if (search.trim().length === 0) return;

    const url = `https://api.spotify.com/v1/search?q=${search}&type=track`;

    try {
      const result = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${await getToken()}`,
        },
      });
      const { tracks } = await result.json();
      setSong(tracks.items);
      console.log(tracks.items);
    } catch (error) {
      console.log(error);
    }
  };

  const getToken = async () => {
    const url = `https://accounts.spotify.com/api/token`;

    const formData = new URLSearchParams();
    formData.append("grant_type", "client_credentials");
    formData.append("client_id", "5798d4d164034ec79d5ccdacc03b01f6");
    formData.append("client_secret", "51696e6aef2b4b249fa445e9c32ef187");

    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });
    const { access_token } = await result.json();
    return access_token;
  };

  useEffect(() => {
    // getRecomendations();
    getSongsSearch();
  }, []);

  return (
    <>
      <div className="bg-[#181818] w-[85%] m-auto p-2 flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-1">
            <svg
              className="w-8"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 48 48"
            >
              <circle cx="24" cy="24" r="20" fill="#6be3a2"></circle>
              <path
                fill="#324561"
                d="M35.643,21.502c-0.155,0-0.313-0.036-0.461-0.113c-6.745-3.517-14.513-4.338-21.873-2.308	c-0.533,0.147-1.083-0.166-1.229-0.698s0.166-1.083,0.698-1.229c7.847-2.164,16.134-1.29,23.328,2.462	c0.49,0.255,0.68,0.859,0.425,1.349C36.352,21.307,36.004,21.502,35.643,21.502z"
              ></path>
              <path
                fill="#324561"
                d="M33.055,27.272c-0.153,0-0.309-0.035-0.455-0.11c-5.427-2.78-11.677-3.455-17.603-1.901	c-0.533,0.142-1.081-0.179-1.221-0.713c-0.141-0.534,0.179-1.081,0.713-1.221c6.398-1.68,13.154-0.95,19.022,2.056	c0.491,0.252,0.686,0.854,0.434,1.346C33.769,27.073,33.418,27.272,33.055,27.272z"
              ></path>
              <path
                fill="#324561"
                d="M30.354,32.938c-0.147,0-0.298-0.033-0.439-0.103c-4.056-1.992-8.722-2.51-13.13-1.462	c-0.543,0.125-1.078-0.205-1.204-0.742c-0.128-0.537,0.204-1.076,0.741-1.204c4.865-1.153,10.005-0.582,14.474,1.613	c0.496,0.243,0.7,0.842,0.457,1.338C31.078,32.733,30.723,32.938,30.354,32.938z"
              ></path>
            </svg>
            <h1 className="font-bold">Spotify Searcher</h1>
          </div>
          <p className="text-xs text-gray-600">Created by Lara</p>
        </div>

        <div className="flex justify-between gap-2">
          <input
            type="text"
            className="w-full p-2 text-black rounded-md"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="bg-[#1fdf64] text-black rounded-full text-[.8rem] p-2 font-semibold"
            onClick={() => {
              getSongsSearch();
            }}
          >
            Search
          </button>
        </div>

        <div id="results" className="grid grid-cols-4 gap-7">
          {songs.map((song) => {
            return (
              <div
                className="flex flex-col items-center justify-start gap-2 text-center max-w-[250px]"
                key={song.id}
              >
                <div className="max-h-[190px] w-full">
                  <img
                    src={song.album.images[0].url}
                    alt="album"
                    className="w-full h-full bg-cover"
                  />
                </div>
                <audio
                  src={song.preview_url}
                  controls={song.preview_url !== null}
                  className="w-[90%] h-[30px]"
                ></audio>
                <p className="pl-2 pr-2">{song.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
