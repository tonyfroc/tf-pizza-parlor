function Pizza(size, meatTopping, vegTopping) {
  this.size = size;
  this.meatTopping = meatTopping;
  this.vegTopping = vegTopping; 
}

const myPizza = new Pizza("small", 'bacon', 'mushrooms');
console.log(myPizza);