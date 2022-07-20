export default interface IOffer {
  id: number,
  name: string,
  price: number,
  premium: boolean,
  mainImageSrc: string,
  category: string,
  city: string
}