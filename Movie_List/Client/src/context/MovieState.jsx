import React, { useEffect, useState } from 'react'
import MovieContext from './MovieContext'
import axios from 'axios'


const MovieState = (props) => {
  const [movies, setMovies] = useState([])
  const [reload, setReload] = useState(false)

  const url = "http://localhost:1000/api"
  useEffect(() => {
    const fetchMovie = async () => {
      const api = await axios.get(`${url}/movie/get`, {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      });
      console.log("Fetching Data", api.data.movie);
      setMovies(api.data.movie)
    }
    fetchMovie()

  }, [reload])

  // Addmovie
  const addmovie = async (title, description, releaseDate, imgsrc, category) => {
    const api = await axios.post(`${url}/movie/add`, { title, description, releaseDate, imgsrc, category },
      {
        headers: { "Content-Type": "Application/json" },
        withCredentials: true
      }
    );
    setReload(!reload)
    return api.data

    // console.log(api);
  };
  // FetchmovieByID


  return (
    <MovieContext.Provider value={{ movies, addmovie, url }}>
      {props.children}
    </MovieContext.Provider>
  )
}

export default MovieState