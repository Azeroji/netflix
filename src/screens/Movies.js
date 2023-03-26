import '../styles/movies.css'

export default function Movies(){
    const topmovies = require('../movies/movies.json')
    const movies = require('../movies/film.json')
    console.log(movies[1].Genre)
    const list = (topmovies).map(movie => <div className='box'> <img src={movie.backdrops[0]} style={{borderRadius: "5px"}} width="250px" />  </div>)

    const listaction = movies.map(movie => (movie.Genre).includes("Action") && <div className='box'> <img  style={{borderRadius: "5px",height:"140.625px",width:"250px",objectFit:"cover",objectPosition:"center center"}} src={movie.Images[0]} /> </div> )

    const listdrama = movies.map(movie => (movie.Genre).includes("Drama") && <div className='box'> <img  style={{borderRadius: "5px",height:"140.625px",width:"250px",objectFit:"cover",objectPosition:"center center"}} src={movie.Images[0]} /> </div> )

    const listadventure = movies.map(movie => (movie.Genre).includes("Adventure") && <div className='box'> <img  style={{borderRadius: "5px",height:"140.625px",width:"250px",objectFit:"cover",objectPosition:"center center"}} src={movie.Images[0]} /> </div> )

    return(
    <div className='main'>
        <p>Top Movies</p>
        <div className='top-movies'>
            {list}
        </div>
        <p>Action</p>
        <div className='top-movies'>
            {listaction}
        </div>
        <p>Drama</p>
        <div className='top-movies'>
            {listdrama}
        </div>
        <p>Adventure</p>
        <div className='top-movies'>
            {listadventure}
        </div>
    </div>
    )
}