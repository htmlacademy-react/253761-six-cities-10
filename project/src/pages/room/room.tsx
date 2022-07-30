import { useParams } from 'react-router-dom';
import IOffer from '../../interfaces/IOffer';
import { reviews } from '../../mocks/reviews';
import cn from 'classnames';
import { cities } from '../../mocks/cities';

import RoomForm from '../../components/room-form/room-form';
import NotFound from '../not-found/not-found';
import Header from '../../components/header/header';
import ReviewList from '../../components/review-list/review-list';
import Map from '../../components/map/map';
import RoomCardList from '../../components/room-card-list/room-card-list';

const NEARBY_OFFERS_COUNT = 3;

type RoomProps = {
  offers: IOffer[]
};

function Room({ offers }: RoomProps): JSX.Element {
  const id = Number(useParams().id);
  const room = offers.find((item) => item.id === id);
  if (!room) {
    return <NotFound />;
  }

  const btnFavouritesClasses = {
    'property__bookmark-button': true,
    'property__bookmark-button--active': room.isFavorite,
    'button': true
  };

  const ratingPercent: number = room.rating / 5 * 100;

  const nearByOffers: IOffer[] = offers
    .filter((offer) => offer.id !== id)
    .slice(0, NEARBY_OFFERS_COUNT);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {room.images.map((src) => (
                <div className="property__image-wrapper" key={src}>
                  <img className="property__image" src={src} />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {room.isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  { room.title }
                </h1>
                <button className={cn(btnFavouritesClasses)} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${ratingPercent}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{ room.rating }</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  { room.type }
                </li>
                <li className="property__feature property__feature--bedrooms">
                  { room.bedrooms } Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max { room.maxAdults } adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{ room.price }</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {room.goods.map((good) => (
                    <li className="property__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    Angelina
                  </span>
                  <span className="property__user-status">
                    Pro
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              {reviews &&
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  <ReviewList reviews={reviews} />
                  <RoomForm />
                </section>}
            </div>
          </div>
          <section className="property__map map container">
            <Map city={cities[0]} offers={nearByOffers} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <RoomCardList offers={nearByOffers} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Room;
