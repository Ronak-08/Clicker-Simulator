let petPurchased = JSON.parse(localStorage.getItem("petPurchased")) || [];
let activePet = JSON.parse(localStorage.getItem("activePet")) || [];

const petDisplayNames = {
  cat: "Cat",
  dog: "Dog",
  cow: "Cow",
  lion: "Lion",
  dragon: "Dragon",
  shark: "Shark",
  monster: "Monster",
  monsterDog: "Monster Dog",
  threeHeadedMonster: "3-Headed Monster",
  phoenix: "Phoenix",
  griffin: "Griffin",
  shadowWolf: "Shadow Wolf",
  electricTiger: "Electric Tiger",
  unicorn: "Unicorn",
  cyberDragon: "Cyber Dragon",
  galacticWhale: "Galactic Whale",
  sphinx: "Sphinx",
  crystalGolem: "Crystal Golem",
  goldenChimera: "Golden Chimera",
  frostbiteBear: "Frostbite Bear",
  starlightSerpent: "Starlight Serpent",
  emberWyrm: "Ember Wyrm",
  novaCheetah: "Nova Cheetah",
  cosmicKraken: "Cosmic Kraken",
  stormbringerEagle: "Stormbringer Eagle",
  luminousLynx: "Luminous Lynx",
  thunderhoofRhino: "Thunderhoof Rhino",
  celestialKitsune: "Celestial Kitsune",
  quantumScorpion: "Quantum Scorpion",
  auroraBasilisk: "Aurora Basilisk",
  cosmicMantis: "Cosmic Mantis",
  stellarMinotaur: "Stellar Minotaur",
  novaHarpy: "Nova Harpy",
  celestialHydra: "Celestial Hydra",
  galacticGriffin: "Galactic Griffin",
  quantumPhoenix: "Quantum Phoenix",
  cosmicGargoyle: "Cosmic Gargoyle",
  stellarChimera: "Stellar Chimera",
  auroraDragon: "Aurora Dragon",
  novaWyrm: "Nova Wyrm",
  galacticSphinx: "Galactic Sphinx",
  stellarGolem: "Stellar Golem",
  quantumPhoenixHigh: "Quantum Phoenix",
  auroraBasiliskHigh: "Aurora Basilisk",
  celestialHydraHigh: "Celestial Hydra",
  galacticMinotaur: "Galactic Minotaur",
  novaHarpyHigh: "Nova Harpy",
  cosmicWyrm: "Cosmic Wyrm",
  stellarSphinx: "Stellar Sphinx",
  quantumGargoyle: "Quantum Gargoyle",
  auroraChimera: "Aurora Chimera",
  galacticDragon: "Galactic Dragon",
  cosmicPhoenix: "Cosmic Phoenix",
  moonWind: "Moon Wind" 
};
const pets = {
  cat: { price: 5, image: "images/cat.webp", type: "clicks" },
  dog: { price: 20, image: "images/dog.webp", type: "clicks" },
  cow: { price: 100, image: "images/cow.webp", type: "clicks" },
  lion: { price: 300, image: "images/lion.webp", type: "clicks" },
  dragon: { price: 20, image: "images/dragon.webp", type: "diamonds", exclusive: true },
  shark: { price: 5000, image: "images/shark.webp", type: "clicks" },
  monster: { price: 10000, image: "images/monster.webp", type: "clicks" },
  monsterDog: { price: 70000, image: "images/Monster Dog.webp", type: "clicks" },
  threeHeadedMonster: { price: 100000, image: "images/3-Headed monster.webp", type: "clicks" },
  unicorn: { price: 300000, image: "images/unicorn.webp", type: "clicks", multiplier: 55 },
  electricTiger: { price: 1200, image: "images/electricTiger.webp", type: "diamonds", exclusive: true, multiplier: 75 },
  shadowWolf: { price: 1000, image: "images/shadowWolf.webp", type: "diamonds", exclusive: true, multiplier: 50 },
  griffin: { price: 400000, image: "images/griffin.webp", type: "clicks", multiplier: 65 },
  cyberDragon: { price: 1500, image: "images/cyberDragon.webp", type: "diamonds", exclusive: true, multiplier: 80 },
  phoenix: { price: 500000, image: "images/phoenix.webp", type: "clicks", multiplier: 80 },
  galacticWhale: { price: 2000, image: "images/galacticWhale.webp", type: "diamonds", exclusive: true, multiplier: 90 },
  sphinx: { price: 600000, image: "images/sphinx.webp", type: "clicks", multiplier: 90 },
  crystalGolem: { price: 700000, image: "images/crystalGolem.webp", type: "clicks", multiplier: 95 },
  goldenChimera: { price: 10000, image: "images/goldenChimera.webp", type: "diamonds", exclusive: true, multiplier: 500 },
  frostbiteBear: { price: 20000, image: "images/frostbiteBear.webp", type: "diamonds", exclusive: true, multiplier: 600 },
  starlightSerpent: { price: 1000000, image: "images/starlightSerpent.webp", type: "clicks", multiplier: 700 },
  emberWyrm: { price: 30000, image: "images/emberWyrm.webp", type: "diamonds", exclusive: true, multiplier: 800 },
  novaCheetah: { price: 1500000, image: "images/novaCheetah.webp", type: "clicks", multiplier: 900 },
  cosmicKraken: { price: 40000, image: "images/cosmicKraken.webp", type: "diamonds", exclusive: true, multiplier: 1000 },
  stormbringerEagle: { price: 2000000, image: "images/stormbringerEagle.webp", type: "clicks", multiplier: 1200 },
  luminousLynx: { price: 50000, image: "images/luminousLynx.webp", type: "diamonds", exclusive: true, multiplier: 1500 },
  thunderhoofRhino: { price: 3000000, image: "images/thunderhoofRhino.webp", type: "clicks", multiplier: 1800 },
  celestialKitsune: { price: 60000, image: "images/celestialKitsune.webp", type: "diamonds", exclusive: true, multiplier: 2500 },
  quantumScorpion: { price: 4000000, image: "images/quantumScorpion.webp", type: "clicks", multiplier: 3000 },
  auroraBasilisk: { price: 80000, image: "images/auroraBasilisk.webp", type: "diamonds", exclusive: true, multiplier: 4000 },
  cosmicMantis: { price: 5000000, image: "images/cosmicMantis.webp", type: "clicks", multiplier: 5000 },
  stellarMinotaur: { price: 100000, image: "images/stellarMinotaur.webp", type: "diamonds", exclusive: true, multiplier: 6000 },
  novaHarpy: { price: 6000000, image: "images/novaHarpy.webp", type: "clicks", multiplier: 8000 },
  celestialHydra: { price: 120000, image: "images/celestialHydra.webp", type: "diamonds", exclusive: true, multiplier: 10000 },
  galacticGriffin: { price: 8000000, image: "images/galacticGriffin.webp", type: "clicks", multiplier: 15000 },
  quantumPhoenix: { price: 150000, image: "images/quantumPhoenix.webp", type: "diamonds", exclusive: true, multiplier: 20000 },
  cosmicGargoyle: { price: 10000000, image: "images/cosmicGargoyle.webp", type: "clicks", multiplier: 25000 },
  stellarChimera: { price: 180000, image: "images/stellarChimera.webp", type: "diamonds", exclusive: true, multiplier: 30000 },
  auroraDragon: { price: 12000000, image: "images/auroraDragon.webp", type: "clicks", multiplier: 40000 },
  novaWyrm: { price: 200000, image: "images/novaWyrm.webp", type: "diamonds", exclusive: true, multiplier: 50000 },
  galacticSphinx: { price: 15000000, image: "images/galacticSphinx.webp", type: "clicks", multiplier: 60000 },
  stellarGolem: { price: 20000000, image: "images/stellarGolem.webp", type: "clicks", multiplier: 100000 },
  quantumPhoenixHigh: { price: 300000, image: "images/quantumPhoenixHigh.webp", type: "diamonds", exclusive: true, multiplier: 150000 },
  auroraBasiliskHigh: { price: 25000000, image: "images/auroraBasiliskHigh.webp", type: "clicks", multiplier: 200000 },
  celestialHydraHigh: { price: 350000, image: "images/celestialHydraHigh.webp", type: "diamonds", exclusive: true, multiplier: 250000 },
  galacticMinotaur: { price: 30000000, image: "images/galacticMinotaur.webp", type: "clicks", multiplier: 300000 },
  novaHarpyHigh: { price: 400000, image: "images/novaHarpyHigh.webp", type: "diamonds", exclusive: true, multiplier: 400000 },
  cosmicWyrm: { price: 40000000, image: "images/cosmicWyrm.webp", type: "clicks", multiplier: 500000 },
  stellarSphinx: { price: 450000, image: "images/stellarSphinx.webp", type: "diamonds", exclusive: true, multiplier: 600000 },
  quantumGargoyle: { price: 50000000, image: "images/quantumGargoyle.webp", type: "clicks", multiplier: 700000 },
  auroraChimera: { price: 800000, image: "images/auroraChimera.webp", type: "diamonds", exclusive: true, multiplier: 800000 },
  galacticDragon: { price: 80000000, image: "images/galacticDragon.webp", type: "clicks", multiplier: 900000 },
  cosmicPhoenix: { price: 10000000, image: "images/cosmicPhoenix.webp", type: "diamonds", exclusive: true, multiplier: 1000000 },

  moonWind: { price: 300000000, image: "images/moonWind.webp", type: "diamonds", lastPet: true, multiplier: 100000000 }
};
const counter = document.getElementById("counter");

