const noAchievementsMessage = document.getElementById("no-achievements");
function decreaseCustomProgressBar() {
  anime({
    targets: ".custom-progress",
    width: ["100%", "0%"], // Animating the width from 100% to 0%
    easing: "linear", // Linear easing for smooth progress reduction
    duration: 3000, // 3 seconds duration
  });
}

let popupQueue = [];
let isPopupActive = false;

const showNextPopup = () => {
  if (popupQueue.length === 0 || isPopupActive) {
    return;
  }

  isPopupActive = true;
  const { content, reward } = popupQueue.shift(); // Get the next popup data

  const box = document.getElementById("box2");
  const cont = document.getElementById("cont2");
  const rewardElement = document.getElementById("reward");

  cont.innerHTML = content;
  rewardElement.innerHTML = reward;

  // Show the popup with a fade-in animation
  anime({
    targets: box,
    opacity: [0, 1], // Fade in from 0 to 1
    scale: [0.8, 1], // Slight zoom-in effect
    easing: "easeOutElastic(1, .8)", // Elastic effect for a bouncy pop-up
    duration: 400, // Animation duration
    begin: () => {
      box.style.display = "flex";
    },
  });

  // Hide the popup after 3 seconds with a fade-out animation
  setTimeout(() => {
    anime({
      targets: box,
      opacity: [1, 0], // Fade out from 1 to 0
      scale: [1, 0.8], // Slight zoom-out effect
      easing: "easeInBack",
      duration: 400,
      complete: () => {
        box.style.display = "none"; // Hide after animation is done
        isPopupActive = false;
        showNextPopup(); // Show the next popup in the queue
      },
    });
  }, 3000);

  // Start the progress bar decrease animation
  decreaseCustomProgressBar();
};

const popup = (content, reward) => {
  popupQueue.push({ content, reward });
  showNextPopup();
};

