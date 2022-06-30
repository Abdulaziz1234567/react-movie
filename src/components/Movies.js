import Movie from "./Movie";
export default function Movies(props) {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {/* {movies.map((movie) => (
        <Movie key={movie.imdbID} {...movie} />
      ))} */}
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <div className="error_box">
          <h1 className="error_title">404 ERROR</h1>
        </div>
      )}
    </div>
  );
}