const petMultipliers = {
  cat: 2,
  dog: 3,
  cow: 4,
  lion: 5,
  dragon: 6,
  shark: 8,
  monster: 15,
  monsterDog: 25,
  threeHeadedMonster: 35,
  unicorn: 55,
  electricTiger: 75,
  shadowWolf: 50,
  griffin: 65,
  cyberDragon: 80,
  phoenix: 80,
  galacticWhale: 90,
  sphinx: 90,
  crystalGolem: 95,
  goldenChimera: 500,
  frostbiteBear: 600,
  starlightSerpent: 700,
  emberWyrm: 800,
  novaCheetah: 900,
  cosmicKraken: 1000,
  stormbringerEagle: 1200,
  luminousLynx: 1500,
  thunderhoofRhino: 1800,
  celestialKitsune: 2500,
  quantumScorpion: 3000,
  auroraBasilisk: 4000,
  cosmicMantis: 5000,
  stellarMinotaur: 6000,
  novaHarpy: 8000,
  celestialHydra: 10000,
  galacticGriffin: 15000,
  quantumPhoenix: 20000,
  cosmicGargoyle: 25000,
  stellarChimera: 30000,
  auroraDragon: 40000,
  novaWyrm: 50000,
  galacticSphinx: 60000,
  stellarGolem: 100000,
  quantumPhoenixHigh: 150000,
  auroraBasiliskHigh: 200000,
  celestialHydraHigh: 250000,
  galacticMinotaur: 300000,
  novaHarpyHigh: 400000,
  cosmicWyrm: 500000,
  stellarSphinx: 600000,
  quantumGargoyle: 700000,
  auroraChimera: 800000,
  galacticDragon: 900000,
  cosmicPhoenix: 1000000,
  moonWind: 100000000
};
const petImpact = () => {
  // Base impact
  let baseImpact = 1;

  // Total impact from active pets
  let totalPetMultiplier = 1;
  activePet.forEach((pet) => {
    if (pet in petMultipliers) {
      totalPetMultiplier += petMultipliers[pet];
    }
  });

  let totalImpact = baseImpact * totalPetMultiplier * clickMultiplier;
  clickCount += totalImpact;
  updateClickCount();
};

