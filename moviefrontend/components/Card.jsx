import React, { useState } from "react";

function MovieCards({ movie }) {
  const [detalles, setDetalles] = useState(false);

  function handleClick() {
    setDetalles(!detalles);
  }
 
  return (
    
    
<div className="card" style={{ width: "18rem" }}>

            <div id={movie.id}>
              <img src={movie.poster} className="card-img-top" />
              <div className="card-body">
          
                <h5 className="card-title">{movie.title}</h5>
                <button onClick={handleClick} className="btn btn-primary">
                  { detalles ? "Ocultar detalles" : "Detalles"}
                </button>
                {detalles && (
                  <div>
                    <p>Year: {movie.year}</p>
                    <p>Director: {movie.director}</p>
                    <p>Rating: {movie.rating}</p>
                    <p>Duration: {movie.duration}</p>
                    <p>Genero: {movie.genre}</p>
                  
                   
                  </div>  
                        
                )}
               
             </div> 
            </div>
                
            </div>

  
  );
}

export default MovieCards;
