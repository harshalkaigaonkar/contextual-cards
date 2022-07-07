import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BigCard from './BigCard_HC3';

const ShowBigCards = ({ cardsData }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData?.[0].cards);
  }, [cardsData]);


  return (
    <div>
      {
        (cards === undefined) ? <p style={{ textAlign: 'center', marginTop: '40vh' }}>Loading the Data...</p>
          : (
            cards.map((card) => {
              const {
                name,
                title,
                formatted_title: formattedTitle,
                formatted_description: formattedDescription,
                description,
                bg_image: bgImage,
                bg_color,
                url,
                cta,
              } = card;
              return (
                <BigCard
                  title={title}
                  formattedTitle={formattedTitle}
                  description={description}
                  formattedDescription={formattedDescription}
                  bgColor={bg_color}
                  bgImage={bgImage}
                  cta={cta}
                  url={url}
                  key={name}
                />
              );
            })
          )
      }
    </div>
  );
};

ShowBigCards.propTypes = {
  cardsData: PropTypes.array,
};

export default ShowBigCards;
