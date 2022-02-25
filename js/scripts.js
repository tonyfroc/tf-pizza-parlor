function Pizza(size, type, meatTopping, vegTopping, price) {
  this.size = size;
  this.type = type; 
  this.meatTopping = meatTopping;
  this.price = 0;
}


Pizza.prototype.calcPrice = function () { 
  if (this.size === 'small') {
    this.price += 10;
  } else if 
    (this.size === 'medium') {
      this.price += 15;
    } else if 
    (this.size === 'large')
    this.price += 20;
    return this.price;
  } 

  const myPizza = new Pizza('medium', 'type', 'bacon', 'mushrooms');

  console.log(myPizza.calcPrice());
