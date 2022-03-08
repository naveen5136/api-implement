import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        //if (response.status === 200) {
        setData(response.data);
        //}
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      {data &&
        data.map((item) => {
          return (
            <>
              <p key={item.id}> Title :{item.title}</p>
              <p key={item.id}>Body: {item.body}</p>
            </>
          );
        })}
    </div>
  );
}
