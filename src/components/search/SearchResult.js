import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import Movie from "../movies/Movie";
function SearchResult(props) {
  const { movieName } = useParams();
  const [searchMovieList, setSearchMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentMovieName,setCurrentMovieName] = useState(movieName)
  const nextPageHandler = () => {
    if (searchMovieList.total_pages === currentPage) {
      return false;
    }

    setCurrentPage((oldPage) => ++oldPage);
  };

  const previousPageHandler = () => {
    if (currentPage === 1) {
      return false;
    }
    setCurrentPage((oldPage) => --oldPage);
  };

  useEffect(() => {
    axiosInstance
      .get("3/search/movie", {
        params: {
          page: currentPage,
          query: movieName,
        },
      })
      .then((result) => {
        if (movieName !== currentMovieName ) {
            setCurrentPage(1)
            setCurrentMovieName(movieName)
        }
        setSearchMovieList(result.data);
 
      });
  }, [currentPage, movieName]);
  return (
    <section className="flex flex-col items-center justify-center my-12">
      <h1 className="font-bold text-3xl md:text-5xl">
        results for {movieName}
      </h1>
      <div className="btn-group my-5 ">
        <button className="btn " onClick={previousPageHandler}>
          «
        </button>
        <button className="btn btn-">Page {currentPage}</button>
        <button className="btn " onClick={nextPageHandler}>
          »
        </button>
      </div>
      <div className="flex items-center justify-center flex-wrap space-y-4 space-x-4">
        {searchMovieList.results?.map((movie) => (
          <Movie
            {...movie}
            key={movie.id}
          />
        ))}
      </div>
      <div className="btn-group my-5">
        <button className="btn" onClick={previousPageHandler}>
          «
        </button>
        <button className="btn">Page {currentPage}</button>
        <button className="btn" onClick={nextPageHandler}>
          »
        </button>
      </div>
    </section>
  );
}

export default SearchResult;
