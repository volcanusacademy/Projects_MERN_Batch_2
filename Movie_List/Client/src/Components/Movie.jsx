import React, { useContext } from 'react'
import MovieContext from '../context/MovieContext' 
import MovieSlider from './MovieSlider'
import { Link } from 'react-router-dom'

const Movie = () => {
    const { movies } = useContext(MovieContext)
   
    return (
        <>
        <MovieSlider/>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center text-center">
                    {movies.map((data) => (<div key={data._id} className='col-md-4 my-3 p-2' 
                    // style={{ border: "1px solid white" }}
                    >
                        <Link to={`/movie/${data._id}`}>
                            <img src={data.imgsrc} alt="" style={{ width: "250px", height: "280px", borderRadius: "10px", border: "2px solid blue" }} />
                        </Link>
                        <h1 className='mt-3'>{data.title}</h1>
                        <h5 className='mt-3'>{data.description}</h5>


                    </div>))}
                </div>
            </div>
        </>
    )
}

export default Movie;