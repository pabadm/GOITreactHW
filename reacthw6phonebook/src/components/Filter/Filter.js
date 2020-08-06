import React, { useState } from 'react';

import { connect } from 'react-redux';

import { CSSTransition } from 'react-transition-group';
import { addFilter } from '../../redux';

import styles from './Filter.module.scss';

const Filter = ({ dispatch, filter, contacts }) => {
  let inProp = true;
  if (contacts.length < 2) {
    inProp = false;
  }
  return (
    <CSSTransition in={inProp} timeout={500} classNames="Filter">
      <div className={styles.Filter}>
        <input
          className={styles['Filter-input']}
          type="text"
          placeholder="Find Contacts"
          value={filter}
          onChange={({ target }) => dispatch(addFilter(target.value))}
        />
        {/* <button type="button" onClick={() => setInProp(!inProp)}>
          Test
        </button> */}
      </div>
    </CSSTransition>
  );
};

const mapStateToProps = state => ({
  filter: state.filter,
  contacts: state.contacts,
});

export default connect(mapStateToProps)(Filter);
