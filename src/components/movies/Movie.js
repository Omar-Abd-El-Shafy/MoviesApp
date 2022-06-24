import { HeartIcon } from "@heroicons/react/solid";
import { HeartIcon as NotFavourite } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../store/slices/FavouritesSlice";

function Movie(props) {
  const [isFavourite, setIsFavourite] = useState(false);
  const dispatch = useDispatch();
  const favouriteList = useSelector(
    (state) => state.favouriteList.favouriteList
  );

  useEffect(() => {
    //if the the movie was in favourite, make the heart shaped filled
    //else make the heart shape with no fill for a better UX
    let isMovieInFavourite = favouriteList.findIndex(
      (movie) => movie.id === props.id
    );
    if (isMovieInFavourite === -1) {
      setIsFavourite(false);
    } else {
      setIsFavourite(true);
    }
  }, [favouriteList]);

  return (
    <div className="card w-60 bg-base-100 shadow-xl ">
      <figure className="px-10 pt-10">
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}
          alt={props.title}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{props.title}</h2>
        <p className="font-bold">Votes: {props.vote_average}/10</p>
        <div className="card-actions">
          <Link className="btn btn-primary" to={`/movie/${props.id}`}>
            More Details
          </Link>
          {isFavourite ? (
            <HeartIcon
              className="w-8 h-8 text-red-500 hover:cursor-pointer"
              onClick={() => dispatch(removeFromFavourites(props.id))}
            />
          ) : (
            <NotFavourite
              className="w-8 h-8  hover:cursor-pointer"
              onClick={() => dispatch(addToFavourites(props))}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Movie;
