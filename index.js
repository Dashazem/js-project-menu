import moment from "https://esm.sh/moment";

const menu = {
  mainMenu: {
    breakfast: {
      'pancakes': {
        price: 7,
        comment: "Our fluffy pancakes are a customer favorite!",
        type: {
          'with chocolate topping': 2,
          'with honey': 3,
          'with jam': 3,
        }
      },
      'omelette': {
        price: 10,
        comment: "You can't go wrong with our customizable omelette."
      },
      'waffles': {
        price: 8,
        comment: "Indulge in our delicious waffles with syrup and fresh fruit.",
        type: {
          'with fresh fruit and chocolate': 4,
          'with nuts and honey': 4,
          'with jam': 3,
        }
      },
      'french toast': {
        price: 9,
        comment: "Enjoy our golden brown French toast with a sprinkle of powdered sugar."
      },
      'breakfast burrito': {
        price: 11,
        comment: "Start your day off right with our hearty breakfast burrito."
      },
      'avocado toast': {
        price: 12,
        comment: "Try our trendy avocado toast topped with cherry tomatoes and feta cheese."
      },
      'eggs benedict': {
        price: 13,
        comment: "Treat yourself to eggs Benedict with a silky smooth hollandaise sauce."
      },
      'fruit parfait': {
        price: 6,
        comment: "For a lighter option, enjoy our refreshing fruit parfait with yogurt and granola.",
        type: {
          'extra mango': 6,
          'extra pineapple': 5,
          'double yogurt': 4,
        }
      }
    },
    lunch: {
      'steak': {
        price: 20,
        comment: "Treat yourself to our perfectly cooked steak dinner.",
        type: {
          'rare': 1,
          'medium rare': 1,
          'medium': 2,
          'medium well': 2,
          'well done': 3,
        }
      },
      'pasta': {
        price: 15,
        comment: "Our homemade pasta will delight your taste buds.",
        type: {
          'with double cheese': 4,
          'with marinara souce': 2,
          'with alfredo souce': 2,
          'with pesto souce': 2,
        }
      },
      'salmon': {
        price: 17,
        comment: "Enjoy our deliciously seasoned salmon with a side of roasted vegetables.",
        type: {
          'grilled': 2,
          'blackened': 3,
          'poached': 2,
          'backed': 4,
        }
      },
      'chicken marsala': {
        price: 16,
        comment: "Indulge in our flavorful chicken Marsala served with creamy mashed potatoes."
      },
      'risotto': {
        price: 18,
        comment: "Try our creamy and comforting risotto made with Arborio rice and seasonal veggies."
      },
      'pizza': {
        price: 11,
        comment: "Indulge in a slice of our cheesy pizza with your favorite toppings.",
        type: {
          'four cheese': 0,
          'margherita': 2,
          'hawaiian': 3,
          'pepperoni': 3,
          'veggie': 2,
        }
      },
      'beef stroganoff': {
        price: 18,
        comment: "Warm up with our rich and hearty beef stroganoff served over egg noodles."
      },
      'roasted chicken': {
        price: 16,
        comment: "Enjoy a comforting meal with our herb-roasted chicken served with mashed potatoes."
      },
      'vegetarian lasagna': {
        price: 14,
        comment: "Indulge in our cheesy and flavorful vegetarian lasagna, made with layers of fresh veggies."
      }
    },
    dinner: {
      'steak': {
        price: 22,
        comment: "Treat yourself to our perfectly cooked steak dinner.",
        type: {
          'rare': 1,
          'medium rare': 1,
          'medium': 2,
          'medium well': 2,
          'well done': 3,
        }
      },
      'pasta': {
        price: 17,
        comment: "Our homemade pasta will delight your taste buds.",
        type: {
          'with double cheese': 4,
          'with marinara souce': 2,
          'with alfredo souce': 2,
          'with pesto souce': 2,
        }
      },
      'salmon': {
        price: 19,
        comment: "Enjoy our deliciously seasoned salmon with a side of roasted vegetables.",
        type: {
          'grilled': 2,
          'blackened': 3,
          'poached': 2,
          'backed': 4,
        }
      },
      'chicken marsala': {
        price: 18,
        comment: "Indulge in our flavorful chicken Marsala served with creamy mashed potatoes."
      },
      'risotto': {
        price: 20,
        comment: "Try our creamy and comforting risotto made with Arborio rice and seasonal veggies."
      },
      'pizza': {
        price: 13,
        comment: "Indulge in a slice of our cheesy pizza with your favorite toppings.",
        type: {
          'four cheese': 0,
          'margherita': 2,
          'hawaiian': 3,
          'pepperoni': 3,
          'veggie': 2,
        }
      },
      'beef stroganoff': {
        price: 20,
        comment: "Warm up with our rich and hearty beef stroganoff served over egg noodles."
      },
      'roasted chicken': {
        price: 18,
        comment: "Enjoy a comforting meal with our herb-roasted chicken served with mashed potatoes."
      },
      'vegetarian lasagna': {
        price: 16,
        comment: "Indulge in our cheesy and flavorful vegetarian lasagna, made with layers of fresh veggies."
      }
    }
  },
  sidesMenu: {
    'fries': {
      price: 3,
      comment: "Our crispy fries are the perfect side dish."
    },
    'soup': {
      price: 4,
      comment: "Warm up with a bowl of our homemade soup."
    },
    'coleslaw': {
      price: 2,
      comment: "Refresh your palate with our tangy and crunchy coleslaw."
    },
    'garlic bread': {
      price: 3,
      comment: "Savor the flavor of our garlicky and buttery garlic bread."
    },
    'mashed potatoes': {
      price: 4,
      comment: "Indulge in our creamy and rich mashed potatoes, a classic favorite."
    },
    'side salad': {
      price: 5,
      comment: "Add a fresh side salad with your meal, topped with your choice of dressing."
    },
    'onion rings': {
      price: 5,
      comment: "Enjoy our crispy and golden onion rings, a satisfying side dish."
    },
    'grilled vegetables': {
      price: 6,
      comment: "Get your daily dose of veggies with our deliciously grilled vegetable medley."
    },
    'sweet potato fries': {
      price: 4,
      comment: "Satisfy your sweet tooth with our crispy and seasoned sweet potato fries."
    }
  }
};

