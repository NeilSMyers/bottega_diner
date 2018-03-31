import random

breakfast_entrees = {'Pancakes':5, 'Waffles':5, 'Omelette':5, 'Biscuits & Gravy':7, 'Breakfast Burger':10}
breakfast_sides = {'Eggs':2, 'Bacon':3, 'Sausage':3, 'Hashbrowns':3, 'Toast':1}
lunch_entrees = {'Sandwich':5, 'Burger':5, 'Chicken':6, 'Spaghetti':7, 'Salad':6}
lunch_sides = {'Fries':2, 'Soup':5, 'Rolls':1, 'Mac & Cheese':3, 'Onion Rings':4}
dinner_entrees = {'Sandwich':6, 'Burger':6, 'Chicken':7, 'Spaghetti':8, 'Salad':7}
dinner_sides = {'Fries':3, 'Soup':6, 'Rolls':2, 'Mac & Cheese':4, 'Onion Rings':5}
order = [6,7,8,9,10,11,12,13]
total = random.choice(list(order))

def tell_user_total():
  print(f'Your total is: ${total}')
  print('Thank you for eating at The Bottega Diner.')

def waitress_comments():
  comments = ["Wow, good choices!", "Mmm, that's my favorite!", "Those go really good together", "I think you'll really like that!"]
  print (random.choice(list(comments)))
  print(tell_user_total())

def customer_order():
  print('Please select one entree and two sides.')
  print("Entree:")
  input('')
  print("Side One:")
  input('')
  print("Side Two")
  input('')
  print(waitress_comments())

#menus
def breakfast_menu():
  print('Breakfast Menu:')
  print('Entrees:')
  print(breakfast_entrees)
  print('Sides:')
  print(breakfast_sides)
  print(customer_order())
  
def lunch_menu():
  print('Lunch Menu:')
  print(lunch_entrees)
  print(lunch_sides)
  print(customer_order())

def dinner_menu():
  print('Dinner Menu:')
  print(dinner_entrees)
  print(dinner_sides)
  print(customer_order())
  
# welcome

def menu_choice():
  print('Hello! Welcome to The Bottega Diner!')
  print('Which menu would you like to see?')
  choice = input('')
  if choice == 'Breakfast' or choice == 'breakfast':
    print (breakfast_menu())
  elif choice == 'Lunch' or choice == 'lunch':
    print (lunch_menu())
  elif choice == 'Dinner' or choice == 'dinner':
    print (dinner_menu())
  else: 
    print('Invalid Choice, Please choose again.')
    
print(menu_choice())