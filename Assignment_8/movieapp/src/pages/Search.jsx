import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Search() {
    const { state } = useLocation();
    const { name } = state;

    const navigate = useNavigate();
    var data;
    useEffect(() => {
        async function getData() {
            const url = "https://api.themoviedb.org/3/search/movie?query=" + name.myInput + "&api_key=48611c2270e1b97cab759d6cf0adb035"
            const res = await fetch(url);
            data = await res.json();
            const element = document.getElementById("search");

            for (var i = 0; i < data.results.length; ++i) {
                const div = document.createElement("div");
                const poster_path = 'https://image.tmdb.org/t/p/original/' + data.results[i].poster_path;
                div.innerHTML = `<img src=${poster_path} width=300px height= 300px id=${i}>`;
                div.innerHTML += `<h4>${data.results[i].original_title}<h4>`;
                div.id = i;
                div.addEventListener('click', handleClick);
                element.appendChild(div);
            }
        }

        getData()

        function handleClick(e) {
            e.preventDefault();
            try {
                navigate('/details',{state:{result:data.results[e.target.id]}});
            } catch (error) {
                console.error('Error navigating:', error);
            }
        }
    }, []);
    return (
        <>
            <h1>YOU SEARCHED FOR: </h1>
            <div id='search'>
            </div>
        </>
    );
}

export default Search;