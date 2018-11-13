var recipes = { quiche: 'eggs' }

var newRecipe = Object.assign({}, recipes)

newRecipe
console.log(newRecipe);

delete newRecipe.quiche ;

newRecipe
 console.log(newRecipe);
recipes 
console.log(recipes);
