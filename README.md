# Tony's Pizza Parlor

#### By Tony Froccaro

#### Tony's Pizza utilizing HTML, CSS, Javascript and jQuery

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery

## Description

## Tests

### Describe: Pizza()

Test 1: "The Pizza() function should return a Pizza object with two properties for size and toppings"
Code: const myPizza = new Pizza("small", "bacon")
Expected Output = Pizza {size: "small", toppings: "bacon"}

Test 2: "The Pizza() function should return a Pizza Object with three properties for size, meatTopping and vegTopping"
Code: const myPizza = new Pizza("small", "bacon", "mushrooms" )
Expected Output = Pizza {size: "small", meatTopping: "bacon", vegTopping: "mushrooms"}

Test 3: "The Pizza() function should return a Pizza Object with four properties for size, type, meatTopping and vegTopping"
Code: const myPizza = new Pizza("small", "deep dish", "bacon", "mushrooms" )
Expected Output = Pizza {size: "small", type: "deep dish", meatTopping: "bacon", vegTopping: "mushrooms"}

### Describe: calcPrice()

Test 1: "The calcPrice() function should return 15 for a medium sized pizza" 
Code: const myPizza.calcPrice() = new Pizza('medium', 'deep dish', 'bacon', 'mushrooms');
Expected Output = 15; 

Test 2: "The calcPrice() function should return 18 for a medium sized, deep dish pizza" 
Code: myPizza.calcPrice() = new Pizza('medium', 'deep dish', 'bacon', 'mushrooms');
Expected Output = 18; 

Test 3: "The calcPrice() function should return 20.5 for a medium sized, deep dish pizza with bacon" 
Code: myPizza.calcPrice() = new Pizza('medium', 'deep dish', 'bacon', 'mushrooms');
Expected Output = 20.5;

Test 4: "The calcPrice() function should return 22 for a medium sized, deep dish pizza with bacon and mushrooms" 
Code: const myPizza.calcPrice() = new Pizza('medium', 'deep dish', 'bacon', 'mushrooms');
Expected Output = 22;

## Setup/Installation Requirements

- Download git
- Navigate to your Desktop folder
- Make a folder to store the application files
- Navigate to https://github.com/tonyfroc/tf-pizza-parlor
- Select code, then copy the link below "Clone"
- In terminal type:
- `git init`
- `git clone https://github.com/tonyfroc/tf-pizza-parlor.git`
- `git remote add your_initials main https://github.com/tonyfroc/tf-pizza-parlor.git`
- `git push your_initials main`
- Download a text editor (preferably VSCode) and
- In terminal, type: `code .` and open the `index.html` in a web browser.

## Known Bugs


## License

_[MIT](https://opensource.org/licenses/MIT)_  
Copyright (c) 2022, Tony Froccaro