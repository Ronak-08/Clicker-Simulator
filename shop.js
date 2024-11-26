function toggleDiv(elementId, dis) {
  let element = document.getElementById(elementId);
  if (element.style.display === "none" || !element.style.display) {
    element.style.display = dis;
    anime({
      targets: element,
      opacity: [0, 1],
      duration: 170,
      easing: "easeInOutQuad",
    });
  } else {
    anime({
      targets: element,
      opacity: [1, 0],
      duration: 170,
      easing: "easeInOutQuad",
      complete: function () {
        element.style.display = "none";
      },
    });
  }
}
const shopping = () => {
  toggleDiv("shop", "flex");
};

let canEquipTwoPets = false;
let canEquipFivePets = false;
let canEquipTenPets = false;
let autoClicker = false;
let superAutoClicker = false;

// Retrieve stored values from localStorage or set to false if not found
const storedCanEquipTwoPets =
  JSON.parse(localStorage.getItem("canEquipTwoPets")) || false;
const storedCanEquipFivePets =
  JSON.parse(localStorage.getItem("canEquipFivePets")) || false;
const storedCanEquipTenPets =
  JSON.parse(localStorage.getItem("canEquipTenPets")) || false;
const storedAutoClicker =
  JSON.parse(localStorage.getItem("autoClicker")) || false;
const storedSuperAutoClicker =
  JSON.parse(localStorage.getItem("superAutoClicker")) || false;

// Update initial state based on stored values
if (storedCanEquipTwoPets) {
  canEquipTwoPets = true;
  document.getElementById("2pet").disabled = true;
  document.getElementById("2pet").innerHTML = "Purchased";
}

if (storedCanEquipFivePets) {
  canEquipFivePets = true;
  document.getElementById("5pet").disabled = true;
  document.getElementById("5pet").innerHTML = "Purchased";
}

if (storedCanEquipTenPets) {
  canEquipTenPets = true;
  document.getElementById("10pet").disabled = true;
  document.getElementById("10pet").innerHTML = "Purchased";
}

if (storedAutoClicker) {
  autoClicker = true;
  document.getElementById("autoClicker").disabled = true;
  document.getElementById("autoClicker").innerHTML = "Purchased";
  document.getElementById("autoClick").style.display = "flex";
}

if (storedSuperAutoClicker) {
  superAutoClicker = true;
  document.getElementById("superAutoClicker").disabled = true;
  document.getElementById("superAutoClicker").innerHTML = "Purchased";
  document.getElementById("superAutoClick").style.display = "flex";
}

// Helper function to handle purchases
const handlePurchase = (cost, itemKey, elementId, message) => {
  if (diamondCount >= cost) {
    diamondCount -= cost;
    updateDiamondCount();
    localStorage.setItem(itemKey, JSON.stringify(true)); // Store the purchased state
    document.getElementById(elementId).disabled = true;
    document.getElementById(elementId).innerHTML = "Purchased";
    popup(message, "");
    return true;
  } else {
    popup("Not enough diamonds to complete the purchase.", "");
    return false;
  }
};

// Purchase functions
const buyTwoPetEquipPass = () => {
  if (
    handlePurchase(
      50,
      "canEquipTwoPets",
      "2pet",
      "You can now equip two pets at once!",
    )
  ) {
    canEquipTwoPets = true;
  }
};

const buyFivePetEquipPass = () => {
  if (
    handlePurchase(
      500,
      "canEquipFivePets",
      "5pet",
      "You can now equip five pets at once!",
    )
  ) {
    canEquipFivePets = true;
  }
};

const buyTenPetEquipPass = () => {
  if (
    handlePurchase(
      50000,
      "canEquipTenPets",
      "10pet",
      "You can now equip ten pets at once!",
    )
  ) {
    canEquipTenPets = true;
  }
};

const buyAutoClicker = () => {
  if (
    handlePurchase(
      10000,
      "autoClicker",
      "autoClicker",
      "Auto-clicker purchased!",
    )
  ) {
    autoClicker = true;
    document.getElementById("autoClick").style.display = "flex";
  }
};

const buySuperAutoClicker = () => {
  if (
    handlePurchase(
      10000000,
      "superAutoClicker",
      "superAutoClicker",
      "Super Auto-clicker purchased!",
    )
  ) {
    superAutoClicker = true;
    document.getElementById("superAutoClick").style.display = "flex";
  }
};
if (superAutoClicker) {
  document.getElementById("autoClick").style.display = "none";
}
let clickMultiplier = 1;

const potions = {
  twoXclicks: { cost: 200, duration: 600, effect: "2x clicks" },

  threeXclicks: { cost: 300, duration: 600, effect: "3x clicks" },
  twoXdiamonds: { cost: 1000, duration: 600, effect: "2x diamonds" },
};
let purchasedPotions = {};

