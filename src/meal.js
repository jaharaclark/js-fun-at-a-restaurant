function nameMenuItem(firstName) {
  return `Delicious ${firstName}`;
};
nameMenuItem("Pizza");


function createMenuItem(name, price, type) {
  var menuItem = {
  name: name,
  price: price,
  type: type,
  };
  return menuItem
};

function addIngredients(customerRequest, ingredients){
  if (ingredients.includes(customerRequest)) {
    return ingredients
  } else {
  return(ingredients.push(customerRequest));
};
};

function formatPrice(initialPrice) {
  return `$${initialPrice}`;
};

function decreasePrice(price) {
  return price * .9
};

function createRecipe(title, ingredients, type) {
    var recipe = {
    title: title,
    ingredients: ingredients,
    type: type,
  };
    return recipe
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
