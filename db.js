const cafeProduct = require("./data/cafeproduct.json");
const fooddrinks = require("./data/fooddrink.json");
const tour = require("./data/tour.json");
const tour = require("./data/foods.json");


module.exports = {
  cafeProduct,
  fooddrinks,
  tour,
  foods
}


// const items = require("./data/items");

// module.exports = () => {

//   var tags = items.map((i) => i.tags);
//   tags = [].concat.apply([], tags);
//   tags = [...new Set(tags)];

 

//   var brands = items.map((i) => i.manufacturer);
//   brands = [...new Set(brands)];

//   var itemTypes = items.map((i) => i.itemType);
//   itemTypes = [...new Set(itemTypes)];

//   return {
//     items,
//     tags,
//     brands,
//     itemTypes,
//   };
// };
