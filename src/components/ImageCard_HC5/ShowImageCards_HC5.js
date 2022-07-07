import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ImageCard from './ImageCard_HC5';
import './ImageCards.css';

const ShowImageCards = ({ cardsData }) => {
  const [cards, setCards] = useState();

  useEffect(() => {
    const allCards = [];

    cardsData?.forEach((card) => {
      allCards.push(...card.cards);
    });

    setCards(allCards);
  }, [cardsData]);

  return (
    <div className="image-cards-container">
      {
        (cards === undefined) ? ''
          : (
            cards.map((card) => {
              const {
                url,
                name,
                bg_image: { image_url: bgImageUrl },
              } = card;
              return (
                <ImageCard
                  url={url}
                  key={name}
                  bgImageUrl={bgImageUrl}
                />
              );
            })
          )
      }
    </div>

  );
};

ShowImageCards.propTypes = {
  cardsData: PropTypes.array,
};

export default ShowImageCards;
