export default interface IOffer {
  id: number,
  name: string,
  price: number,
  premium: boolean,
  mainImageSrc: string,
  rating: number,
  category: string,
  city: string,
  favourite: boolean,
  bedrooms: number,
  maxPeople: number,
}