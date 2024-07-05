import React, { useEffect, useState } from 'react';
import NewsApiData from './NewsApiData';

const App = () => {
  const [cat, setcat] = useState("")
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://news67.p.rapidapi.com/v2/topic-search?languages=en&search=${cat}`
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '98ea7eb6aamsh7122aeccb13d5a9p14c044jsncd6337fd31e9',
          'X-RapidAPI-Host': 'news67.p.rapidapi.com'
        }
      };
      const api = await fetch(url, options)
        const data = await api.json();
      console.log("Neetu", data.news);      
      // setData(data.news)
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
      <NewsApiData data={data} setData={setData} />
    </>
  );
}

export default App;
