import React from 'react';

import { connect } from 'react-redux';

import { addFilter } from '../../redux';

import styles from './Filter.module.scss';

const Filter = ({ dispatch, filter, contacts }) => {
  return (
    contacts.length > 1 && (
      <div className={styles.Filter}>
        <input
          className={styles['Filter-input']}
          type="text"
          placeholder="filter"
          value={filter}
          onChange={({ target }) => dispatch(addFilter(target.value))}
        />
      </div>
    )
  );
};

const mapStateToProps = state => ({
  filter: state.filter,
  contacts: state.contacts,
});

export default connect(mapStateToProps)(Filter);
