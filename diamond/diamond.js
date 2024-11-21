let clickCount = 0; // Total clicks in the game
let diamondCount = parseInt(localStorage.getItem("diamondCount")) || 0;

// Update diamond count in the UI and localStorage
const updateDiamondCount = () => {
    document.getElementById("diamondCounter").innerHTML = `${diamondCount} <span style="font-size: 18px;" class="material-icons">diamond</span>`;
    localStorage.setItem("diamondCount", diamondCount);
};

const clickerClicked = () => {
  clickCount++;
  let totalMultiplier = 1;

  activePet.forEach((pet) => {
    if (diamondMultipliers[pet]) {
      totalMultiplier += diamondMultipliers[pet];
    } else {
      console.warn(`${pet} has no multiplier defined`);
    }
  });

  awardDiamonds(totalMultiplier);
};
const awardDiamonds = (totalMultiplier) => {
  if (clickCount % 25 === 0) {
    diamondCount += totalMultiplier;
    diamondCount = Math.floor(diamondCount);
    updateDiamondCount();
    popup(`You earned ${Math.floor(totalMultiplier)} diamonds!`, "");
  }
};
document.getElementById("clicker").addEventListener("click", clickerClicked);

document.addEventListener("DOMContentLoaded", () => {
    updateDiamondCount();
});

let activePet = JSON.parse(localStorage.getItem("activePet")) || [];
console.log(activePet)

  const displayEquippedPets = () => {

  const equippedDiv = document.getElementById("equipped");
  if(activePet.length >= 1) {
  equippedDiv.style.display = "flex";
  equippedDiv.innerHTML = "";
  }
  activePet.forEach((pet) => {
    const petImage = document.createElement("img");
petImage.src = `../images/${pet}.webp`;
    petImage.alt = pet;
    petImage.classList.add("eqPet");

    const petContainer = document.createElement("div");
    petContainer.classList.add("equipped-pet");
    petContainer.appendChild(petImage);

    equippedDiv.appendChild(petContainer);
  });
};
displayEquippedPets();

const diamondMultipliers = {
  cat: 1,
  dog: 1,
  cow: 1,
  lion: 1,
  dragon: 2,
  shark: 1,
  monster: 1,
  monsterDog: 2,
  threeHeadedMonster: 5,
  unicorn: 10,
  electricTiger: 20,
  shadowWolf:20,
  griffin: 30,
  cyberDragon: 32,
  phoenix: 34,
  galacticWhale: 36,
  sphinx: 37,
  crystalGolem: 37,
  goldenChimera: 38,
  frostbiteBear: 40,
  starlightSerpent: 42,
  emberWyrm: 44,
  novaCheetah: 45,
  cosmicKraken: 50,
  stormbringerEagle: 120,
  luminousLynx: 150,
  thunderhoofRhino: 180,
  celestialKitsune: 250,
  quantumScorpion: 300,
  auroraBasilisk: 400,
  cosmicMantis: 500,
  stellarMinotaur: 600,
  novaHarpy: 800,
  celestialHydra: 1000,
  galacticGriffin: 1500,
  quantumPhoenix: 2000,
  cosmicGargoyle: 2500,
  stellarChimera: 3000,
  auroraDragon: 4000,
  novaWyrm: 5000,
  galacticSphinx: 6000,
  stellarGolem: 10000,
  quantumPhoenixHigh: 15000,
  auroraBasiliskHigh: 20000,
  celestialHydraHigh: 25000,
  galacticMinotaur: 30000,
  novaHarpyHigh: 40000,
  cosmicWyrm: 50000,
  stellarSphinx: 60000,
  quantumGargoyle: 70000,
  auroraChimera: 80000,
  galacticDragon: 90000,
  cosmicPhoenix: 100000,
  moonWind: 10000000
};
