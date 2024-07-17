import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Details() {
    const { state } = useLocation();
    const { result } = state;
    console.log(result);

    const poster = 'https://image.tmdb.org/t/p/original/' + result.poster_path;
    return ( 
        <div className="details">
           <div className="movie-detail">
           <h1>{result.original_title}</h1>
            <img src = {poster} id='poster'/>
            <p>{result.overview}</p>
            <ul>
                <li>Language : {result.original_language}</li>
                <li>Release Date : {result.release_date}</li>
                <li>Rating : {result.vote_average}</li>
            </ul>
           </div>
            
            <div className="personal-details">
                <label htmlFor='name'>NAME</label>
                <input type='text' id='name' placeholder='ENTER YOUR NAME'></input>

                <label htmlFor='email'>EMAIL</label>
                <input type='email' id='email' placeholder='ENTER YOUR EMAIL'></input>

                <label htmlFor='phone'>PHONE NO.</label>
                <input type='number' id='phone' placeholder='ENTER YOUR PHONE NO.'></input>

                <Link to='/confirm'><button id='confirm-button'>BOOK SEAT</button></Link>
            </div>
        </div>
    );
}

export default Details;