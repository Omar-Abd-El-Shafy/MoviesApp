import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../search/SearchForm";
import { useSelector } from "react-redux";
import LanguageContext from "../context/LanguageContext";
function Navbar(props) {
  const favouritesCounter = useSelector((state) => state.favouriteList.counter);
  const language = useContext(LanguageContext)

  return (
    <div className="navbar bg-purple-900	 text-white">
      <div className="flex-1 ">
        <Link className="btn btn-ghost normal-case text-xl" to={"/"}>
          Movies
        </Link>

        <div className="indicator mt-2">
          <span className="indicator-item badge badge-primary">
            {favouritesCounter}
          </span>
          <div className="">
            <Link className="mx-auto hover:text-green-500" to={"/favourites"}>
              Favourites
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li tabIndex="0">
            <a>
              Language
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-black text-blue">
              <li>
                <button onClick={() => language.onChangeLanguage("en")}>
                  En
                </button>
              </li>
              <li>
                <button onClick={() => language.onChangeLanguage("ar")}>
                  Ar
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="flex">
        <SearchForm />
      </div>
    </div>
  );
}

export default Navbar;
