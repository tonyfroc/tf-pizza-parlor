function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

const myPizza = new Pizza("small", "bacon");
console.log(myPizza);