const petsContainer = document.getElementById("pets");

Object.keys(pets).forEach((pet) => {
  const petData = pets[pet]; // Get the details for each pet
  const petDiv = document.createElement("div");
  petDiv.classList.add("pets");

  petDiv.innerHTML = `

    <p class="petPowers">${formatNumber(petMultipliers[pet])}×</p>
    <img class="petImage" src="${petData.image}" alt="${pet}" />
    <p>${petDisplayNames[pet]}</p>
    <md-filled-tonal-button class="purchase" 
      onclick="${petData.exclusive ? `buyExclusive('${pet}')` : `buy('${pet}')`}">
      Buy (${formatNumber(petData.price)} ${petData.type})
    </md-filled-tonal-button>
  `;

  petsContainer.appendChild(petDiv);
});

petPurchased.forEach((pet) => {
  const button = document.querySelector(
    `md-filled-tonal-button[onclick="buy('${pet}')"]`,
  );
  if (button) {
    button.disabled = true;
    button.innerHTML = "Purchased";
  }
  const exclusiveButton = document.querySelector(
    `md-filled-tonal-button[onclick="buyExclusive('${pet}')"]`,
  );
  if (exclusiveButton) {
    exclusiveButton.disabled = true;
    exclusiveButton.innerHTML = "Purchased";
  }
});

