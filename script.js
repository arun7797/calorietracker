function showGoalOptions() {
  const goal = document.getElementById("goal").value;
  const bulkOptions = document.getElementById("bulkOptions");
  const loseOptions = document.getElementById("loseOptions");

  if (goal === "gain") {
    bulkOptions.style.display = "block";
    loseOptions.style.display = "none"; // Hide lose options if 'Gain Weight' is selected
  } else if (goal === "lose") {
    loseOptions.style.display = "block";
    bulkOptions.style.display = "none"; // Hide bulk options if 'Lose Weight' is selected
  } else {
    bulkOptions.style.display = "none";
    loseOptions.style.display = "none"; // Hide both options if 'Maintain Weight' is selected
  }
}

function calculateCalories() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const age = parseInt(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  const activity = parseFloat(document.getElementById("activity").value);
  const goal = document.getElementById("goal").value;
  const bulkType = document.getElementById("bulkType") ? document.getElementById("bulkType").value : null;
  const cutType = document.getElementById("cutType") ? document.getElementById("cutType").value : null;

  let bmr;

  // Calculate BMR based on gender
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  // Total daily calorie expenditure based on activity level
  const tdee = bmr * activity;
  let calorieRange;

  // Adjust based on goal
  if (goal === "maintain") {
    calorieRange = `${Math.round(tdee)} calories`;
  } else if (goal === "lose") {
    if (cutType === "flexible") {
      calorieRange = `${Math.round(tdee - 300)} to ${Math.round(tdee - 200)} calories (for flexible cut)`;
    } else if (cutType === "strict") {
      calorieRange = `${Math.round(tdee - 600)} to ${Math.round(tdee - 500)} calories (for strict cut, recommended for 5-6 weeks)`;
    } else if (cutType === "extreme") {
      calorieRange = `${Math.round(tdee - 1000)} calories (for extreme cut, recommended for 4 weeks)`;
    }
  } else if (goal === "gain") {
    if (bulkType === "lean") {
      calorieRange = `${Math.round(tdee + 200)} to ${Math.round(tdee + 400)} calories (for lean bulk)`;
    } else if (bulkType === "dirty") {
      calorieRange = `${Math.round(tdee + 700)} to ${Math.round(tdee + 800)} calories (for dirty bulk)`;
    }
  }

  // Display the result
  document.getElementById("result").innerText = `Your recommended calorie intake is ${calorieRange}.`;
}









