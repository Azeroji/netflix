import '../styles/main.css'

export default function MovieList(props){
    const list = (props.movies).map(movie => <div className='box'> <img onClick={() => props.toggle(movie)} src={movie.poster} width="150" style={{
        borderRadius: "5px"
    }} /> </div>)

    return(
        <div className='movielist'>
            {list}
        </div>
    )
}