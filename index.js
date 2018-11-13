var recipes = { quiche: 'eggs' }
 
var newRecipe = Object.assign({}, recipes)
 
newRecipe 
console.log(newRecipe); 
 
delete newRecipe.quiche // true
 
newRecipe 
 console.log(newRecipe);
recipes // { foo: 'bar' }
console.log(recipes); 
