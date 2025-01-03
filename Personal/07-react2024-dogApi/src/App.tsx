import { useEffect, useState } from "react";
import { AppInterface } from "./interfaces/App.interface";

export const App = () => {
  const url = "https://jsonplaceholder.typicode.com/posts?_limit=5";
  const [posts, setPosts] = useState<AppInterface[] | null>([]);

  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Get Data</h1>
      {posts &&
        posts?.length > 0 &&
        posts.map((post) => (
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
};
