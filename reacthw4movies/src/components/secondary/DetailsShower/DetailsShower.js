import React from 'react';
import { NavLink } from 'react-router-dom';
import getPosterLink from '../../../api/getPosterLink';

const DetailsShower = ({ posterPath, overview, title, id }) => {
  return (
    <section>
      <div>
        <img src={getPosterLink(posterPath, 500)} alt="img" />
      </div>
      <h3>{title}</h3>
      <p>{overview}</p>
      <NavLink to={`/Details?id=${id}#Reviews`}>Reviews</NavLink>
      <NavLink to={`/Details?id=${id}#Cast`}>Cast</NavLink>
    </section>
  );
};

export default DetailsShower;
