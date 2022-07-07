import PropTypes from 'prop-types';
import './SmallCardsNoArrow.css';

const SmallNoArrow = (props) => {
  const { title, imageUrl, url, bgColor, isScrollable } = props;

  return (
    <div className={(isScrollable) ? '' : 'non-scrollable'}>
      <a href={url} style={{ textDecoration: 'none', color: 'black' }}>
        <div
          className="small-card-no-arrow"
          style={{ width: isScrollable ? '65vw' : '100%', backgroundColor: bgColor }}
        >
          <img className="small-card-no-arrow__img" src={imageUrl} alt={title} style={{ height: '24px' }} />
          <p className="small-card-no-arrow__title">{title}</p>
        </div>
      </a>
    </div>
  );
};

SmallNoArrow.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  isScrollable: PropTypes.bool.isRequired,
};

export default SmallNoArrow;
