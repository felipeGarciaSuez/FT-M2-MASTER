

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c932b6df3msh91dc95c093ceabep1cf2dbjsn4374fa950358',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};


export function getMovies(title){
    return function(dispatch){
        return fetch(`https://movie-database-alternative.p.rapidapi.com/?s=${title}&r=json&page=1`, options)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_MOVIES", payload: json });
      })
    }
  }

// export function filterMovies(title, movies){
//   let moviesFiltered = movies.filter(m => m.title !== title)
//   dispatch({type:"MOVIES_FILTERED", payload: moviesFiltered})
// }

export function getMovieDetail(id){
  return function(dispatch){
    return fetch(`https://movie-database-alternative.p.rapidapi.com/?r=json&i=${id}`, options)
    .then(response => response.json())
    .then(json =>{
      dispatch({type: "GET_MOVIE_DETAIL", payload: json})
    })
  }
}

export function addMovieFavorite(title){
  return {
    type: "ADD_MOVIE_FAVORITE",
    payload: title
  }
}

export function removeMovieFavorite(id){
  return {
    type: "REMOVE_MOVIE_FAVORITE",
    id
  }
}