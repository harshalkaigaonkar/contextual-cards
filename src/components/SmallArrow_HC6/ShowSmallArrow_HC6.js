import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import SmallArrow from './SmallArrow_HC6';

const ShowSmallArrow = ({ cardsData }) => {
  const [cards, setCards] = useState();

  useEffect(() => {
    setCards(cardsData?.[0].cards);
  }, [cardsData]);

  return (
    <div>
      {
        (cards === undefined) ? ""
          : (
            cards.map((card) => {
              const {
                title,
                formatted_title,
                name,
                icon,
                url,
              } = card;

              return (
                <SmallArrow
                  title={title}
                  formattedTitle={formatted_title}
                  icon={icon}
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

ShowSmallArrow.propTypes = {
  cardsData: PropTypes.array,
};

export default ShowSmallArrow;
