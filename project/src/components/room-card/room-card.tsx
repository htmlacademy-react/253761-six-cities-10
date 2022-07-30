import { Link } from 'react-router-dom';
import cn from 'classnames';

import Offer from '../../interfaces/IOffer';

type RoomCardProps = {
  offer: Offer,
  changeActiveCard: (id: number) => void
};

function RoomCard({ offer, changeActiveCard }: RoomCardProps): JSX.Element {
  const btnFavouritesClasses = {
    'place-card__bookmark-button': true,
    'place-card__bookmark-button--active': offer.isFavorite,
    'button': true
  };

  const ratingPercent: number = offer.rating / 5 * 100;

  return (
    <article
      className="cities__card place-card"
      onMouseOver={() => changeActiveCard(offer.id) }
    >
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={cn(btnFavouritesClasses)} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingPercent}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <Link to={`offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default RoomCard;
