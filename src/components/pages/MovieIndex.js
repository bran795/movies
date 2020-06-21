import React from 'react'
import {Link} from 'react-router-dom'


import Navigation from '../shared/Navigations'
import { apiRequest } from '../../services/Api';
import Movie from '../shared/Movie'


function clickHandler (id)
{
    console.log(id)
}


function MovieIndex(props)
{
    const [movies, setMovies] = React.useState([])

    const onMount = () => {
        apiRequest().then(data => {
            setMovies(data)});

        return (() => {console.log("Unmounted")}) 
    }

    React.useEffect(onMount, [])

    return (
        <div>
            <h1>Movie Index</h1>
            <Navigation/>
            {
                movies.map(m => {
                    console.log(m.id)
                    return (
                        <Link key = {m.id} to = {'/movie/' + m.id} component = {<Movie info = {m} clickHandler = {() => clickHandler(m.id)}/>} />
                        );
                })
            }        
        </div>
        )
}

export default MovieIndex