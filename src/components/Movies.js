import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie=> 
      <div>{movie.title}
      <ul>
          <li>Genres: {movie.genres.join(', ')}</li>
          <li>Runtime: {movie.time}</li>
          {!!movie.metascore ?
          <li>Metascore: {movie.metascore}</li> :
          <li>Metascore: n/a</li>
          }
        </ul>
      </div>
        )}
  </div>
  );
};

export default Movies;
