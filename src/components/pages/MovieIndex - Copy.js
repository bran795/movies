import React from 'react'


import Navigation from '../shared/Navigations'
import { apiRequest } from '../../services/Api';

class Movies2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {movies:[]};
    }
    componentDidMount(){
        apiRequest().then(data => this.setState({movies:data}));
    }
    render(){
        return (
            <div>
                <h1>Movie Index</h1>
                <Navigation/>
                {
    
                }
    
            </div>
            );
    }
}

function MovieIndex(props)
{
    const [movies, setMovies] = React.useState([])

    React.useEffect( ()=> {
        const clearInterval = setInterval(
            ()=>apiRequest().then(data => setMovies(data)),
            500);

        return (()=> {clearInterval()})        
    }, [])


    return (
        <div>
            <h1>Movie Index</h1>
            <Navigation/>
            {

            }

        </div>
        )
}

export default MovieIndex