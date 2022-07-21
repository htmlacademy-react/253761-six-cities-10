import { useState } from 'react';
import Offer from '../../interfaces/IOffer';

import RoomCard from '../room-card/room-card';

type RoomCardListProps = {
  offers: Offer[]
};

function RoomCardList({ offers }: RoomCardListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState(0);

  const changeActiveCard = (id: number) : void=> {
    setActiveCardId(id);
  };

  return (
    <>
      { offers.map((offer) =>
        <RoomCard key={offer.id} offer={offer} changeActiveCard={changeActiveCard} />
      )}
    </>
  );
}

export default RoomCardList;
