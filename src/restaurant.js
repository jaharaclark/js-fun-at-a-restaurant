function createRestaurant(restaurantName) {
  return {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  };
};


function addMenuItem (nameOfRestaurant, choice) {
  if (nameOfRestaurant.menus[choice.type].includes(choice) === false ) {
    nameOfRestaurant.menus[choice.type].push(choice)
  }
};

function  removeMenuItem(nameOfRestaurant, lostItem, mealType){
  var searchForItem = nameOfRestaurant.menus[mealType].indexOf(lostItem);
  for (var i = 0; i < nameOfRestaurant.menus[mealType].length; i++) {
    if (nameOfRestaurant.menus[mealType][i].name === lostItem) {
      nameOfRestaurant.menus[mealType].splice(searchForItem, 1);
    }
  }
  return `Sorry, we don't sell ${lostItem}, try adding a new recipe!`
};



module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
