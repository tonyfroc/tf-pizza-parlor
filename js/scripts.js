// Business Logic 

function Pizza(size, type, meatTopping, vegTopping, price) {
  this.size = size;
  this.type = type; 
  this.meatTopping = meatTopping;
  this.vegTopping = vegTopping;
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
        this.price += 1;

  if (this.meatTopping === 'bacon' || this.meatTopping === 'sausage' || this.meatTopping === 'meatballs' || this.meatTopping === `pepperoni` || this.meatTopping === `prosciutto`) {
        this.price += 2.50
  }
  if (this.vegTopping === 'mushrooms' || this.vegTopping === 'peppers' || this.vegTopping === 'onions' || this.vegTopping === 'baby spinach' || this.vegTopping === 'artichoke') {
        this.price += 1.50
        return this.price
  }
}


// UI Logic 

  $(document).ready(function(){
    $("button").click(function(event){
      let size = $('#pizza-size').find(":selected").val();
      let type = $('#pizza-type').find(":selected").val();
      let meatTop = $("input[name='optradio meat']:checked").val();
      let vegTop = $("input[name='optradio1 veg']:checked").val();
      let newPizza = new Pizza(size, type, meatTop, vegTop);
      let price = `$${newPizza.calcPrice()}`;
      $('.pizza-overview').text(`You ordered a ${size}, ${type} pizza with ${meatTop} and ${vegTop}.`)
      $('.pizza-price').text(`Pizza Total: ${price}`)
      $("form")[0].reset();
      event.preventDefault();
    });
  });




