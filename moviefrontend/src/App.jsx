import { useEffect, useState } from 'react'
import { getMovies } from '../api/getMovies'
import './App.css'
import MovieCards from '../components/Card';




function App() {
  const [movies, setMovie] = useState([])
 
useEffect(() =>{
  getMovies()
  .then((res) => res.json())
  .then((datos) => setMovie(datos))
}, []);



return (
    <>
   <div className='Movies'>
    <h1>Movies</h1>
    
   </div>
   <div className='generos'>
   <h2>Drama-Comedia-Terror-Accion-Aventura-Romance</h2>
   
    
   </div>
   <div className='container'> 
  

    {movies?.map((movie) => (
   <MovieCards movie={movie} key={movie.id}  />
  
  ))}

</div>
    </>
  )
}

export default App