const loadPurchasedPotions = () => {
  const storedPotions =
    JSON.parse(localStorage.getItem("purchasedPotions")) || {};
  purchasedPotions = storedPotions;
  Object.keys(purchasedPotions).forEach((potion) => {
    if (
      purchasedPotions[potion] &&
      purchasedPotions[potion].count !== undefined
    ) {
      document.getElementById(`${potion}-count`).innerHTML =
        purchasedPotions[potion].count;
    } else {
      document.getElementById(`${potion}-count`).innerHTML = 0;
    }
  });
};
const buyPotion = (potion) => {
  let potionCost = potions[potion].cost;
  if (diamondCount >= potionCost) {
    diamondCount -= potionCost;
    if (!purchasedPotions[potion]) {
      purchasedPotions[potion] = { count: 0, timer: null };
    }
    purchasedPotions[potion].count++;

    updateDiamondCount();
    // Update the UI with the new potion count
    document.getElementById(`${potion}-count`).innerHTML =
      purchasedPotions[potion].count;
    localStorage.setItem("purchasedPotions", JSON.stringify(purchasedPotions));
  } else {
    popup("Not enough diamonds.", "");
  }
};

const inventor = () => {
  toggleDiv("inventory", "grid");

  if (petPurchased.length >= 1) {
    document.getElementById("noPetsMessage").style.display = "none";
  }

  petPurchased.forEach((pet) => {
    const petElement = document.getElementById(pet);
    if (petElement) {
      petElement.style.display = "grid";
    }
  });
};
const po = () => {
  toggleDiv("potions", "grid");

  if (purchasedPotions.length === 0) {
    document.getElementById("noPotionsMessage").style.display = "flex";
  }
  if (purchasedPotions["twoXclicks"]) {
    document.getElementById("potion-twoXclicks").style.display = "grid";

    document.getElementById("noPotionsMessage").style.display = "none";
  }

  if (
    purchasedPotions["threeXclicks"] &&
    purchasedPotions["threeXclicks"].count > 0
  ) {
    document.getElementById("potion-threeXclicks").style.display = "grid";

    document.getElementById("noPotionsMessage").style.display = "none";
  }

  if (
    purchasedPotions["twoXdiamonds"] &&
    purchasedPotions["twoXdiamonds"].count > 0
  ) {
    document.getElementById("potion-twoXdiamonds").style.display = "grid";

    document.getElementById("noPotionsMessage").style.display = "none";
  }
};

const closeElement = (elementId) => {
  toggleDiv(elementId, "none");
};

