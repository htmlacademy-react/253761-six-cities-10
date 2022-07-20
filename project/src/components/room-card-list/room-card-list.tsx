import Offer from '../../interfaces/Offer';

import RoomCard from '../room-card/room-card';

type RoomCardListProps = {
  offers: Offer[]
};

function RoomCardList({ offers }: RoomCardListProps): JSX.Element {
  { console.log(offers) }
  return (
    <>
      { offers.map((offer) => {
        return <RoomCard key={offer.id} offer={offer} />
      }) }
    </>
  );
}

export default RoomCardList;
