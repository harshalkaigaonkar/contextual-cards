import PropTypes from 'prop-types';
import './ImageCards.css';

const ImageCard = (props) => {
  const {
    url,
    bgImageUrl,
  } = props;
  return (
    <a href={url}>
      <img className="image-card" src={bgImageUrl} alt="card" />
    </a>
  );
};

ImageCard.propTypes = {
  url: PropTypes.string.isRequired,
  bgImageUrl: PropTypes.string.isRequired,
};

export default ImageCard;
