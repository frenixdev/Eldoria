import { AllImages } from "./AllImages";
export interface CardData {
  id: string;
  title: string;
  price: number | GLfloat;
  img: string;
  stars: number;
  totalRating: number;
  isLiked: boolean
}

export const bestSeller: CardData[] = [


  {
    id: "sweatshirt",
    title: "Cotton SweatShirt",
    price: 40.5,
    img: AllImages.cottonSweatshirt,
    stars: 4,
    totalRating: 453,
    isLiked: false

  },
  {
    id: "casualCorduroy",
    title: "Casual Corduroy",
    price: 40.5,
    img: AllImages.casualCorduroy,
    stars: 3,
    isLiked: false,
    totalRating: 453,
  },
  {
    id: "knitsweater",
    title: "Knit Sweater",
    price: 40.5,
    img: AllImages.knitSweater,
    stars: 5,
    isLiked: false,
    totalRating: 453,
  },
  {
    id: "fusionshirt",
    title:"Fusion Shirt",
    price: 40.5,
    img: AllImages.fushionShirt,
    stars: 3,
    isLiked: false,
    totalRating: 453,
  },
  {
    id: "ordinaryshirt",
    title: "Ordinary Shirt",
    price: 40.5,
    img: AllImages.ordinayShirt,
    stars: 5,
    isLiked: false,
    totalRating: 453,
  },
    {
    id: "baggy",
    title: "Baggy Jeans",
    price: 40.5,
    img: AllImages.baggyJeans,
    stars: 4,
    totalRating: 453,
    isLiked: false
  }
];

export const mustHaves: CardData[] = [
  {
    id: "casualshirt",
    title: "Casual Shirt",
    price: 40.5,
    img: AllImages.casualShirt,
    stars: 4,
    isLiked: false,
    totalRating: 453,
  },
  {
    id: "sheinshirt",
    title: "Shein Shirt",
    price: 40.5,
    img: AllImages.sheinShirt,
    stars: 4,
    isLiked: false,
    totalRating: 453,
  },
  {
    id: "floraltribal",
    title: "Floral Tribal",
    price: 40.5,
    img: AllImages.openWave,
    stars: 3,
    isLiked: false,
    totalRating: 453,
  },
  {
    id: "bambooleafprint",
    title: "Bamboo Art",
    price: 40.5,
    img:AllImages.bambooArt,
    stars: 5,
    isLiked: false,
    totalRating: 453,
  },
  {
    id: "springAndSummer",
    title: "Spring and Summer",
    price: 40.5,
    img: AllImages.springAndSummer,
    stars: 5,
    isLiked: false,
    totalRating: 453,
  },
  {
    id: "fashionPrint",
    title: "Fashion Print",
    price: 40.5,
    img: AllImages.fashionPrint,
    stars: 5,
    isLiked: false,
    totalRating: 453,
  },
];
