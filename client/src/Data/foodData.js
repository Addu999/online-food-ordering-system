import burgerKing from "../assets/restaurants/burger-king.jpg";
import mcdonalds from "../assets/restaurants/mcdonalds.jpg";
import kfc from "../assets/restaurants/kfc.jpg";
import dominos from "../assets/restaurants/dominos.jpg";
import pizzahut from "../assets/restaurants/pizzahut.jpg";
import ccd from "../assets/restaurants/ccd.jpg";

const foodData = [
  {
  id: 1,
  name: "Burger King",
  category: "Burger",
  price: 199,
  image: burgerKing,
},
  {
    id: 2,
    name: "McDonald's",
    category: "Burger",
    image: mcdonalds
  },
  {
    id: 3,
    name: "KFC",
    category: "Burger",
    image: kfc
  },
  {
    id: 4,
    name: "Domino's",
    category: "Burger",
    image: dominos
  },
  {
    id: 5,
    name: "Cafe Coffee Day",
    category: "Burger",
    image: ccd
  },

  {
    id: 6,
    name: "Pizza Hut",
    category: "Pizza",
    
    image: pizzahut
  },

 

];

export default foodData;
console.log(foodData.length);