import { useEffect, useState } from "react";
import "./App.css";
import { AppInterface } from "./interfaces/App.interface";

function App() {
  const url = "https://api.chucknorris.io/jokes/random";
  const [text, setText] = useState<AppInterface>();

  const getData = async () => {
    try {
      const result = await fetch(url);
      const data = await result.json();
      setText(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
    <h1>Chuck Norris API</h1>
    {text ? (
      <div>
        <img src={text.icon_url} alt="Chuck Norris" />
        <p>{text.value}</p>
        <button onClick={getData}>Get another joke</button>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>

  );
}

export default App;