const nonPersonalizedComments = [
  "Enjoy your meal!",
  "Bon appétit!",
  "Hope your food tastes as good as it smells!",
  "May your taste buds be delighted!",
  "Wishing you a delicious meal!",
  "Indulge in every bite!",
  "Savor each mouthful!",
  "Eat with joy and satisfaction!",
  "May your meal be a feast for the senses!",
  "Cheers to good food and good company!"
];


let previousComment = '';

const getRandomComment = () => {
  let randomIndex = Math.floor(Math.random() * nonPersonalizedComments.length);
  let randomComment = nonPersonalizedComments[randomIndex];

  if (randomComment === previousComment) {
    randomIndex = (randomIndex + 1) % nonPersonalizedComments.length;
  }
  
  previousComment = randomComment;
  return randomComment;
}

let total = 0;
let chosenType;

const getMealTime = () => {
  const currentTime = moment().format('HH:mm');

  if (moment(currentTime, 'HH:mm').isBetween(moment('00:00', 'HH:mm'), moment('12:00', 'HH:mm'))) {
    return 'breakfast';
  } else if (moment(currentTime, 'HH:mm').isBetween(moment('12:00', 'HH:mm'), moment('18:00', 'HH:mm'))) {
    return 'lunch';
  } else {
    return 'dinner';
  }
}

const userInput = prompt(`Welcome to our menu! Please choose a category:\n${Object.keys(menu.mainMenu).map(key => `• ${key}`).join('\n')}`, `${getMealTime()}`);

