import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import favoritesReducer from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    favorites: favoritesReducer,
  },
});
