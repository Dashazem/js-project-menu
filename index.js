import moment from "https://esm.sh/moment";

const menu = {
  mainMenu: {
    breakfast: {
      'pancakes': {
        price: 7,
        comment: "Our fluffy pancakes are a customer favorite!",
      },
      'omelette': {
        price: 10,
        comment: "You can't go wrong with our customizable omelette."
      },
      'waffles': {
        price: 8,
        comment: "Indulge in our delicious waffles with syrup and fresh fruit.",
      },
      'french toast': {
        price: 9,
        comment: "Enjoy our golden brown French toast with a sprinkle of powdered sugar."
      },
      'avocado toast': {
        price: 12,
        comment: "Try our trendy avocado toast topped with cherry tomatoes and feta cheese."
      }
    },
    lunch: {
      'steak': {
        price: 20,
        comment: "Treat yourself to our perfectly cooked steak dinner.",
      },
      'pasta': {
        price: 15,
        comment: "Our homemade pasta will delight your taste buds.",
      },
      'salmon': {
        price: 17,
        comment: "Enjoy our deliciously seasoned salmon with a side of roasted vegetables.",
      },
      'risotto': {
        price: 18,
        comment: "Try our creamy and comforting risotto made with Arborio rice and seasonal veggies."
      },
      'pizza': {
        price: 11,
        comment: "Indulge in a slice of our cheesy pizza with your favorite toppings.",
      }
    },
    dinner: {
      'steak': {
        price: 22,
        comment: "Treat yourself to our perfectly cooked steak dinner.",
      },
      'pasta': {
        price: 17,
        comment: "Our homemade pasta will delight your taste buds.",
      },
      'salmon': {
        price: 19,
        comment: "Enjoy our deliciously seasoned salmon with a side of roasted vegetables.",
      },
      'risotto': {
        price: 20,
        comment: "Try our creamy and comforting risotto made with Arborio rice and seasonal veggies."
      },
      'pizza': {
        price: 13,
        comment: "Indulge in a slice of our cheesy pizza with your favorite toppings.",
      }
    }
  },
  sidesMenu: {
    firstSideDish: {
      'fries': {
        price: 3,
        comment: "Our crispy fries are the perfect side dish."
      },
      'side salad': {
        price: 5,
        comment: "Add a fresh side salad with your meal, topped with your choice of dressing."
      },
      'coleslaw': {
        price: 2,
        comment: "Refresh your palate with our tangy and crunchy coleslaw."
      },
      'mashed potatoes': {
        price: 4,
        comment: "Indulge in our creamy and rich mashed potatoes, a classic favorite."
      },
      'grilled vegetables': {
        price: 6,
        comment: "Get your daily dose of veggies with our deliciously grilled vegetable medley."
      }
    },
    secondSideDish: {
      'coke': {
        price: 2.5,
        comment: "Delicious and refreshing Coca-Cola for any time of the day."
      },
      'juice': {
        price: 4,
        comment: "Our fresh squeezed juices are packed with vitamins and flavor."
      },
      'lemonade': {
        price: 3.5,
        comment: "Cool off with our tangy and sweet lemonade."
      },
      'coffee': {
        price: 2.5,
        comment: "Start your day right with a cup of our rich and smooth coffee."
      },
      'tea': {
        price: 3,
        comment: "Relax with a warm cup of our soothing and aromatic teas."
      }
    }
  },
  dessertMenu: {
    'cake': {
      price: 6,
      comment: "Indulge in our decadent chocolate cake."
    },
    'ice cream': {
      price: 5,
      comment: "Cool down with our creamy ice cream."
    },
    'cookies': {
      price: 3,
      comment: "Our freshly baked cookies are a sweet treat."
    },
    'cheesecake': {
      price: 6,
      comment: "Try our creamy cheesecake for a delightful dessert."
    },
    'brownies': {
      price: 6,
      comment: "Satisfy your chocolate craving with our fudgy brownies."
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

let total = 0;
let validInput = false;

while (!validInput) {
  const userInput = prompt(`Welcome to our menu! Please choose a category:\n${Object.keys(menu.mainMenu).map(key => `• ${key}`).join('\n')}`, `${getMealTime()}`);

  if (userInput.toLowerCase() && menu.mainMenu[userInput.toLowerCase()]) {
    const subMenu = menu.mainMenu[userInput.toLowerCase()];

    validInput = true;

    let validEntreeInput = false;

    while (!validEntreeInput) {
      const entree = prompt(`This is our ${userInput.toLowerCase()} menu.\nEntrees:\n${Object.keys(subMenu).map(key => `• ${key} - $${subMenu[key].price}`).join('\n')}\n\nTo start your order, please choose an entree for your ${userInput}.`);

      if (entree.toLowerCase() && subMenu[entree.toLowerCase()]) {
        const selectedEntree = subMenu[entree.toLowerCase()];

        alert(`You have selected ${entree} with price: $${selectedEntree.price}\n${selectedEntree.comment}\n${getRandomComment()}`);

        total += selectedEntree.price;
        validEntreeInput = true;

        let firstSide;
        let selectedFirstSide;
        let validFirstSideInput = false;

        while (!validFirstSideInput) {
          firstSide = prompt(`Please choose a side dish:\n${Object.keys(menu.sidesMenu.firstSideDish).map(key => `• ${key} - $${menu.sidesMenu.firstSideDish[key].price}`).join('\n')}`);

          if (firstSide.toLowerCase() && menu.sidesMenu.firstSideDish[firstSide.toLowerCase()]) {
            selectedFirstSide = menu.sidesMenu.firstSideDish[firstSide.toLowerCase()];
            alert(`You have selected ${firstSide.toLowerCase()} with price: $${selectedFirstSide.price}\n${selectedFirstSide.comment}\n${getRandomComment()}`);

            total += selectedFirstSide.price;
            validFirstSideInput = true;
          } else {
            alert("Invalid selection of side dish. The specified name of the dish is not on the menu. Make sure you enter the name without spelling mistakes. Please try again.");
          }
        }

        let secondSide;
        let selectedSecondSide;
        let validSecondSideInput = false;

        while (!validSecondSideInput) {
          secondSide = prompt(`Please choose a drink:\n${Object.keys(menu.sidesMenu.secondSideDish).map(key => `• ${key} - $${menu.sidesMenu.secondSideDish[key].price}`).join('\n')}`);

          if (secondSide.toLowerCase() && menu.sidesMenu.secondSideDish[secondSide.toLowerCase()]) {
            selectedSecondSide = menu.sidesMenu.secondSideDish[secondSide.toLowerCase()];

            alert(`You have selected ${secondSide.toLowerCase()} with price: $${selectedSecondSide.price}\n${selectedSecondSide.comment}\n${getRandomComment()}`);

            total += selectedSecondSide.price;
            validSecondSideInput = true;
          } else {
            alert("Invalid selection of drink. The specified name of the dish is not on the menu. Make sure you enter the name without spelling mistakes. Please try again.");
          }
        }

        let dessert;
        let validDessertInput = false;
        let continueDessertSelection = false;

        while (!validDessertInput && !continueDessertSelection) {
         
          const dessertQuestion = prompt(`Would you like to add any dessert to your order?\n\n• Type 'yes' if you want to see our dessert menu;\n• Type 'no' or skip this step if you do not want`);

          if (dessertQuestion.toLowerCase() && dessertQuestion.toLowerCase() === 'yes') {
            validDessertInput = true; 
            dessert = prompt(`Please choose a dessert:\n${Object.keys(menu.dessertMenu).map(key => `• ${key} - $${menu.dessertMenu[key].price}`).join('\n')}\n\nIf you have not chosen any dessert, please skip this step.`);
            continueDessertSelection = true;
          } else if (dessertQuestion.toLowerCase() && dessertQuestion.toLowerCase() !== 'yes' && dessertQuestion.toLowerCase() !== 'no') {

            alert('Invalid answer. Make sure you do not have spelling mistakes. Please try again.')
          } else {
            alert(`YOUR ORDER:\n • ${entree.toLowerCase()} - $${selectedEntree.price}\n • ${firstSide.toLowerCase()} - $${selectedFirstSide.price}\n • ${secondSide.toLowerCase()} - $${selectedSecondSide.price}\n\n\nTOTAL: $${total}`);
            validDessertInput = true; 
          } 
        }

        let validDessertName = false;
        
        while (continueDessertSelection && !validDessertName) {
          if (dessert.toLowerCase() && menu.dessertMenu[dessert.toLowerCase()]) {
  
            const selectedDessert = menu.dessertMenu[dessert.toLowerCase()];
          
            alert(`You have selected ${dessert.toLowerCase()} with price: $${selectedDessert.price}\n${selectedDessert.comment}\n${getRandomComment()}`);
          
            total += selectedDessert.price
            alert(`YOUR ORDER:\n • ${entree.toLowerCase()} - $${selectedEntree.price}\n • ${firstSide.toLowerCase()} - $${selectedFirstSide.price}\n • ${secondSide.toLowerCase()} - $${selectedSecondSide.price}\n • ${dessert.toLowerCase()} - $${selectedDessert.price}\n\n\nTOTAL: $${total}`);
            validDessertName = true;
          } else if (dessert.toLowerCase() && !menu.dessertMenu[dessert.toLowerCase()])  {
            alert("Invalid selection of dessert. The specified name of dessert is not on the menu. Make sure you enter the name without spelling mistakes. Please try again.");
            dessert = prompt(`Please choose a dessert:\n${Object.keys(menu.dessertMenu).map(key => `• ${key} - $${menu.dessertMenu[key].price}`).join('\n')}\n\nIf you have not chosen any dessert, please skip this step.`);
          } else {
            alert(`YOUR ORDER:\n • ${entree.toLowerCase()} - $${selectedEntree.price}\n • ${firstSide.toLowerCase()} - $${selectedFirstSide.price}\n • ${secondSide.toLowerCase()} - $${selectedSecondSide.price}\n\n\nTOTAL: $${total}`); 
            validDessertName = true;
          }
        }

      } else {
        alert("Invalid selection of entree. The specified name of the dish is not on the menu. Make sure you enter the name without spelling mistakes. Please try again.");
      }
    }
  } else {
    alert("Invalid category selected. Make sure you enter the name without spelling mistakes. Please try again.");
  }
}



