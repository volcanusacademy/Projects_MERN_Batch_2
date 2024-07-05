import React, { useContext, useState } from 'react'
import MovieContext from '../context/MovieContext';
import {useNavigate} from 'react-router-dom'

const AddMovie = () => {
    const {addmovie } = useContext(MovieContext)
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        releaseDate: "",
        imgsrc: "",
        category: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const { title, description, releaseDate, imgsrc, category } = formData;

    const submitHandler = async (e) => {
        e.preventDefault();
        if (formData.category == "--Select Movie By Category--" || formData.category.length == 0) {
            alert("Please choose category...");
        }
        else {
          const res =  await addmovie(title, description, releaseDate, imgsrc, category);
          alert(res.messgae);
          if(res.success){
           navigate("/") 
          }
        }
    };
    return (
        <>
            <div className="container mx-auto my-5 p-5 bg-black text-light" style={{ width: '30rem', border: '1px solid blue', borderRadius: '10px' }}>
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input value={formData.title} name='title' onChange={handleChange} type="text" className=" bg-black text-light form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input value={formData.description} name='description' onChange={handleChange} type="text" className=" bg-black text-light form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Category</label>
                        <select value={formData.category} name='category' onChange={handleChange} className="form-select bg-black text-light" aria-label="Default select example" required>
                            <option selected>--Select Product Category--</option>
                            <option value="comedy">Comedy</option>
                            <option value="action">Action</option>
                            <option value="family-drama">Family Drama</option>
                            <option value="horrro">Horror</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Release Date</label>
                        <input value={formData.releaseDate} name='releaseDate' onChange={handleChange} type="text" className=" bg-black text-light form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">ImgSrc</label>
                        <input value={formData.imgsrc} name='imgsrc' onChange={handleChange} type="text" className=" bg-black text-light form-control" required />
                    </div>
                    <div className="d-grid col-6 mx-auto">
                        <button type="submit" className="btn btn-primary">Add Movie</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default AddMovie