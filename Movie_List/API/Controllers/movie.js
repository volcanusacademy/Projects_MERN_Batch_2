import { Movies } from '../Models/Movies.js'


// Add movies
export const addMovie = async (req, res) => {
    const { title, description, releaseDate, imgsrc, category } = req.body;
    try {
        let movie = await Movies.create({
            title,
            description,
            releaseDate,
            imgsrc,
            category,
        });
        res.json({ messgae: "Your movie has been Added", success: true, movie })
    } catch (error) {
        res.json({ message: error.message, success: false })
    }

}

//get All movies
export const getAllMovies = async (req, res) => {
    try {
        let movie = await Movies.find().sort({ createdAt: -1 });
        res.json({ message: "All movies", movie })
    } catch (error) {
        res.json({ message: error.message, success: false })
    }
};
//get movie by ID
export const getMovieById = async (req, res) => {
    const id = req.params.id
    try {
        if (id.length != 24) return res.json({ message: "Invalid ID" })
        let movie = await Movies.findById(id);
        if (!movie) return res.json({ message: "Invalid ID" })
        res.json({ message: "movie by Id:", movie })

    } catch (error) {
        res.json({ message: error.message, success: false })
    }
}

// Update movie by ID
export const updateByID = async (req, res) => {
    const id = req.params.id
    let movie = await Movies.findByIdAndUpdate(id, req.body, { new: true });
    if (!movie) return res.json({ message: "Invalid ID" })
    res.json({ message: "Your movie has been Updated :", movie })

}


// Delete movie by ID
export const deleteById = async (req, res) => {
    const id = req.params.id
    let movie = await Movies.findByIdAndDelete(id);
    if (!movie) return res.json({ message: "Invalid ID" });
    res.json({ message: "Your movie has been deleted" })
}

//home
export const home = async (req, res) => {
    res.json({ message: "this is home" })
}

