function render(html) {
  const outBox = document.getElementById("out");
  outBox.innerHTML = html;
}


function greet() {
  let name = prompt("What is your name?");
  if (name && name.trim() !== "") {
    render("Hello, " + name + "!");
  } else {
    render("👋 Hi there, stranger!");
  }
}

function averageNumbers() {
  let input = prompt("Enter numbers separated by commas:");
  if (!input) return render("❌ No input given.");

  let nums = input.split(",").map(n => Number(n.trim())).filter(n => !isNaN(n));
  if (nums.length === 0) return render("❌ Invalid numbers.");

  let avg = nums.reduce((a, b) => a + b, 0) / nums.length;
  render(`Numbers: ${nums.join(", ")} <br> Average: <strong>${avg.toFixed(2)}</strong>`);
}

function timeOfDay() {
  let hour = new Date().getHours();
  let msg = hour < 12 ? "Good morning!" : hour < 18 ? "Good afternoon!" : "Good evening!";
  render(msg);
}

function randomBetween() {
  let min = Number(prompt("Minimum number:"));
  let max = Number(prompt("Maximum number:"));

  if (isNaN(min) || isNaN(max) || min >= max) {
    render("❌ Invalid range.");
    return;
  }

  let rand = Math.floor(Math.random() * (max - min + 1)) + min;
  render(`🎲 Random number between ${min} and ${max}: <strong>${rand}</strong>`);
}

function clearOutput() {
  const outBox = document.getElementById("out");
  outBox.innerHTML = "Output cleared.";
  outBox.style.color = "";
  outBox.style.backgroundColor = "";
}


function changeTitle() {
  const title = document.querySelector("header h1");
  title.textContent = "🚀 Functions by Charlie!";
}

let colorIndex = 0;
const colors = ["red", "green", "orange", "blue", "purple"];

function cycleColor() {
  const outBox = document.getElementById("out");
  outBox.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}

function randomBgColor() {
  const outBox = document.getElementById("out");
  outBox.classList.remove("bg-light");

  const randomColor = "#" + Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");

  // Change background color
  outBox.style.backgroundColor = randomColor;

}
function doubleNumber() {
  let input = prompt("Enter a number to double:");
  let num = Number(input);

  if (isNaN(num)) {
    render("❌ That’s not a valid number.");
  } else {
    render(`✅ ${num} doubled is <strong>${num * 2}</strong>.`);
  }
}

document.getElementById("btnGreet").addEventListener("click", greet);
document.getElementById("btnAvg").addEventListener("click", averageNumbers);
document.getElementById("btnTime").addEventListener("click", timeOfDay);
document.getElementById("btnRandom").addEventListener("click", randomBetween);
document.getElementById("btnClear").addEventListener("click", clearOutput);

document.getElementById("btnChangeTitle").addEventListener("click", changeTitle);
document.getElementById("btnCycleColor").addEventListener("click", cycleColor);
document.getElementById("btnBgColor").addEventListener("click", randomBgColor);
document.getElementById("btnDouble").addEventListener("click", doubleNumber);
