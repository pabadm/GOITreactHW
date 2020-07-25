import React from 'react';
import ReactLoading from 'react-loading';

import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <ReactLoading
      type="spin"
      color="green"
      height={64}
      width={64}
      className={styles.Loader}
    />
  );
};

export default Loader;
