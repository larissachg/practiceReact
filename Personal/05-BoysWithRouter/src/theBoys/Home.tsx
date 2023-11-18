import { BoysResponse } from "../interfaces/boysApi.interface";
import { Card } from "./components/Card";
import { useEffect, useState } from "react";

export const Home = () => {
  const [list, setList] = useState<BoysResponse>();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://www.theboysapi.com/api/character");
      const result = await response.json();

      setList(result);
    };

    getData();
  }, []);

  return (
    <>
      <h2 className="text-4xl text-yellow-200">The Boys</h2>
      <div className="flex flex-wrap justify-center gap-5 mt-20">
        {list &&
          list.results.map((item) => <Card key={item.id} character={item} />)}
      </div>
    </>
  );
};
