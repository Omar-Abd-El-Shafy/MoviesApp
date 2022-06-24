import { configureStore } from "@reduxjs/toolkit";
import favouriteListSliceReducer from "./slices/FavouritesSlice";
import thunk from "redux-thunk";
import moviesListSliceReducer from "./slices/MoviesSlice";
export const store = configureStore({
  reducer: {
    favouriteList: favouriteListSliceReducer,
    moviesList: moviesListSliceReducer,
  },
  middleware: [thunk],
});
