import { HeartIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavourites } from "../store/slices/FavouritesSlice";

function Favourites(props) {
  const dispatch = useDispatch();
  const favouriteList = useSelector(
    (state) => state.favouriteList.favouriteList
  );

  return (
    <>
      <section className="">
        <h1 className="text-3xl mx-auto text-center md:text-5xl font-bold my-5">
          Wlecome to your Loved Movies
        </h1>
        {favouriteList.length !== 0 ? (
          <div className="overflow-x-auto">
            <table className="table-normal w-full text-center">
              <thead className="bg-blue-500">
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Release Date</th>
                  <th>Rating</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {/* If there is movies in favourite, just map over it */}
                {favouriteList.map((movie) => (
                  <tr className="hover" key={movie.title}>
                    <th>{movie.id}</th>
                    <td>{movie.title}</td>
                    <td>{movie.release_date}</td>
                    <td>{movie.vote_average}/10</td>
                    <td className="flex flex-col md:flex-row items-center justify-center md:space-x-5 space-y-2">
                      <Link
                        className="btn btn-primary"
                        to={`/movie/${movie.id}`}
                      >
                        Details
                      </Link>
                      {movie.favourite && (
                        <HeartIcon
                          className="w-8 h-8 text-red-500 hover:cursor-pointer"
                          onClick={() =>
                            dispatch(removeFromFavourites(movie.id))
                          }
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h1 className="text-3xl mx-auto text-center md:text-5xl font-bold my-5 text-green-500">
            Add Favourites Now
          </h1>
        )}
      </section>
    </>
  );
}

export default Favourites;
