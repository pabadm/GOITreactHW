import React from "react";

import styles from "./LoadMore.module.css";

const LoadMore = ({ text = "Load More", handleClick }) => {
  return (
    <div className={styles["LoadMore"]}>
      <button
        onClick={handleClick}
        type="button"
        className={styles["LoadMore-btn"]}
      >
        {text}
      </button>
    </div>
  );
};

export default LoadMore;
