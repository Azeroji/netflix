import React from "react";

export default function MovieCard(props){
    const genres = (props.genres).map(genre => <p>{genre}</p>)
    console.log(props.poster)
    return(
    <div>
        <img src={props.poster} width="100" />
        <p>{props.title}</p>
        <p>{genres}</p>
        <p>{props.date}</p>
    </div>
    )
}