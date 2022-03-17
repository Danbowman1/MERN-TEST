import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const NewMovie = (props) => {

    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [boxArt, setBoxArt] = useState("");
    const [watchLength, setWatchLength] = useState("");
    const [rating, setRating] = useState("");
    const [actors, setActors] = useState("");
    const [kidFriendly, setKidFriendly] = useState(false);
    const [yearReleased, setYearReleased] = useState("");

    const [errors, setErrors] = useState({})

    const navigate = useNavigate();


    const submitHandler = (e)=>{
        e.preventDefault();

        axios.post("http://localhost:8000/api/movies",
        {
            title, 
            genre, 
            boxArt,
            watchLength,
            rating,
            actors,
            kidFriendly,
            yearReleased
        })
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err)=>{
            console.log(err)
            console.log("err.response.data.errors:", err.response.data.errors)
            setErrors(err.response.data.errors)
            })
    }




    return (
        <div>
            <header style={{ borderBottom: "5px double lightgray", padding: "10px", margin: "10px" }}>
                <h1 style={{ fontSize: "50px", marginLeft: "450px", marginRight: "450px" }}>Add a Movie!</h1>
                <Link to={"/"}>Return Home</Link>
            </header>


            <form onSubmit={submitHandler}>
                <div>
                    <label>Title</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
                    {
                        errors.title?
                        <p>{errors.title.message}</p>
                        :null
                    }
                </div>

                <div>
                    <label>Year Released</label>
                    <input value={yearReleased} onChange={(e) => setYearReleased(e.target.value)} type="number" />
                    {
                        errors.yearReleased?
                        <p>{errors.yearReleased.message}</p>
                        :null
                    }
                </div>

                <div>
                    <label>Genre</label>
                    <select value={genre} name="genre" onChange={(e) => setGenre(e.target.value)} >
                        <option defaultValue hidden>Select a Genre</option>
                        <option value="Crime Noir">Crime Noir</option>
                        <option value="French Cinema">French Cinema</option>
                        <option value="Romcom">Romcom</option>
                        <option value="Horror">Horror</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="Silent Movie">Silent Movie</option>
                        <option value="Documentary">Documentary</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Action">Action</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Family">Family</option>
                        <option value="Animated">Animated</option>
                        <option value="Drama">Drama</option>
                    </select>
                    {
                        errors.genre?
                        <p>{errors.genre.message}</p>
                        :null
                    }
                </div>

                <div>
                    <label>Box Art</label>
                    <input value={boxArt} onChange={(e) => setBoxArt(e.target.value)} type="text" />
                    {
                        errors.boxArt?
                        <p>{errors.boxArt.message}</p>
                        :null
                    }
                </div>

                <div>
                    <label>Watch Length</label>
                    <input value={watchLength} onChange={(e) => setWatchLength(e.target.value)} type="number" />
                    {
                        errors.watchLength?
                        <p>{errors.watchLength.message}</p>
                        :null
                    }
                </div>


                <div>
                    <label>Rating</label>
                    <select value={rating} name="rating" onChange={(e) => setRating(e.target.value)} >
                        <option defaultValue hidden>Select a Rating</option>
                        <option value="G">G</option>
                        <option value="PG">PG</option>
                        <option value="PG-13">PG-13</option>
                        <option value="R">R</option>
                        <option value="NC-17">NC-17</option>
                    </select>
                    
                </div>


                <div>
                    <label>Actor</label>
                    <input value={actors} onChange={(e) => setActors(e.target.value)} type="text" />
                    {
                        errors.actor?
                        <p>{errors.actor.message}</p>
                        :null
                    }
                </div>

                <div>
                    <label>Kid Friendly?</label>
                    <input checked={kidFriendly} onChange={(e) => setKidFriendly(e.target.checked)} type="checkbox" />
                    {
                        errors.kidFriendly?
                        <p>{errors.kidFriendly.message}</p>
                        :null
                    }
                </div>

                <button>Add a movie!</button>

            </form>
        </div>
    )
}




export default NewMovie;