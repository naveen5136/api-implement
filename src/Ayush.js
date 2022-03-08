import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Ayush() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {data &&
        data.map((item) => {
          return (
            <>
              <li key={item.key}>Title:- {item.title} </li>
            </>
          );
        })}
    </>
  );
}
