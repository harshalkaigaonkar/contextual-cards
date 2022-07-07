import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import SmallCardNoArrow from './SmallNoArrow_HC1';
import './SmallCardsNoArrow.css';

const ShowNoArrow = ({ cardsData }) => {
  const [scrollableCards, setScrollableCards] = useState();
  const [nonScrollableCards, setNonScrollableCards] = useState();

  useEffect(() => {
    setScrollableCards(cardsData?.scrollable);
    setNonScrollableCards(cardsData?.nonScrollable);
  }, [cardsData]);

  return (
    <div className="small-cards-no-arrow">
      <div className="small-cards-no-arrow__scrollable">
        {
          (scrollableCards === undefined) ? ''
            : (
              scrollableCards.map((card) => {
                const {
                  title,
                  formatted_title: { text: formattedTitle },
                  name,
                  icon: { image_url: imageUrl },
                  url,
                  bg_color,
                } = card;
                return (
                  <SmallCardNoArrow
                    key={name}
                    title={title || formattedTitle}
                    imageUrl={imageUrl}
                    url={url}
                    bgColor={bg_color}
                    isScrollable={true}
                  />
                );
              })
            )
        }
      </div>

      <div className="small-cards-no-arrow__non-scrollable">
        {
          (nonScrollableCards === undefined) ? ''
            : (
              nonScrollableCards.map((card) => {
                const {
                  title,
                  formatted_title: { text: formattedTitle },
                  name,
                  icon: { image_url: imageUrl },
                  url,
                  bg_color,
                } = card;
                return (
                  <SmallCardNoArrow
                    key={name}
                    title={title || formattedTitle}
                    imageUrl={imageUrl}
                    url={url}
                    bgColor={bg_color}
                    isScrollable={false}
                  />
                );
              })
            )
        }
      </div>

    </div>
  );
};

ShowNoArrow.propTypes = {
  cardsData: PropTypes.shape({
    scrollable: PropTypes.array.isRequired,
    nonScrollable: PropTypes.array.isRequired,
  }),
};

export default ShowNoArrow;
