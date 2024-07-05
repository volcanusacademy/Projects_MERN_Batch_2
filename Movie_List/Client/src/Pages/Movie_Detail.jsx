import React, { useContext, useEffect, useState } from 'react'
import MovieContext from '../context/MovieContext'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const movie_Detail = () => {
    const { url } = useContext(MovieContext)
    const { id } = useParams();
    const [movie, setMovie] = useState({})
    useEffect(() => {
        const fetchmovieById = async (id) => {
            const api = await axios.get(`${url}/movie/${id}`, {
                headers: {
                    "Content-Type": "Application/json",
                },
                withCredentials: true,
            });
            setMovie(api.data.movie);
        };
        fetchmovieById(id);
    }, [id])

    return (
        <>
            <div className="container my-5 d-flex justify-content-around align-items-center">
                <div className="img">
                    <img src={movie.imgsrc} alt="" style={{width:"18rem", height:'18rem', border:"2px solid blue", borderRadius:"10px"}}/>
                </div>
                <div className="des text-center">
                    <h3>{movie.title}</h3>
                    <p>{movie.description}</p>
                    <div className='my-3'>
                    <button className="btn btn-warning mx-3">Book Tickets</button>
                    <button className="btn btn-danger mx-3">Watch Trailer</button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default movie_Detail