import Offer from '../../interfaces/IOffer';

import RoomCardFavourites from '../room-card-favourites/room-card-favourites';

type RoomCardListFavouritesProps = {
  offers: Offer[]
};

function RoomCardListFavourites({ offers }: RoomCardListFavouritesProps): JSX.Element {
  const offersFavourites = offers.filter((item) =>
    item.isFavorite === true
  );

  return (
    <div className="favorites__places">
      { offersFavourites.map((offer) =>
        <RoomCardFavourites key={offer.id} offer={offer} />
      )}
    </div>
  );
}

export default RoomCardListFavourites;
