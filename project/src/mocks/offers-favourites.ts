import IOffer from "../interfaces/IOffer";

export const offersFavourites: IOffer[] = [
  {
    id: 2,
    name: 'Wonderful apartment',
    price: 120,
    premium: false,
    mainImageSrc: 'img/apartment-02.jpg',
    category: 'Apartment',
    city: 'Amsterdam',
  },
  {
    id: 3,
    name: 'Flat next to the center',
    price: 90,
    premium: true,
    mainImageSrc: 'img/apartment-03.jpg',
    category: 'Apartment',
    city: 'Amsterdam',
  },
  {
    id: 6,
    name: 'Art hotel',
    price: 180,
    premium: true,
    mainImageSrc: 'img/apartment-01.jpg',
    category: 'Apartment',
    city: 'Cologne',
  },
  {
    id: 7,
    name: 'Camping in the woods',
    price: 50,
    premium: false,
    mainImageSrc: 'img/apartment-02.jpg',
    category: 'Hotel',
    city: 'Cologne',
  }
];
