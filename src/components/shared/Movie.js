import React from 'react'

//id
//title
//thumbnailUrl
//url

const Movie = (props) => {


    return (
        <>
        <h3>{props.info.title}</h3>
        <img src = {props.info.thumbnailUrl}
         onClick = {props.clickHandler}
         alt = "description"/>
        </>
    )
}

export default Movie