const API_KEY = "68487a44c9a2f502f9c4a074218449a8";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("Error in getPopularMovies...");
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        //encodeURIComponent just removes anything we cant pass
        query
      )}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("Error in searchMovies...");
  }
};
