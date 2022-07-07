import { useEffect, useState } from 'react';

//importing stylesheets
import './css/App.css';

import PullToRefresh from 'react-simple-pull-to-refresh';

//importing different components
import Header from './components/Header/header';
import ShowBigCards from './components/BigCard_HC3/ShowBigCards_HC3';
import ShowDynamicCards from './components/DynamicCard_HC9/ShowDynamicCards_HC9';
import ShowSmallArrow from './components/SmallArrow_HC6/ShowSmallArrow_HC6';
import ShowImageCards from './components/ImageCard_HC5/ShowImageCards_HC5';
import ShowNoArrow from './components/SmallNoArrow_HC1/ShowNoArrow_HC1';

// importing function for fetching data
import dataFiltered from './data/dataFiltered';

const App = () => {
  const [Refresh, setRefresh] = useState(false);
  const [bigDisplayCards, setBigDisplayCards] = useState();
  const [smallCardsArrow, setSmallCardsArrow] = useState();
  const [imageCards, setImageCards] = useState();
  const [dynamicWidthCards, setDynamicWidthCards] = useState();
  const [smallCardsNoArrow, setSmallCardsNoArrow] = useState();

  useEffect(() => {
    dataFiltered().then((data) => {
      setBigDisplayCards(data.bigDisplayCards);
      setSmallCardsArrow(data.smallCardsArrow);
      setImageCards(data.imgCards);
      setDynamicWidthCards(data.dynamicWidthCards);
      setSmallCardsNoArrow(data.smallCardsNoArrow);
    });
  }, [Refresh]);

  const refresher = () => {
    // this updates the refresh value opposite to its current value
    // due to this the dom gets updated
    const currentValue = Refresh;
    setRefresh(!currentValue);
  };

  return (
    <>
      <Header />
      <div className="main-container">
        <PullToRefresh onRefresh={refresher} pullingContent=""> {/* pullingContent specifies content to display while refresher is triggered*/}
          <ShowBigCards cardsData={bigDisplayCards} />
          <ShowSmallArrow cardsData={smallCardsArrow} />
          <ShowImageCards cardsData={imageCards} />
          <ShowDynamicCards cardsData={dynamicWidthCards} />
          <ShowNoArrow cardsData={smallCardsNoArrow} />
        </PullToRefresh>
      </div>
    </>

  );
};

export default App;
