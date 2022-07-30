import IReview from '../../interfaces/IReview';

import ReviewItem from '../review-item/review-item';

type ReviewListProps = {
  reviews: IReview[]
};

function ReviewList({ reviews }: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) =>
        <ReviewItem key={review.id} review={review} />
      )}
    </ul>
  );
}

export default ReviewList;
