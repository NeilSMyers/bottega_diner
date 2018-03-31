var random = require('random');

const breakfastEntrees = {'Pancakes':5, 'Waffles':5, 'Omelette':5, 'Biscuits & Gravy':7, 'Breakfast Burger':10};
const breakfastSides = {'Eggs':2, 'Bacon':3, 'Sausage':3, 'Hashbrowns':3, 'Toast':1};
const lunchEntrees = {'Sandwich':5, 'Burger':5, 'Chicken':6, 'Spaghetti':7, 'Salad':6};
const lunchSides = {'Fries':2, 'Soup':5, 'Rolls':1, 'Mac & Cheese':3, 'Onion Rings':4};
const dinnerEntrees = {'Sandwich':6, 'Burger':6, 'Chicken':7, 'Spaghetti':8, 'Salad':7};
const dinnerSides = {'Fries':3, 'Soup':6, 'Rolls':2, 'Mac & Cheese':4, 'Onion Rings':5};
const order = [6,7,8,9,10,11,12,13];
const total = order[Math.floor(Math.random()*order.length)];

function tellUserTotal() {
  console.log('Your total is: $${total}');
  console.log('Thank you for eating at The Bottega Diner.');
}
function waitressComments() {
  comments = ['Wow, good choices!', 'Mmm, that\'s my favorite!', 'Those go really good together', 'I think you\'ll really like that!'];
  console.log (random.choice(list(comments)));
  console.log(tellUserTotal());
}
function customerOrder() {
  console.log('Please select one entree and two sides.');
  console.log('Entree:');
  input('');
  console.log('Side One:');
  input('');
  console.log('Side Two');
  input('');
  console.log(waitressComments());
}

function breakfastMenu() {
  console.log('Breakfast Menu:');
  console.log('Entrees:');
  console.log(breakfastEntrees);
  console.log('Sides:');
  console.log(breakfastSides);
  console.log(customerOrder());

function lunchMenu() {
  console.log('Lunch Menu:');
  console.log(lunchEntrees);
  console.log(lunchSides);
  console.log(customerOrder());
}
function dinnerMenu() {
  console.log('Dinner Menu:');
  console.log(dinnerEntrees);
  console.log(dinnerSides);
  console.log(customerOrder());

// welcome
}
function menuChoice() {
  console.log('Hello! Welcome to The Bottega Diner!');
  console.log('Which menu would you like to see?');
  choice = input('');
  if (choice == 'Breakfast' || choice == 'breakfast') {
    console.log (breakfastMenu());
  } else if (choice == 'Lunch' || choice == 'lunch') {
    console.log (lunchMenu());
  } else if (choice == 'Dinner' || choice == 'dinner') {
    console.log (dinnerMenu());
  }else
    console.log('Invalid Choice, Please choose again.');

console.log(menuChoice());
  }
}