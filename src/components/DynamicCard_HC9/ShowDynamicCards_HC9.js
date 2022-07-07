import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DynamicCard from './DynamicCard_HC9';
import './DynamicCards.css';

const ShowDynamicCards = ({ cardsData }) => {
  const [height, setHeight] = useState();
  const [cards, setCards] = useState();

  useEffect(() => {
    setCards(cardsData?.[0].cards);
    setHeight(cardsData?.[0].height);
  }, [cardsData]);

  return (
    <div className="dynamic-width-cards">
      {
        (cards === undefined) ? ''
          : cards.map((card) => {
            const { name, url, bg_image: { image_url: imageUrl } } = card;
            return (
              <DynamicCard
                key={name}
                url={url}
                imageUrl={imageUrl}
                height={height}
              />
            );
          })
      }
    </div>
  );
};

ShowDynamicCards.propTypes = {
  cardsData: PropTypes.array,
};

export default ShowDynamicCards;
