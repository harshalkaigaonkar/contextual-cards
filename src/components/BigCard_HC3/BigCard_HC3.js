import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import './HC3_Card.css';

import icon1 from '../../assets/icon1.svg';
import icon2 from '../../assets/icon2.svg';

const BigCard = (props) => {
  const contentBox = useRef(null);
  const buttons = useRef(null);
  const [cardDetails, setCardDetails] = useState();
  const [cardState, setCardState] = useState(false);


  useEffect(() => {
    setCardDetails(props);
  }, [props]);


  const {
    title,
    // eslint-disable-next-line
    bgColor: bgColor1,
    description,
    formattedDescription: { text: formattedDescription },
    // eslint-disable-next-line
    bgImage: { image_url: imgUrl, aspect_ratio: aratio },
    cta,
  } = props;

  console.log(bgColor1);

  let { formattedTitle: { text: formattedTitle1, entities }, } = props;

  entities.forEach((entity) => {
    formattedTitle1 = formattedTitle1.replace('{}', entity.text);
  });

  const {
    text: btnText,
    text_color: btnTextColor,
    bg_color: bgColor,
    url: btnUrl,
  } = cta[0];

  let timer;
  // eslint-disable-next-line
  let width = window.screen.width;

  const TouchStart = () => {
    if (!timer) {
      // A timeout function for adding long touch functionality
      timer = setTimeout(() => {
        buttons.current.classList.toggle('showButtons');
        contentBox.current.classList.toggle('moveToRight');
      }, 600)
    }
  };

  const TouchEnd = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  const dismissNow = () => {
    setCardState(true);
  };

  const remindLater = () => {
    setCardDetails(null);
  };
  return (
    <>
      {
        (!cardDetails || cardState) ? (<div />)
          : (
            <div className="big-display-card">

              <div className="big-display-card__buttons" ref={buttons}>
                <div
                  className="big-display-card__buttons__general"
                  role="button"
                  tabIndex="0"
                  onKeyPress={remindLater}
                  onClick={remindLater}
                >
                  <img
                    alt="remind later"
                    src={icon1}
                    style={{ height: '20px' }}
                  />
                  <p className="big-display-card__buttons__text">remind later</p>
                </div>

                <div
                  className="big-display-card__buttons__general"
                  role="button"
                  tabIndex="0"
                  onKeyPress={dismissNow}
                  onClick={dismissNow}
                >
                  <img
                    alt="dismiss now"
                    src={icon2}
                    style={{ height: '20px' }}
                  />
                  <p className="big-display-card__buttons__text">dismiss now</p>
                </div>
              </div>

              <div
                className="big-display-card__content"
                tabIndex="0"
                // role="button"
                id="big-display-card_content"
                onTouchStart={TouchStart}
                onTouchEnd={TouchEnd}
                ref={contentBox}
                style={{ backgroundColor: bgColor1 }}
              // style={{ bgColor: { bgColor1 }, backgroundImage: `url(${imgUrl})`, height: `${aratio * width}px` }}
              >
                <h2
                  className="big-display-card__title"
                >
                  {formattedTitle1 || title}
                </h2>
                <p
                  className="big-display-card__description"
                >
                  {description || formattedDescription}
                </p>
                <a href={btnUrl}>
                  <button
                    style={{
                      backgroundColor: bgColor,
                      color: btnTextColor,
                    }}
                    className="big-display-card__btn"
                    type="button"
                  >
                    {btnText}
                  </button>
                </a>
              </div>

            </div>
          )
      }
    </>
  );
};


BigCard.propTypes = {
  title: PropTypes.string.isRequired,

  formattedTitle: PropTypes.shape({
    text: PropTypes.string,
    entities: PropTypes.array,
  }).isRequired,

  description: PropTypes.string.isRequired,

  formattedDescription: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,

  bgColor: PropTypes.string.isRequired,

  bgImage: PropTypes.object.isRequired,

  cta: PropTypes.array.isRequired,

};

export default BigCard;