if (userInput.toLowerCase() && menu.mainMenu[userInput.toLowerCase()]) {
  const subMenu = menu.mainMenu[userInput.toLowerCase()];

  const entree = prompt(`This is our ${userInput.toLowerCase()} menu.\nEntrees:\n${Object.keys(subMenu).map(key => `• ${key} - $${subMenu[key].price}`).join('\n')}\nSide dishes:\n${Object.keys(menu.sidesMenu).map(key => `• ${key} - $${menu.sidesMenu[key].price}`).join('\n')}\n\nTo start your order, please choose an entree for your ${userInput}.`);

  if (entree.toLowerCase() && subMenu[entree.toLowerCase()]) {
    const selectedEntree = subMenu[entree.toLowerCase()];

    if (selectedEntree) {
      if (selectedEntree.type) {
        const type = selectedEntree.type;
        chosenType = prompt(`Please choose a type of your ${entree.toLowerCase()}:\n${Object.keys(type).map(key => `• ${key} - added cost: $${type[key]}`).join('\n')}\nIf you do not want to add any type - skip this step`);
        
        if (chosenType.toLowerCase() && !type[chosenType.toLowerCase()]) {
          alert("The type you specified is not recognized. Make sure you enter the type without spelling mistakes.\nSkipping type selection.");
          chosenType = '';
        } else if (chosenType.toLowerCase()) {
          const priceOfType = type[chosenType.toLowerCase()];
          alert(`You have selected ${entree} with a price of: $${selectedEntree.price} and the type chosen is: ${chosenType.toLowerCase()} with an added cost of: $${priceOfType}\n${selectedEntree.comment}\n${getRandomComment()}`);
          total += selectedEntree.price + priceOfType;
        } else {
          alert(`You have selected ${entree} with price: $${selectedEntree.price}\n${selectedEntree.comment}\n${getRandomComment()}`);

          total += selectedEntree.price;
        }
      } else {
        alert(`You have selected ${entree} with price: $${selectedEntree.price}\n${selectedEntree.comment}\n${getRandomComment()}`);
        chosenType = '';

        total += selectedEntree.price;
      }
    } 
    
    const firstSide = prompt(`Please choose a First side dish:\n${Object.keys(menu.sidesMenu).map(key => `• ${key} - $${menu.sidesMenu[key].price}`).join('\n')}`);

    if (firstSide.toLowerCase() && menu.sidesMenu[firstSide.toLowerCase()]) {
      const selectedFirstSide = menu.sidesMenu[firstSide.toLowerCase()];
      alert(`You have selected ${firstSide.toLowerCase()} with price: $${selectedFirstSide.price}\n${selectedFirstSide.comment}\n${getRandomComment()}`);

      total += selectedFirstSide.price;

      const secondSide = prompt(`Please choose a Second side dish:\n${Object.keys(menu.sidesMenu).map(key => `• ${key} - $${menu.sidesMenu[key].price}`).join('\n')}`);

      if (secondSide.toLowerCase() && menu.sidesMenu[secondSide.toLowerCase()]) {
        const selectedSecondSide = menu.sidesMenu[secondSide.toLowerCase()];

        alert(`You have selected ${secondSide.toLowerCase()} with price: $${selectedSecondSide.price}\n${selectedSecondSide.comment}\n${getRandomComment()}`);

        total += selectedSecondSide.price;
        alert(`Total price for your order: ${entree.toLowerCase()} ${chosenType.toLowerCase()}, ${firstSide.toLowerCase()}, ${secondSide.toLowerCase()} - $${total}`);

      } else {
        alert("Invalid selection of second side dish. The specified name of the dish is not on the menu. Make sure you enter the name without spelling mistakes. Please try again.");
      }
    } else {
      alert("Invalid selection of first side dish. The specified name of the dish is not on the menu. Make sure you enter the name without spelling mistakes. Please try again.");
    }  
  } else {
    alert("Invalid selection of entree. The specified name of the dish is not on the menu. Make sure you enter the name without spelling mistakes. Please try again.");
  }
} else {
  alert("Invalid category selected. Make sure you enter the name without spelling mistakes. Please try again.");
}