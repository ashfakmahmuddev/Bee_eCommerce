

const Images = ({ imgSrc, imgAlt, className }) => {
  return (
    <img
      src={imgSrc}
      alt={imgAlt}
      loading="lazy"
      className={`${className}`}
    />
  );
};

export default Images