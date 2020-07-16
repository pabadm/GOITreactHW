const getPosterLink = (path, size = 500) => {
  return path !== null
    ? `https://image.tmdb.org/t/p/${
        size === 'original' ? 'original' : `w${size}`
      }${path}`
    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/No_image_available_450_x_600.svg/450px-No_image_available_450_x_600.svg.png';
};

export default getPosterLink;
