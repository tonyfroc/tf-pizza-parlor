function Pizza(size, type, meatTopping, vegTopping) {
  this.size = size;
  this.type = type; 
  this.meatTopping = meatTopping;
  this.vegTopping = vegTopping; 
}

const myPizza = new Pizza('small','deep dish','bacon','mushrooms');
console.log(myPizza);