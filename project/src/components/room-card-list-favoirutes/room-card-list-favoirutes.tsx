import Offer from '../../interfaces/IOffer';

import RoomCardFavourites from '../room-card-favourites/room-card-favourites';

type RoomCardListFavouritesProps = {
  offers: Offer[]
};

function RoomCardListFavourites({ offers }: RoomCardListFavouritesProps): JSX.Element {
  const offersFavourites = offers.filter((item) => {
    return item.favourite === true;
  });

  return (
    <div className="favorites__places">
      { offersFavourites.map((offer) => {
        return <RoomCardFavourites key={offer.id} offer={offer} />
      }) }
    </div>
  );
}

export default RoomCardListFavourites;
