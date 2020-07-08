import React from 'react';

import styles from './LoadMore.module.css';

const PageChangerBtn = ({ text, name, onClick }) => {
  return (
    <button
      name={name}
      type="button"
      onClick={onClick}
      className={styles.PageChangerBtn}
    >
      {text}
    </button>
  );
};

const PageChanger = ({ onClick, page, totalPages }) => {
  return (
    <footer className={styles.PageChanger}>
      {page < totalPages && (
        <PageChangerBtn onClick={onClick} name="increment" text="Next Page" />
      )}
      {page !== 1 && (
        <PageChangerBtn onClick={onClick} name="decrement" text="Prev Page" />
      )}
    </footer>
  );
};

export default PageChanger;
