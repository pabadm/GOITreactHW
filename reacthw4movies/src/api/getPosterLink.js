const getPosterLink = (path, size = 500) => {
  return `https://image.tmdb.org/t/p/${
    size === "original" ? "original" : "w" + size
  }${path}`;
};

export default getPosterLink;
