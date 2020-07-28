import React, { Component, useState } from 'react';

import { NavLink, useLocation, useHistory } from 'react-router-dom';
import queryString, { parse } from 'query-string';

import styles from './PageChanger.module.scss';

const PageChangerLink = ({ type, text }) => {
  const location = useLocation();

  let { search } = location;

  const parsedSearch = queryString.parse(search);

  let page = Number(parsedSearch.p);

  if (Number.isNaN(page)) {
    page = 1;
  }

  switch (type) {
    case 'increment':
      page += 1;
      break;
    case 'decrement':
      page -= 1;
      break;
    default:
      page = 1;
  }

  parsedSearch.p = page;

  search = `?${queryString.stringify(parsedSearch)}`;

  const { pathname, hash } = location;

  return (
    <NavLink
      className={styles['PageChanger-link']}
      to={`${pathname}${search}${hash}`}
    >
      {text}
    </NavLink>
  );
};

const PageChanger = ({ page, totalPages }) => {
  const location = useLocation();

  return (
    <div className={styles.PageChanger}>
      {page > 1 && (
        <PageChangerLink
          location={location}
          type="decrement"
          text="Prev Page"
        />
      )}
      {page < totalPages && (
        <PageChangerLink
          location={location}
          type="increment"
          text="Next Page"
        />
      )}
    </div>
  );
};

export default PageChanger;
