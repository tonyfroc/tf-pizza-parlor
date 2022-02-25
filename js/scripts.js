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

  if (this.type === 'deep dish') {
    this.price += 3;
  } else if 
    (this.type === 'thin crust') {
      this.price += 2;
    } else if 
    (this.type === 'classic') 
      this.price += 0;

  if (this.meatTopping === 'bacon' || this.meatTopping === 'sausage' || this.meatTopping === 'meatballs') {
    this.price += 2.50
    return this.price
  }
    } 

  const myPizza = new Pizza('medium', 'deep dish', 'bacon', 'mushrooms');

  console.log(myPizza.calcPrice());
