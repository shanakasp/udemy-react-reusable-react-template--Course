import React, { useEffect, useState } from "react";
import { fetchData } from "./api";

const Datafetch = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();

        setTimeout(() => {
          setdata(result);
          setloading(false);
        }, 3000);
      } catch (err) {
        seterror(err);
        setloading(false);
      }
    };
    getData();
  }, []);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Loading ...</p>;

  return (
    <div>
      <h1>Fetched data</h1>
      <ul>
        {data.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Datafetch;
