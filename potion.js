let activePotions = [];
// Save the active potions and their remaining time to localStorage
const saveActivePotions = () => {
  localStorage.setItem("activePotions", JSON.stringify(activePotions));
  localStorage.setItem("purchasedPotions", JSON.stringify(purchasedPotions));
};

// Load active potions from localStorage on page load
const loadActivePotions = () => {
  activePotions = JSON.parse(localStorage.getItem("activePotions")) || [];
  purchasedPotions = JSON.parse(localStorage.getItem("purchasedPotions")) || {};

  activePotions.forEach((potion) => {
    const remainingTime = localStorage.getItem(`${potion}_timer`);
    if (remainingTime > 0) {
      activatePotion(potion, false); // Re-apply potion effects
      startPotionTimer(remainingTime, potion); // Restart timer
    }
  });
};
window.onload = () => {
  loadActivePotions(); // Load active potions from localStorage
};
const activatePotion = (potion, showPotion = true) => {
  if (!activePotions.includes(potion) && purchasedPotions[potion]?.count > 0) {
    activePotions.push(potion);

    // Apply effects based on potion type
    if (potion === "twoXclicks") {
      clickMultiplier *= 2;
      if (showPotion) popup("2x clicks activated for 10 minutes!", "");
    }
    if (potion === "threeXclicks") {
      clickMultiplier *= 3;
      if (showPotion) popup("3x clicks activated for 10 minutes!", "");
    }

    if (potion === "twoXdiamonds") {
      diamondMultiplier *= 2;
      if (showPotion) popup("2x diamonds activated for 10 minutes!", "");
    }
    // Decrease potion count and update UI
    purchasedPotions[potion].count--;
    document.getElementById(`${potion}-button`).disabled = true;
    document.getElementById(`${potion}-count`).innerHTML =
      purchasedPotions[potion].count;

    startPotionTimer(600, potion); // Start the timer for the potion
    saveActivePotions();
    document.getElementById(`${potion}-timer`).style.display = "flex";
  }
};

const startPotionTimer = (duration, potion) => {
  let timeLeft = duration;

  // Clear any existing timer before starting a new one
  if (purchasedPotions[potion].timer) {
    clearInterval(purchasedPotions[potion].timer);
  }

  // Start a new interval timer
  purchasedPotions[potion].timer = setInterval(() => {
    timeLeft--;

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    // Update the timer display for the specific potion
    document.getElementById(`${potion}-timer`).innerHTML =
      `Active for: ${minutes}m ${seconds}s`;

    localStorage.setItem(`${potion}_timer`, timeLeft);
    // When time is up
    if (timeLeft <= 0) {
      clearInterval(purchasedPotions[potion].timer);
      deactivatePotion(potion);

      // Re-enable the button if potions are still left
      if (purchasedPotions[potion]?.count > 0) {
        document.getElementById(`${potion}-button`).disabled = false;
      }
    }
  }, 1000);
};

const deactivatePotion = (potion) => {
  // Remove potion from activePotions array, allowing it to be reused
  activePotions = activePotions.filter((active) => active !== potion);

  // Adjust the click multiplier back to normal
  if (potion === "twoXclicks") clickMultiplier /= 2;
  if (potion === "threeXclicks") clickMultiplier /= 3;

  if (potion === "twoXdiamonds") diamondMultiplier /= 2;

  // Clear the specific potion's timer display
  document.getElementById(`${potion}-timer`).style.display = "none";
  localStorage.removeItem(`${potion}_timer`);
  saveActivePotions();
  // Ensure the potion can be activated again
if (purchasedPotions[potion]?.count > 0) {
    document.getElementById(`${potion}-button`).disabled = false;
  } else {
    delete purchasedPotions[potion]; // Remove from purchasedPotions
    document.getElementById(`${potion}-button`).remove(); // Remove button from DOM
  }

  saveActivePotions(); // Save changes to localStorage
};