let achieve = 0;
let achievedList = JSON.parse(localStorage.getItem("achievedList")) || [];
achievedList.sort((a, b) => a - b);
let congrats = localStorage.getItem("congrats") || 1;
const achievements = [
  // Click-based achievements
  {
    id: "clicks5",
    name: "Get 5 Clicks",
    condition: () => clickCount >= 5 && congrats === 0,
    reward: { type: "diamonds", amount: 1 },
    unlocked: false,
  },
  {
    id: "clicks100",
    name: "Get 100 Clicks",
    condition: () => clickCount >= 100 && congrats === 1,
    reward: { type: "diamonds", amount: 10 },
    unlocked: false,
  },
  {
    id: "clicks500",
    name: "Get 500 Clicks",
    condition: () => clickCount >= 500 && congrats === 2,
    reward: { type: "diamonds", amount: 20 },
    unlocked: false,
  },
  {
    id: "clicks1000",
    name: "Get 1000 Clicks",
    condition: () => clickCount >= 1000 && congrats === 3,
    reward: { type: "diamonds", amount: 30 },
    unlocked: false,
  },
  {
    id: "clicks5000",
    name: "Get 5000 Clicks",
    condition: () => clickCount >= 5000 && congrats === 4,
    reward: { type: "diamonds", amount: 50 },
    unlocked: false,
  },
  {
    id: "clicks10000",
    name: "Get 10000 Clicks",
    condition: () => clickCount >= 10000 && congrats === 5,
    reward: { type: "diamonds", amount: 100 },
    unlocked: false,
  },

  // Level-based achievements
{
    id: "level1",
    name: "Reach Level 1",
    condition: () => currentLevel >= 1,
    reward: { type: "diamonds", amount: 5 },
    unlocked: false,
  },
  {
    id: "level5",
    name: "Reach Level 5",
    condition: () => currentLevel >= 5,
    reward: { type: "diamonds", amount: 50 },
    unlocked: false,
  },
  {
    id: "level10",
    name: "Reach Level 10",
    condition: () => currentLevel >= 10,
    reward: { type: "diamonds", amount: 400 },
    unlocked: false,
  },
  {
    id: "level20",
    name: "Reach Level 20",
    condition: () => currentLevel >= 20,
    reward: { type: "diamonds", amount: 200 },
    unlocked: false,
  },
  {
    id: "level30",
    name: "Reach Level 30",
    condition: () => currentLevel >= 30,
    reward: { type: "diamonds", amount: 800 },
    unlocked: false,
  },
  {
    id: "level40",
    name: "Reach Level 40",
    condition: () => currentLevel >= 40,
    reward: { type: "diamonds", amount: 1200 },
    unlocked: false,
  },
  {
    id: "level50",
    name: "Reach Level 50",
    condition: () => currentLevel >= 50,
    reward: { type: "diamonds", amount: 2000 },
    unlocked: false,
  },
  {
    id: "level60",
    name: "Reach Level 60",
    condition: () => currentLevel >= 60,
    reward: { type: "diamonds", amount: 3000 },
    unlocked: false,
  },
  {
    id: "level70",
    name: "Reach Level 70",
    condition: () => currentLevel >= 70,
    reward: { type: "diamonds", amount: 4000 },
    unlocked: false,
  },
  {
    id: "level80",
    name: "Reach Level 80",
    condition: () => currentLevel >= 80,
    reward: { type: "diamonds", amount: 5000 },
    unlocked: false,
  },
  {
    id: "level90",
    name: "Reach Level 90",
    condition: () => currentLevel >= 90,
    reward: { type: "diamonds", amount: 6000 },
    unlocked: false,
  },
  {
    id: "level100",
    name: "Reach Level 100",
    condition: () => currentLevel >= 100,
    reward: { type: "diamonds", amount: 1000000 },
    unlocked: false,
  },

  // Special achievements
  {
    id: "firstDiamond",
    name: "Earn your First Diamond",
    condition: () => diamondCount > 0 && congrats >= 10,
    reward: { type: "clicks", amount: 100 },
    unlocked: false,
  },
  {
    id: "firstPet",
    name: "Acquire your First Pet",
    condition: () => petPurchased.length >= 1 && congrats >= 11,
    reward: { type: "clicks", amount: 300 },
    unlocked: false,
  },
  {
    id: "clicks100000",
    name: "Get 100000 Clicks",
    condition: () => clickCount >= 100000 && congrats >= 12,
    reward: { type: "diamonds", amount: 100 },
    unlocked: false,
  },

  {
    id: "firstExcPet",
    name: "Get your First Exclusive Pet",
    condition: () =>
      petPurchased.some((pet) => pets[pet].exclusive) && congrats >= 13,
    reward: { type: "clicks", amount: 300 },
    unlocked: false,
  },
  {
    id: "fiveExclusivePets",
    name: "Purchase 5 Exclusive Pets",
    condition: () =>
      petPurchased.filter((pet) => pets[pet].exclusive).length >= 5 &&
      congrats >= 14,
    reward: { type: "diamonds", amount: 500 },
    unlocked: false,
  },
  {
    id: "clicktastic",
    name: "Clicktastic",
    condition: () => clickCount >= 1e3,
    reward: { type: "diamonds", amount: 150 },
    unlocked: false,
  },
  {
    id: "clickathlon",
    name: "Clickathlon",
    condition: () => clickCount >= 1e5,
    reward: { type: "diamonds", amount: 500 },
    unlocked: false,
  },
  {
    id: "clickolympics",
    name: "Clickolympics",
    condition: () => clickCount >= 1e7,
    reward: { type: "diamonds", amount: 500 },
    unlocked: false,
  },
  {
    id: "clickorama",
    name: "Clickorama",
    condition: () => clickCount >= 1e9,
    reward: { type: "diamonds", amount: 1000 },
    unlocked: false,
  },
  {
    id: "clickasmic",
    name: "Clickasmic",
    condition: () => clickCount >= 1e11,
    reward: { type: "diamonds", amount: 2000 },
    unlocked: false,
  },
  {
    id: "clickageddon",
    name: "Clickageddon",
    condition: () => clickCount >= 1e13,
    reward: { type: "diamonds", amount: 5000 },
    unlocked: false,
  },
  {
    id: "clicknarok",
    name: "Clicknarok",
    condition: () => clickCount >= 1e15,
    reward: { type: "diamonds", amount: 10000 },
    unlocked: false,
  },
  {
    id: "clickastrophe",
    name: "Clickastrophe",
    condition: () => clickCount >= 1e17,
    reward: { type: "diamonds", amount: 20000 },
    unlocked: false,
  },
  {
    id: "clickataclysm",
    name: "Clickataclysm",
    condition: () => clickCount >= 1e19,
    reward: { type: "diamonds", amount: 50000 },
    unlocked: false,
  },
  {
    id: "theultimateclickdown",
    name: "The Ultimate Clickdown",
    condition: () => clickCount >= 1e21,
    reward: { type: "diamonds", amount: 100000 },
    unlocked: false,
  },
  {
    id: "allotherkidswiththepumpedupclicks",
    name: "All the other kids with the pumped up clicks",
    condition: () => clickCount >= 1e23,
    reward: { type: "diamonds", amount: 20000000 },
    unlocked: false,
  },
  {
    id: "onemoreclick",
    name: "One…more…click…",
    condition: () => clickCount >= 1e25,
    reward: { type: "diamonds", amount: 5000000 },
    unlocked: false,
  },
  {
    id: "clicketysplit",
    name: "Clickety Split",
    condition: () => clickCount >= 1e27,
    reward: { type: "diamonds", amount: 1000000000 },
    unlocked: false,
  },
  {
    id: "clickerKing",
    name: "Clicker King",
    condition: () => clickCount >= 1e30,
    reward: { type: "diamonds", amount: 10000000000 },
    unlocked: false,
  },
  {
    id: "autoClicker",
    name: "Purchase Auto Clicker",
    condition: () => storedAutoClicker === true,
    reward: { type: "clicks", amount: 10000 },
    unlocked: false,
  },

];
achievements.forEach((achievement) => {
  if (achievedList.includes(achievement.id)) {
    achievement.unlocked = true;

    if (noAchievementsMessage) {
      noAchievementsMessage.style.display = "none";
    }
    let achievementDiv = document.createElement("md-list");
    achievementDiv.className = "achievement-item";
    achievementDiv.innerHTML = `<md-ripple></md-ripple><md-list-item class="achievement-content">
      <p class="achievement-name">${achievement.name}</p>
      <p class="achievement-reward">${achievement.reward.amount} ${achievement.reward.type}</p>
    </md-list-item>
    `;
    document.getElementById("achieved-list").appendChild(achievementDiv);
  }
});
// Unlock the achievement if the condition is met
const unlockAchievement = (achievement) => {
  if (noAchievementsMessage) {
    noAchievementsMessage.style.display = "none";
  }
  if (!achievement.unlocked) {
    achievement.unlocked = true;
    achievedList.push(achievement.id); // Add to the achieved list
    achievedList.sort((a, b) => a - b);
    localStorage.setItem("achievedList", JSON.stringify(achievedList));
    // Display achievement
    let achievementDiv = document.createElement("div");
    achievementDiv.className = "achievement-item";
    achievementDiv.innerHTML = `<div class="achievement-content">
      <span class="achievement-name">${achievement.name}</span>
      <span class="achievement-reward">${achievement.reward.amount} ${achievement.reward.type}</span>
    </div>
    `;
    document.getElementById("achieved-list").appendChild(achievementDiv);

    // Display popup and grant reward
    popup(
      achievement.name,
      `+${achievement.reward.amount} ${achievement.reward.type}`,
    );
    if (achievement.reward.type === "clicks") {
      clickCount += achievement.reward.amount;
    } else if (achievement.reward.type === "diamonds") {
      grantDiamonds(achievement.reward.amount);
    }
    updateDiamondCount();
    updateClickCount();
  }
};

