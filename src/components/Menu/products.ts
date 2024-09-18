//chicken
import MixedChickenImage from "../../images/png-transparent-church-s-chicken-fried-chicken-wrap-hot-chicken-crispy-food-recipe-chicken-meat-removebg-preview.png"
import Wings from "../../images/wings-removebg-preview1.png";
import HotWings from "../../images/hotwingss-removebg-preview.png"
import Tender from "../../images/tenderr-removebg-preview.png"
//burgers
import BurgerImage from "../../images/fatburger_0001_DoubleFatCheese-541x633-removebg-preview.png"
import BurgerImage2 from "../../images/chickenburger-removebg-preview.png"
import BurgerImage3 from "../../images/cheeseburger2-removebg-preview.png"
import Philly from "../../images/phillycheese-removebg-preview.png"
import Fishsandwich from "../../images/fishsandwich-removebg-preview.png"
import Eggbaconburger from "../../images/omelette_burger-removebg-preview.png"
//pizzas
import Chicken from "../../images/spicy.png"
import Vegeterian from "../../images/vegeterian.png"
import Cheese from "../../images/cheesepizza-removebg-preview.png"
import Bologne from "../../images/bologn.png"
import Peperoni from "../../images/pepperoni-removebg-preview.png"
//sea food
import Shrimp from "../../images/shrimps-removebg-preview.png"
import Tilapia from "../../images/tilapia-removebg-preview.png"
import Whitning from "../../images/whitning-removebg-preview.png"
//fries
import FrenchFries from "../../images/french-fries-removebg-preview.png"
import CheeseFries from "../../images/cheese_french_fries-removebg-preview.png"
import OnRings from "../../images/onion-rings-2-removebg-preview.png"
//extra meal
import MozSticks from "../../images/mozzarella-sticks-removebg-preview.png"
import MashedPotatoe from "../../images/mashedpotatoe-removebg-preview.png"
import Jalapeno from "../../images/jalapeno-removebg-preview.png"
import ChickenLoadedFries from "../../images/mix-removebg-preview.png"
//deserts
import CheeseCake from "../../images/cheesecake-removebg-preview.png"
import Brownie from "../../images/brownie-removebg-preview.png"