if (!localStorage.getItem("welcomeShown")) {
  // Display the welcome message
  document.getElementById("scrim").style.display = "block";
  document.getElementById("box").style.display = "flex";

  // Set the localStorage item so the message is not shown again
  localStorage.setItem("welcomeShown", "true");
}
function toggleFabMenu() {
  const fabMenu = document.querySelector(".fab-menu");
  const mainFabIcon = document.querySelector(".main-fab .material-icons");
  const scrim = document.getElementById("scrim");
  // Toggle the menu visibility
  fabMenu.classList.toggle("open");
  // Change the icon from 'add' to 'close' smoothly
  if (fabMenu.classList.contains("open")) {
    scrim.style.display = "block";
  } else {
    scrim.style.display = "none";
  }
}
document.addEventListener("DOMContentLoaded", loadPurchasedPotions);
const rewards = [
  {
    type: "clicks",
    value: 500,
    weight: 30,
    description: "+500 clicks! A small boost.",
  },
  {
    type: "clicks",
    value: 1500,
    weight: 25,
    description: "+1500 clicks! Moving up!",
  },
  {
    type: "clicks",
    value: 3000,
    weight: 10,
    description: "+3000 clicks! Nice win!",
  },
  {
    type: "clicks",
    value: 10000,
    weight: 5,
    description: "Jackpot! +10,000 clicks!",
  },
  {
    type: "diamonds",
    value: 10,
    weight: 10,
    description: "10 Diamonds! A shiny reward.",
  },
  {
    type: "diamonds",
    value: 25,
    weight: 5,
    description: "+25 Diamonds! Solid prize!",
  },
  {
    type: "diamonds",
    value: 50,
    weight: 2,
    description: "Epic reward! +50 Diamonds!",
  },
  {
    type: "clicks",
    value: 50000,
    weight: 0.1,
    description: "Incredible! +50,000 clicks!",
  },
  //{ type: "item", value: "Double Click Booster", weight: 2, description: "Rare item! Doubles your clicks for 5 minutes." },
  //{ type: "item", value: "Diamond Multiplier", weight: 1, description: "Legendary item! Doubles diamonds earned for 10 minutes." },
  //{ type: "item", value: "Instant Level Up", weight: 1, description: "Instantly level up! Gain a level without extra clicks." },
  {
    type: "clicks",
    value: 20000,
    weight: 1,
    description: "Massive gain! +20,000 clicks!",
  },
];
const premiumRewards = [
  {
    type: "clicks",
    value: 10000,
    weight: 25,
    description: "+10,000 clicks! A great boost!",
  },
  {
    type: "clicks",
    value: 25000,
    weight: 18,
    description: "+25,000 clicks! Big win!",
  },
  {
    type: "clicks",
    value: 50000,
    weight: 10,
    description: "Huge win! +50,000 clicks!",
  },
  {
    type: "clicks",
    value: 100000,
    weight: 5,
    description: "Jackpot! +100,000 clicks!",
  },
  {
    type: "diamonds",
    value: 300,
    weight: 10,
    description: "+300 Diamonds! Nice bonus!",
  },
  {
    type: "diamonds",
    value: 500,
    weight: 7,
    description: "+500 Diamonds! Precious prize!",
  },
  {
    type: "diamonds",
    value: 1000,
    weight: 0.5,
    description: "Epic reward! +1000 Diamonds!",
  },
  {
    type: "clicks",
    value: 250000,
    weight: 1,
    description: "Mega Jackpot! +250,000 clicks!",
  },
  {
    type: "potion",
    name: "threeXclicks",
    value: 1,
    weight: 10,
    description: "Rare item! Triple clicks for 10 minutes.",
  },
  {
    type: "potion",
    name: "twoXdiamonds",
    value: 2,
    weight: 1,
    description: "Legendary item! Double diamonds earned for 10 minutes.",
  },
  //{ type: "item", value: "Instant Level Up x2", weight: 1, description: "Two instant level-ups! Move ahead instantly!" },
  {
    type: "clicks",
    value: 500000,
    weight: 0.1,
    description: "Ultimate prize! +500,000 clicks!",
  },
];
function getRandomReward(rewards) {
  const totalWeight = rewards.reduce((sum, reward) => sum + reward.weight, 0);
  const random = Math.random() * totalWeight; // Adjusted random up to total weight
  let cumulativeWeight = 0;

  for (const reward of rewards) {
    cumulativeWeight += reward.weight;
    if (random < cumulativeWeight) {
      return reward;
    }
  }

  console.warn("No reward selected, returning default reward");
  return rewards[0]; // Default to first reward if nothing matched
}
const rewardDisplay = document.getElementById("rewardDisplay");

function grantReward(reward) {
  if (reward.type === "clicks") {
    clickCount += reward.value;
    updateClickCount();
  } else if (reward.type === "diamonds") {
    grantDiamonds(reward.value);
  } else if (reward.type === "potion") {
    if (!purchasedPotions[reward.name]) {
      purchasedPotions[reward.name] = { count: 1 };
    } else {
      purchasedPotions[reward.name].count++;
    }
  }
  // Display reward description and update rewardDisplay
  popup(reward.description, "");
  rewardDisplay.textContent = `${reward.value} ${reward.type}`;
}

const RewardButton = document.getElementById("roll");

const PrewardButton = document.getElementById("premiumRoll");

RewardButton.addEventListener("click", () => {
  RewardButton.disabled = true;
  if (clickCount < 1000) {
    popup("Not enough clicks", "");
    RewardButton.disabled = false;
    return;
  }

  clickCount -= 1000;
  updateClickCount();

  const reward = getRandomReward(rewards); // Fetch a random reward
  grantReward(reward); // Apply the reward

  // Re-enable the button after 3 seconds
  setTimeout(() => {
    RewardButton.disabled = false;
  }, 3000);
});

PrewardButton.addEventListener("click", () => {
  PrewardButton.disabled = true;
  if (diamondCount < 500) {
    popup("Not enough diamonds", "");
    PrewardButton.disabled = false;
    return;
  }

  diamondCount -= 500;
  updateDiamondCount();

  const reward = getRandomReward(premiumRewards); // Fetch a random reward
  grantReward(reward); // Apply the reward

  // Re-enable the button after 3 seconds
  setTimeout(() => {
    PrewardButton.disabled = false;
  }, 3000);
});
document.getElementById("themeSwitch").addEventListener("click", function () {
  document.body.classList.toggle("light");
});

const layout = ()=> {
  document.getElementById('bottomBar').style.display = 'flex'

}
function showSection(section) {
  // Hide all sections
  document.getElementById('petSection').style.display = 'none';
  document.getElementById('passSection').style.display = 'none';
  document.getElementById('potionSection').style.display = 'none';

document.querySelectorAll('#bottomBar div').forEach(tab => tab.classList.remove('active'));

  // Add active class to the selected tab
  document.getElementById(`${section}Tab`).classList.add('active');
  // Show the selected section
  document.getElementById(`${section}Section`).style.display = 'flex';
}
document.addEventListener('DOMContentLoaded', function() {
  showSection('pet');
});
