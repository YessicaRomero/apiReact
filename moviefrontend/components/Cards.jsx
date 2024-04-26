/*import React, { useState } from "react";

  

function  MovieCards({movie}){
    const [detalles, setDetalles] = useState(false)

  function  handleClick() {
   setDetalles(!detalles)
      };
      

    return (

        <div id={movie.id}>
            <h2>Title: {movie.title}</h2>
            <img src={movie.poster}></img>
            <button onClick={handleClick}  >
            {detalles ? "Ocultar detalles" : "Mostrar detalles"}
      </button>
      {detalles && (
        <div>
            <p>Year: {movie.year}</p>
          <p>Director: {movie.director}</p>
          <p>Rating: {movie.year}</p>
          <p>Duration: {movie.duration}</p>
          
          <p>Genero: {movie.genre}</p>
        </div>  )}
         </div>  
            
      )
}  

export default MovieCards */