export interface Product {
  id: number;
  name: string;
  image: string;
  price: {
    [key: string]: string;
  };
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Mixed Chicken",
    image: MixedChickenImage,
    price:{
        "2 pcs": "$6",
        "3 pcs": "$9",
        "5 pcs": "$11",
        "9 pcs": "$16",
        "15 pcs": "$26",
        "20 pcs": "$35",
    },
    category: "Fried chicken"
  },
  {
    id: 2,
    name: "Chicken wings", 
    image: Wings,
    price:{
        "3 pcs" : "$6",
        "6 pcs" : "$11",
        "10 pcs" : "$16",
        "15 pcs" : "$22",
        "20 pcs" : "$25",
    },
    category: "Fried chicken"
  },
  {
    id: 3,
    name: "Hot wings", 
    image: HotWings,
    price:{
        "6 pcs" : "$10",
        "10 pcs" : "$15",
        "15 pcs" : "$22",
        "20 pcs" : "$30",
    },
    category: "Fried chicken"
  },
  {
    id: 4,
    name: "Tender special", 
    image: Tender,
    price:{
        "3 pcs" : "$6",
        "8 pcs" : "$15",
        "10 pcs" : "$18",
    },
    category: "Fried chicken"
  },
  {
    id: 5,
    name: "Double Bacon Cheese Burger", 
    image: BurgerImage,
    price:{
        "Only" : "$8",
        "Combo" : "$10",
    },
    category: "Burgers"
  },
  {
    id: 6,
    name: "Papperoni", 
    image: Peperoni,
    price:{
        "Small" : "$11",
        "Medium" : "$14",
        "Large" : "$17",
        "Extra Large" : "$19",
    },
    category: "Pizzas"
  },
  {
    id: 7,
    name: "Chicken Sandwich", 
    image: BurgerImage2,
    price:{
      "Only" : "$6",
      "Combo" : "$8",
    },
    category: "Burgers"
  },
  {
    id: 8,
    name: "Cheese Burger", 
    image: BurgerImage3,
    price:{
      "Only" : "$6",
      "Combo" : "$8",
    },
    category: "Burgers"
  },
  {
    id: 9,
    name: "Philly Sandwich", 
    image: Philly,
    price:{
      "Only" : "$8",
      "Combo" : "$10",
    },
    category: "Burgers"
  },
  {
    id: 10,
    name: "Fish Sandwich",  
    image: Fishsandwich,
    price:{
      "Combo" : "$10",
    },
    category: "Burgers"
  },
  {
    id: 11,
    name: "Egg bacon cheese burger",  
    image: Eggbaconburger,
    price:{
      "Only" : "$7",
    },
    category: "Burgers"
  },
  {
    id: 12,
    name: "Vegeterian",  
    image: Vegeterian,
    price:{
      "Small" : "$10",
      "Medium" : "$13",
      "Large" : "$15",
      "Extra Large" : "$19",
    },
    category: "Pizzas"
  },
  {
    id: 13,
    name: "Cheese",  
    image: Cheese,
    price:{
      "Small" : "$6",
      "Medium" : "$9",
      "Large" : "$12",
      "Extra Large" : "$14",
    },
    category: "Pizzas"
  },
  {
    id: 14,
    name: "Spicy Chicken",  
    image: Chicken,
    price:{
      "Small" : "$12",
      "Medium" : "$5",
      "Large" : "$18",
      "Extra Large" : "$21",
    },
    category: "Pizzas"
  },
  {
    id: 15,
    name: "Bolognese",  
    image: Bologne,
    price:{
      "Small" : "$10",
      "Medium" : "$12",
      "Large" : "$16",
      "Extra Large" : "$21",
    },
    category: "Pizzas"
  },
  {
    id: 16,
    name: "Shrimp",  
    image: Shrimp,
    price:{
      "6 pcs" : "$12",
      "9 pcs" : "$16",
      "12 pcs" : "$20",
      "17 pcs " : "$30",
    },
    category: "Sea food"
  },
  {
    id: 17,
    name: "Tilapia Fish",  
    image: Tilapia,
    price:{
      "2 pcs" : "$8",
      "3 pcs" : "$12",
    },
    category: "Sea food"
  },
  {
    id: 18,
    name: "Whitning Fish",  
    image: Whitning,
    price:{
      "2 pcs" : "$8",
      "3 pcs" : "$12",
    },
    category: "Sea food"
  },
  {
    id: 19,
    name: "Mozzarella sticks",  
    image: MozSticks,
    price:{
      "6 pcs" : "$8",
      "9 pcs" : "$12",
      "12 pcs" : "$12",
      "17 pcs" : "$12",
    },
    category: "Extra meal"
  },
  {
    id: 20,
    name: "French Fries",  
    image: FrenchFries,
    price:{
      "Small" : "$2.50",
      "Large" : "$4.50",
    },
    category: "Fries"
  },
  {
    id: 21,
    name: "Cheese French Fries",  
    image: CheeseFries,
    price:{
      "Small" : "$3.50",
      "Large" : "$5.50",
    },
    category: "Fries"
  },
  {
    id: 22,
    name: "Onion Rings",  
    image: OnRings,
    price:{
      "Small" : "$4",
      "Large" : "$6",
    },
    category: "Fries"
  },
  
  {
    id: 23,
    name: "Mashed potatoe",  
    image: MashedPotatoe,
    price:{
      "Regular" : "$2",
    },
    category: "Extra meal"
  },
  {
    id: 24,
    name: "Jalapeno peppers",  
    image: Jalapeno,
    price:{
      "5 pcs" : "$4",
      "10 pcs" : "$8",
    },
    category: "Extra meal"
  },
  {
    id: 25,
    name: "Cheese cake",  
    image: CheeseCake,
    price:{
      "1 pcs" : "$3",
    },
    category: "Deserts"
  },
  {
    id: 26,
    name: "Brownie",  
    image: Brownie,
    price:{
      "1 pcs" : "$2",
    },
    category: "Deserts"
  },
  {
    id: 26,
    name: "Chicken loaded fries",  
    image: ChickenLoadedFries,
    price:{
      "Regular" : "$8",
    },
    category: "Extra meal"
  },
];