// Function to check all achievements
const checkAchievements = () => {
  achievements.forEach((achievement) => {
    if (!achievement.unlocked && achievement.condition()) {
      unlockAchievement(achievement);

      // Update congrats value based on achievement ID
      switch (achievement.id) {
        case "clicks5":
          congrats = 1;
          break;
        case "clicks100":
          congrats = 2;
          break;
        case "clicks500":
          congrats = 3;
          break;
        case "clicks1000":
          congrats = 4;
          break;
        case "clicks5000":
          congrats = 5;
          break;
        case "clicks10000":
          congrats = 6;
          break;
        case "firstDiamond":
          congrats = 11;
          break;
        case "firstPet":
          congrats = 12;
          break;
        case "clicks100000":
          congrats = 13;
          break;
        case "firstExcPet":
          congrats = 14;
          break;
        case "fiveExclusivePets":
          congrats = 15;
          break;
      }

      // Store the updated congrats value in local storage
      localStorage.setItem("congrats", congrats);
    }
  });
};
// Function to trigger achievement checks when needed
const achieved = () => {
  checkAchievements(); // Call this wherever appropriate (e.g., when click count increases)
};

// Example button to display achievements
document.getElementById("ac").addEventListener("click", () => {
  toggleDiv("achievements", "flex");
});
