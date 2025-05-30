import { create } from "zustand";
import { getPopularMovies, searchMovies } from "../services/api.js";

export const useMovieStore = create((set) => ({
  searchQuery: "",
  movies: [],
  loading: false,
  error: null,

  setSearchQuery: (query) => set({ searchQuery: query }),

  loadPopularMovies: async () => {
    set({ loading: true, error: null });
    try {
      const popularMovies = await getPopularMovies();
      set({ movies: popularMovies });
    } catch (error) {
      set({ error: "Failed to load popular movies." });
    } finally {
      set({ loading: false });
    }
  },

  searchForMovies: async () => {
    set({ loading: true, error: null });
    try {
      const { searchQuery } = useMovieStore.getState();
      const results = await searchMovies(searchQuery);
      set({ movies: results });
    } catch (error) {
      set({ error: "Search failed." });
    } finally {
      set({ loading: false });
    }
  },
}));
