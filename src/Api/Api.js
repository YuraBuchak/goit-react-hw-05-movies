const defaultUrl = 'https://api.themoviedb.org/3/';
// const ApiKey = 'd18bf6b2746fb0003930e48639ffb8b8';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMThiZjZiMjc0NmZiMDAwMzkzMGU0ODYzOWZmYjhiOCIsInN1YiI6IjY0Nzg4ODA5OTM4MjhlMDBhNzYzMzI2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lKAxGANSJLLtol2MDLLv8krLLwoOSubkdCp9pQTm9io',
  },
};

export const fetchTrending = async () => {
  try {
    const data = await fetch(
      `${defaultUrl}trending/movie/day?language=en-US`,
      options
    );

    return await data.json();
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearchMovies = async text => {
  try {
    const data = await fetch(
      `${defaultUrl}search/movie?query=${text}&include_adult=false&language=en-US&page=1`,
      options
    );

    return await data.json();
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieDetailsById = async id => {
  try {
    const data = await fetch(
      `${defaultUrl}/movie/${id}?language=en-US`,
      options
    );

    return await data.json();
  } catch (error) {
    console.log(error);
  }
};

export const fetchCredits = async id => {
  try {
    const data = await fetch(
      `${defaultUrl}movie/${id}/credits?language=en-US`,
      options
    );

    return await data.json();
  } catch (error) {
    console.log(error);
  }
};

export const fetchReviews = async id => {
  try {
    const data = await fetch(
      `${defaultUrl}movie/${id}/reviews?language=en-US&page=1`,
      options
    );

    return await data.json();
  } catch (error) {
    console.log(error);
  }
};
