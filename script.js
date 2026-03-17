function generatePlan(){

let weight = parseFloat(document.getElementById("weight").value);
let heightCm = parseFloat(document.getElementById("height").value);

if(!weight || !heightCm){
alert("Enter weight and height");
return;
}

let height = heightCm / 100;

let bmi = weight / (height * height);

let workout = "";
let diet = "";
let days = "";


// UNDERWEIGHT
if(bmi < 18.5){

days = "120";

workout = `
<h3>Muscle Gain Workout</h3>

<div class="workout-grid">

<div class="day">
<h4>Day 1 Chest</h4>
<ul>
<li>Bench Press</li>
<li>Incline Dumbbell Press</li>
<li>Chest Fly</li>
<li>Pushups</li>
</ul>
</div>

<div class="day">
<h4>Day 2 Back</h4>
<ul>
<li>Pull Ups</li>
<li>Lat Pulldown</li>
<li>Barbell Row</li>
<li>Deadlift</li>
</ul>
</div>

<div class="day">
<h4>Day 3 Legs</h4>
<ul>
<li>Squats</li>
<li>Leg Press</li>
<li>Lunges</li>
<li>Leg Curl</li>
</ul>
</div>

<div class="day">
<h4>Day 4 Shoulders</h4>
<ul>
<li>Shoulder Press</li>
<li>Lateral Raises</li>
<li>Front Raises</li>
<li>Shrugs</li>
</ul>
</div>

<div class="day">
<h4>Day 5 Arms</h4>
<ul>
<li>Bicep Curl</li>
<li>Hammer Curl</li>
<li>Tricep Pushdown</li>
<li>Overhead Extension</li>
</ul>
</div>

<div class="day">
<h4>Day 6 Core</h4>
<ul>
<li>Plank</li>
<li>Russian Twists</li>
<li>Leg Raises</li>
<li>Mountain Climbers</li>
</ul>
</div>

</div>
`;

diet = `
<div class="workout-grid">
<div class="day">
<h4>Trainer Recommended Diet</h4>
<ul>
<li>Eggs</li>
<li>Chicken</li>
<li>Rice</li>
<li>Milk</li>
<li>Peanut Butter</li>
<li>Banana</li>
</ul>
</div>
</div>
`;

}


// NORMAL
else if(bmi <= 24.9){

days = "60";

workout = `
<h3>Balanced Fitness Workout</h3>

<div class="workout-grid">

<div class="day">
<h4>Day 1 Chest</h4>
<ul>
<li>Bench Press</li>
<li>Incline Press</li>
<li>Chest Fly</li>
<li>Pushups</li>
</ul>
</div>

<div class="day">
<h4>Day 2 Back</h4>
<ul>
<li>Lat Pulldown</li>
<li>Seated Row</li>
<li>Deadlift</li>
<li>Pull Ups</li>
</ul>
</div>

<div class="day">
<h4>Day 3 Legs</h4>
<ul>
<li>Squats</li>
<li>Lunges</li>
<li>Leg Press</li>
<li>Leg Curl</li>
</ul>
</div>

<div class="day">
<h4>Day 4 Shoulders</h4>
<ul>
<li>Shoulder Press</li>
<li>Lateral Raises</li>
<li>Front Raises</li>
<li>Shrugs</li>
</ul>
</div>

<div class="day">
<h4>Day 5 Arms</h4>
<ul>
<li>Bicep Curl</li>
<li>Hammer Curl</li>
<li>Tricep Pushdown</li>
<li>Tricep Dips</li>
</ul>
</div>

<div class="day">
<h4>Day 6 Core</h4>
<ul>
<li>Plank</li>
<li>Mountain Climbers</li>
<li>Russian Twists</li>
<li>Running 20 min</li>
</ul>
</div>

</div>
`;

diet = `
<div class="workout-grid">
<div class="day">
<h4>Trainer Recommended Diet</h4>
<ul>
<li>Chicken / Fish</li>
<li>Vegetables</li>
<li>Fruits</li>
<li>Whole grains</li>
<li>Eggs</li>
</ul>
</div>
</div>
`;

}


// OVERWEIGHT
else{

days = "90";

workout = `
<h3>Fat Loss Workout</h3>

<div class="workout-grid">

<div class="day">
<h4>Day 1 Chest + Cardio</h4>
<ul>
<li>Bench Press</li>
<li>Pushups</li>
<li>Chest Fly</li>
<li>Treadmill 20 min</li>
</ul>
</div>

<div class="day">
<h4>Day 2 Back + Cardio</h4>
<ul>
<li>Lat Pulldown</li>
<li>Seated Row</li>
<li>Deadlift</li>
<li>Row Machine 20 min</li>
</ul>
</div>

<div class="day">
<h4>Day 3 Legs</h4>
<ul>
<li>Squats</li>
<li>Leg Press</li>
<li>Lunges</li>
<li>Cycling 20 min</li>
</ul>
</div>

<div class="day">
<h4>Day 4 Shoulders</h4>
<ul>
<li>Shoulder Press</li>
<li>Lateral Raises</li>
<li>Front Raises</li>
<li>Jump Rope 15 min</li>
</ul>
</div>

<div class="day">
<h4>Day 5 HIIT</h4>
<ul>
<li>Burpees</li>
<li>Mountain Climbers</li>
<li>Jump Squats</li>
<li>Battle Rope</li>
</ul>
</div>

<div class="day">
<h4>Day 6 Core</h4>
<ul>
<li>Plank</li>
<li>Russian Twists</li>
<li>Leg Raises</li>
<li>Running 25 min</li>
</ul>
</div>

</div>
`;

diet = `
<div class="workout-grid">
<div class="day">
<h4>Trainer Recommended Diet</h4>
<ul>
<li>Lean Protein</li>
<li>Vegetables</li>
<li>Fruits</li>
<li>Oatmeal</li>
<li>Low Sugar Foods</li>
<li>Drink 3L Water Daily</li>
</ul>
</div>
</div>
`;

}

document.getElementById("workoutResult").innerHTML = workout;
document.getElementById("dietResult").innerHTML = diet;

document.getElementById("daysResult").innerHTML = `
<div class="workout-grid">
<div class="day">
<h4>Estimated Transformation Time</h4>
<h2>${days} Days</h2>
</div>
</div>
`;

document.getElementById("resultSection").style.display = "block";

}


// BMI FUNCTION
function calculateBMI(){

let weight = parseFloat(document.getElementById("weight").value);
let heightCm = parseFloat(document.getElementById("height").value);

if(!weight || !heightCm){
alert("Enter weight and height");
return;
}

let height = heightCm / 100;

let bmi = weight / (height * height);

let category = "";

if(bmi < 18.5) category = "Underweight";
else if(bmi <= 24.9) category = "Normal";
else if(bmi <= 29.9) category = "Overweight";
else category = "Obese";

document.getElementById("bmiResult").innerHTML =
"Your BMI: " + bmi.toFixed(2) + " (" + category + ")";

}