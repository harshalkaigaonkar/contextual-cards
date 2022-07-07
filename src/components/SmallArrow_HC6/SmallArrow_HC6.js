import PropTypes from 'prop-types';
import './SmallCardsArrow.css';

const SmallArrow = (props) => {
  const {
    title,
    icon,
    url,
  } = props;

  // formattedTitle is defined using let instead of conts so as to update its value after accounting for data
  // from entities array
  let { formattedTitle: { text: formattedTitle1, entities } } = props;

  entities.forEach((entity) => {
    formattedTitle1 = formattedTitle1.replace('{}', entity.text);
  });

  const { image_url: imageUrl } = icon;

  return (
    <div className="small-card">
      <div className="small-card__content">
        <img src={imageUrl} alt="small-card" height="30" />
        <p className="small-card__content__title">
          {formattedTitle1 || title}
        </p>
      </div>
      <h3>
        <a href={url} className="small-card__arrow">
          {'>'}
        </a>
      </h3>
    </div>
  );
};

SmallArrow.propTypes = {
  title: PropTypes.string.isRequired,
  formattedTitle: PropTypes.shape({
    text: PropTypes.string,
    entities: PropTypes.array,
  }).isRequired,
  icon: PropTypes.shape({
    image_url: PropTypes.string,
  }).isRequired,
  url: PropTypes.string.isRequired,
};

export default SmallArrow;
