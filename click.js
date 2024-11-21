// Function to format numbers into human-readable form
const formatNumber = (num) => {
  if (num < 1e3) return num; // Less than a thousand
  if (num >= 1e3 && num < 1e6) return +(num / 1e3).toFixed(1) + "K"; // Thousand
  if (num >= 1e6 && num < 1e9) return +(num / 1e6).toFixed(1) + "M"; // Million
  if (num >= 1e9 && num < 1e12) return +(num / 1e9).toFixed(1) + "B"; // Billion
  if (num >= 1e12 && num < 1e15) return +(num / 1e12).toFixed(1) + "T"; // Trillion
  if (num >= 1e15 && num < 1e18) return +(num / 1e15).toFixed(1) + "Q"; // Quadrillion
  if (num >= 1e18) return +(num / 1e18).toFixed(1) + "Qu"; // Quintillion and beyond
  return num;
};
let clickCount = parseInt(localStorage.getItem("clickCount")) || 0; // Use stored clickCount or default to 100
const updateClickCount = () => {
  if(clickCount <= 0) {
  clickCount = 0;    
  }
  document.getElementById("counter").innerHTML = formatNumber(clickCount);
  localStorage.setItem("clickCount", clickCount);
};
updateClickCount();
let diamondCount = parseInt(localStorage.getItem("diamondCount")) || 0;
let diamondCounter = document.getElementById("diamondCounter");
// Update the diamond count display
const updateDiamondCount = () => {
  let FdiamondCount = formatNumber(diamondCount);

  if(diamondCount <= 0) {
  FdiamondCount = 0;    
  }
  diamondCounter.innerHTML = `${FdiamondCount} <span style= "font-size: 18px;" class= "material-icons">diamond</span>`;

  localStorage.setItem("diamondCount", diamondCount);
};
updateDiamondCount();
let diamondMultiplier = 1;
const grantDiamonds = (amount) => {
  diamondCount += amount * diamondMultiplier;
  updateDiamondCount();
};
const count = () => {
  addExp(200);
  petImpact();
  achieved();
};

clicker.addEventListener("click", count);
document.getElementById("market").addEventListener("click", function () {
  document.getElementById("shop").style.display = "grid";
});
document.getElementById("cl").addEventListener("click", function () {
  document.getElementById("box").style.display = "none";
});
