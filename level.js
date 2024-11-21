const maxLevel = 100;
let currentLevel = parseInt(localStorage.getItem("level")) || 0;
let currentExp = parseInt(localStorage.getItem("exp")) || 0;
let expToNextLevel = parseInt(localStorage.getItem("expToNextLevel")) || 5000;

document.getElementById("levelNo").innerHTML = currentLevel; // Update with current level

const addExp = (expAmount) => {
  currentExp += expAmount;

  if (currentLevel < maxLevel && currentExp >= expToNextLevel) {
    levelUp();
  } else if (currentLevel >= maxLevel) {
    document.getElementById("levelNo").innerHTML = "Max";
  }

  updateLevelUI();
  saveLevelData();
};

// Function to handle leveling up
const levelUp = () => {
  currentExp -= expToNextLevel; // Carry over excess EXP to the next level
  currentLevel++;
  expToNextLevel *= 2; // Increase EXP requirement for each level

  if (currentLevel >= maxLevel) {
    currentLevel = maxLevel; // Ensure it doesn't go beyond the max level
    document.getElementById("levelNo").innerHTML = "Max";
    expToNextLevel = 0; // No more EXP needed at max level
    clickMultiplier *= 4; // Permanent 4x boost at max level
  } else {
    document.getElementById("levelNo").innerHTML = currentLevel; // Update with current level
  }

  popup(`Congratulations! You reached Level ${currentLevel}`, "");
  grantRandomReward();
  saveLevelData();
};

const updateLevelUI = () => {
  if (currentLevel >= maxLevel) {
    document.getElementById("levelProgress").style.width = "100%";
    document.getElementById("levelPercentage").innerHTML = "Max";
  } else {
    const progressPercentage = (currentExp / expToNextLevel) * 100;

    document.getElementById("levelPercentage").style.display = "flex";
    document.getElementById("levelPercentage").innerHTML =
      Math.floor(progressPercentage) + "%";
    document.getElementById("levelProgress").style.width =
      progressPercentage + "%";
  }
};

const saveLevelData = () => {
  localStorage.setItem("level", currentLevel);
  localStorage.setItem("exp", currentExp);
  localStorage.setItem("expToNextLevel", expToNextLevel);
};
const grantRandomReward = () => {
  let reward;
  const levelMultiplier = Math.floor(currentLevel / 10) + 5; // Reward scales with level

  // Random number to determine reward type
  const randomRewardType = Math.floor(Math.random() * 100); // Generates a number between 0-99

  if (randomRewardType < 90) {
    // 90% chance of granting clicks
    const clickReward = Math.floor(100 * levelMultiplier + Math.random() * 90);
    clickCount += clickReward;
    updateClickCount();
    reward = `You received ${clickReward} clicks!`;
  } else {
    // 10% chance of granting diamonds
    const diamondReward = Math.floor(5 * levelMultiplier + Math.random() * 3);
    diamondCount += diamondReward;
    updateDiamondCount();
    reward = `You received ${diamondReward} diamonds!`;
  }

  // Show the reward in a popup
  popup(reward, "");
};
updateLevelUI();
