import React from 'react';
import { directors } from '../data';

const Directors = () => {
  console.log(directors)
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director=>
        <div>{director.name}
          <ul>Movies:{director.movies.map(movie =>
            <li>{movie}</li>)}
          </ul>
        </div>
        )}
    </div>
  );
}

export default Directors
