import IReview from '../interfaces/IReview';

export const reviews: IReview[] = [
  {
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'date': '2022-07-30T11:19:10.157Z',
    'id': 1,
    'rating': 4,
    'user': {
      'avatarUrl': 'img/avatar-angelina.jpg',
      'id': 1,
      'isPro': false,
      'name': 'Angelina'
    }
  },
  {
    'comment': 'Smth about Amsterdam.',
    'date': '2022-08-12T12:23:17.157Z',
    'id': 2,
    'rating': 3,
    'user': {
      'avatarUrl': 'img/avatar-max.jpg',
      'id': 2,
      'isPro': false,
      'name': 'Max'
    }
  }
];
