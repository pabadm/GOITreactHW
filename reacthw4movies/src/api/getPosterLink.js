import noImageIconURL from '../Images/icons/urls/noImage.svg';

const getPosterLink = (path, size = 500) => {
  return path !== null
    ? `https://image.tmdb.org/t/p/${
        size === 'original' ? 'original' : `w${size}`
      }${path}`
    : noImageIconURL;
};

export default getPosterLink;