let currentSortOrder = "asc"; // Default to ascending

const sortPets = () => {
  petPurchased.sort((a, b) => {
    if (currentSortOrder === "asc") {
      return petMultipliers[a] - petMultipliers[b];
    } else {
      return petMultipliers[b] - petMultipliers[a];
    }
  });
};

const renderPets = () => {
  sortPets(); // Sort pets based on the current sort order

  const petsContainer = document.getElementById("wrap");
  petsContainer.innerHTML = ""; // Clear existing content

  petPurchased.forEach((pet) => {
    const petDiv = document.createElement("div");
    petDiv.classList.add("pet");
    petDiv.id = pet;
    petDiv.innerHTML = `
      <img class="petImage" src="${pets[pet].image}" alt="${pet}" />
      <p style="display:flex; justify-content:center;">${petDisplayNames[pet]}</p>
      <md-filled-button class="eqp" onclick="petEquip('${pet}')" id="equip-${pet}">Equip</md-filled-button>
    `;
    petsContainer.appendChild(petDiv);
  });

  activePet.forEach((pet) => {
    const button = document.getElementById(`equip-${pet}`);
    if (button) {
      button.disabled = true;
      button.innerHTML = "Equipped";
    }
  });
};

// Initialize sort on load
document.addEventListener("DOMContentLoaded", () => {
  sortPets();
  renderPets();
});

const sortOptions = document.getElementById("sort-options");
sortOptions.addEventListener("change", (event) => {
  currentSortOrder = event.target.value; // Update the sort order
  renderPets(); // Refresh the pet display
});
const buy = (pet) => {
  if (petPurchased.includes(pet)) {
    popup("You already purchased the pet", "");
    return;
  }

  const petCost = pets[pet].price;
  const button = document.querySelector(
    `md-filled-tonal-button[onclick="buy('${pet}')"]`,
  );

  if (clickCount >= petCost) {
    clickCount -= petCost;
    updateClickCount();
    popup(`You bought the ${petDisplayNames[pet]}!`, "");
    if(pets[pet].lastPet) {
      popup("You purchased the last and final pet of the game!!" , "");
    }
    petPurchased.push(pet);
    renderPets();
    // Save purchased pets to localStorage
    localStorage.setItem("petPurchased", JSON.stringify(petPurchased));
    button.innerHTML = "Purchased";
    button.disabled = true;
  } else {
    popup(`Not enough clicks to buy ${petDisplayNames[pet]}`, "");
  }
};

const buyExclusive = (pet) => {
  const petCost = pets[pet].price;
  const button = document.querySelector(
    `md-filled-tonal-button[onclick="buyExclusive('${pet}')"]`,
  );

  if (diamondCount >= petCost) {
    diamondCount -= petCost;
    updateDiamondCount();
    petPurchased.push(pet);

    renderPets();
    // Save purchased pets to localStorage
    localStorage.setItem("petPurchased", JSON.stringify(petPurchased));

    button.disabled = true;
    button.innerHTML = "Purchased";
    popup(`You purchased the exclusive ${petDisplayNames[pet]}!`, "");
  } else {
    popup("Not enough diamonds to purchase this item.", "");
  }
};

  const displayEquippedPets = () => {

  const equippedDiv = document.getElementById("equipped");
  if(activePet.length >= 1) {
  equippedDiv.style.display = "flex";
  equippedDiv.innerHTML = "";
  }
  activePet.forEach((pet) => {
    const petImage = document.createElement("img");
    petImage.src = `${pets[pet].image}`;
    petImage.alt = pet;
    petImage.classList.add("eqPet");

    const petContainer = document.createElement("div");
    petContainer.classList.add("equipped-pet");
    petContainer.appendChild(petImage);

    equippedDiv.appendChild(petContainer);
  });
};

