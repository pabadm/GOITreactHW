import React, { Component } from 'react';

import { NavLink, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import styles from './PageChanger.module.scss';

class PageChangerLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }

  changePage = () => {
    const { type, location } = this.props;

    const { search } = location;

    const parsedSearch = queryString.parse(search);

    let page = Number(parsedSearch.p);

    if (type === 'increment') {
      console.log('incr :>> ');
      page += 1;
    } else if (type === 'decrement') {
      page -= 1;
    }
    parsedSearch.p = page;

    return queryString.stringify(parsedSearch);
  };

  render() {
    const stringifiedSearch = this.changePage();
    const { text } = this.props;
    const { pathname, hash } = location;

    return (
      <NavLink
        className={styles['PageChanger-link']}
        to={`${pathname}?${stringifiedSearch}${hash}`}
      >
        {text}
      </NavLink>
    );
  }
}

const PageChanger = ({ page, totalPages }) => {
  const location = useLocation();
  return (
    <div className={styles.PageChanger}>
      {page !== 1 && (
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
