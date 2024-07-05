import React, { useEffect, useState } from 'react';
import ApiData from './ApiData';

const App = () => {
  const [cat, setcat] = useState("")
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(`https://pixabay.com/api/?key=43352392-174fc6f5dd299e65ccfe8a3eb&q=paris&image_type=photo&pretty=true&per_page=50&category=${cat}`)
      
        const data = await api.json();
      console.log("Neetu", data.hits);      
      // console.log(data.hits);
      setData(data.hits)
    };
    fetchData();
  }, [data, cat]);
  // console.log("Api Data: ", data);
  return (
    <>
      <button onClick={() => setcat("computer")}>computer</button>
      <button onClick={() => setcat("animals")}>Animals</button>
      <button onClick={() => setcat("food")}>Food</button>
      <button onClick={() => setcat("sports")}>Sports</button>
      <button onClick={() => setcat("transportation")}>Transportation</button>
      <button onClick={() => setcat("buildings")}>Building</button>
      <button onClick={() => setcat("travel")}>Travel</button>

      <h1>Data Coming from API</h1>
      <ApiData data={data} setData={setData} />
    </>
  );
}

export default App;
