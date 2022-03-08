import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Naveen() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
        console.log(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [data]);
  return (
    <>
      {data &&
        data.map((item) => {
          return (
            <>
              <p key={item.key}>Title:- {item.title}</p>
            </>
          );
        })}
    </>
  );
}
