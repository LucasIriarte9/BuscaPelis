import results from "../mock/results.json";

// eslint-disable-next-line react/prop-types
function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {
        // eslint-disable-next-line react/prop-types
        movies.map((movie) => (
          <li className="movie" key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  );
}

// eslint-disable-next-line react/prop-types
function ListOf() {
  return (
    <ul className="movies">
      {
        // eslint-disable-next-line react/prop-types
        results.Search.map((movie) => (
          <li className="movie" key={movie.id}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
          </li>
        ))
      }
    </ul>
  );
}

function NoMovies() {
  return <ListOf />;
}

// eslint-disable-next-line react/prop-types
export function Movies({ movies }) {
  // eslint-disable-next-line react/prop-types
  const hasMovies = movies?.length > 0;

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMovies />;
}