const petEquip = (pet) => {

  if (canEquipTwoPets && activePet.length < 2) {
    activePet.push(pet);
  } else if (canEquipFivePets && activePet.length < 5) {
    activePet.push(pet);
  }  else if (canEquipTenPets && activePet.length < 10) {
    activePet.push(pet);
  } else {
    activePet.forEach((p) => {
      let prevButton = document.getElementById(`equip-${p}`);
      prevButton.disabled = false;
      prevButton.innerHTML = "equip";
    });
    activePet = [pet];
  }

  let but = document.getElementById(`equip-${pet}`);
  but.disabled = true;
  but.innerHTML = "Equipped";
  if (activePet.length === 2) {
    activePet.forEach((p) => {
      let button = document.getElementById(`equip-${p}`);
      button.disabled = true;
      button.innerHTML = "Equipped";
    });
  }

  // Save equipped pets to localStorage
  localStorage.setItem("activePet", JSON.stringify(activePet));

  displayEquippedPets();
};

const unequipAll = () => {
  activePet = [];
  const equipButtons = document.querySelectorAll("[id^='equip-']");

  equipButtons.forEach((button) => {
    button.innerHTML = "Equip";
    button.disabled = false;
  });
  document.getElementById("equipped").style.display = "none";

  // Save equipped pets to localStorage
  localStorage.setItem("activePet", JSON.stringify(activePet));
};

// When the page loads, display any equipped pets
displayEquippedPets();

function openNav() {
  const sidenav = document.getElementById("mySidenav");
  const scrim = document.getElementById("scrim");

  // Animate the sidenav sliding in from the left
  anime({
    targets: sidenav,
    translateX: ["-270px", "0"], // Slide from -270px (off-screen) to 0 (on-screen)
    easing: "easeOutQuad", // Smooth ease-out effect
    duration: 150, // Animation duration
    begin: () => {
      sidenav.style.left = "0"; // Ensure it's visible
      scrim.style.display = "block"; // Show the scrim when animation starts
    },
  });
}

function closeNav() {
  const sidenav = document.getElementById("mySidenav");
  const scrim = document.getElementById("scrim");

  // Animate the sidenav sliding out to the left
  anime({
    targets: sidenav,
    translateX: ["0", "-270px"], // Slide from 0 (on-screen) to -270px (off-screen)
    easing: "easeInQuad", // Smooth ease-in effect
    duration: 150, // Animation duration
    complete: () => {
      sidenav.style.left = "-270px"; // Hide it off-screen again
      scrim.style.display = "none"; // Hide the scrim when animation is complete
    },
  });
}
const show = () => {
  let dialog = document.getElementById("sortDialog");
  dialog.show();
};
let autoClickerActive = false; // Track auto-clicker status
let autoClickInterval; // Store interval ID

const autoClick = () => {
  if (autoClickerActive) {
    // Disable auto-clicker if already active
    clearInterval(autoClickInterval);
    document.getElementById("clicker").disabled = false;
    autoClickerActive = false;
    document.getElementById("auto").innerHTML = "Auto Clicker not active";
  } else {
    // Enable auto-clicker
    autoClickInterval = setInterval(() => {
      count(); // Assuming count() handles clicks
    }, 1000);
    autoClickerActive = true;
    document.getElementById("auto").innerHTML = "Auto Clicker active";
    document.getElementById("clicker").disabled = true;
  }
};

let superAutoClickerActive = false; // Track auto-clicker status
let superAutoClickInterval; // Store interval ID
const superAutoClick = () => {
  if (superAutoClickerActive) {
    // Disable auto-clicker if already active
    clearInterval(superAutoClickInterval);
    document.getElementById("clicker").disabled = false;
    superAutoClickerActive = false;
    document.getElementById("auto").innerHTML = "Super Auto Clicker not active";
  } else {
    // Enable auto-clicker
    superAutoClickInterval = setInterval(() => {
      count(); // Assuming count() handles clicks
    }, 100);
    superAutoClickerActive = true;
    document.getElementById("auto2").innerHTML = "Super Auto Clicker active";
    document.getElementById("clicker").disabled = true;
  }
};
