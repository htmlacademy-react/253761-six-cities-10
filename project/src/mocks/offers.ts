import IOffer from "../interfaces/IOffer";

export const offers: IOffer[] = [
  {
    id: 1,
    name: 'Beautiful & luxurious apartment at great location',
    price: 200,
    premium: true,
    mainImageSrc: 'img/apartment-01.jpg',
    category: 'Apartment',
    city: 'Amsterdam',
  },
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
    id: 4,
    name: 'Art hotel',
    price: 180,
    premium: true,
    mainImageSrc: 'img/apartment-01.jpg',
    category: 'Apartment',
    city: 'Amsterdam',
  },
  {
    id: 5,
    name: 'Camping in the woods',
    price: 50,
    premium: false,
    mainImageSrc: 'img/apartment-02.jpg',
    category: 'Camping',
    city: 'Amsterdam'
  }
];
