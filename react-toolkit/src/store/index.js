import { configureStore } from "@reduxjs/toolkit";

import { songReducer, addSong, removeSong } from "./slices/songsSlices";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";
const store = configureStore({
  reducer: {
    songs: songReducer,
    movies: moviesReducer,
  },
});

// console.log(songsSlice.actions.addSong());
// const statingState = store.getState();
// console.log(statingState);
// store.dispatch(songsSlice.actions.addSong("Some song!"));
// const finalState = store.getState();
// console.log(finalState);

export { store, addSong, removeSong, addMovie, removeMovie, reset };
// export const { addSong, removeSong } = songsSlice.actions;
// export const { addMovie, removeMovie } = movieSlice.actions;
// export const { addMovie, removeMovie, reset } = movieSlice.actions;
