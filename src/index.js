function hypertrophy() {
    // Remove initial buttons once one of them is clicked
    let hypertrophy = document.getElementById("hypertrophy");
    hypertrophy.remove();
    let strength = document.getElementById("strength");
    strength.remove();
    let selection = document.getElementById("selection");
    selection.remove();
    // Insert new title above newly created buttons
    let input = document.getElementById('input');
    const muscleSelection = document.createElement('h1');
    muscleSelection.innerText = "Select a muscle group"
    input.appendChild(muscleSelection);
    //Create buttons for selection of each muscle group
    const chestAndTris = document.createElement('div');
    chestAndTris.innerHTML = "<button class='workout-button' onclick='chestDay()'><h3>Chest & Triceps</h3></button>";
    input.appendChild(chestAndTris);

    const backAndBis = document.createElement('div');
    backAndBis.innerHTML = "<button class='workout-button' onclick='backDay()'><h3>Back & Biceps</h3></button>";
    input.appendChild(backAndBis);

    const shoulders = document.createElement('div');
    shoulders.innerHTML = "<button class='workout-button' onclick='shoulderDay()'><h3>Shoulders & Abs</h3></button>";
    input.appendChild(shoulders);

    const legs = document.createElement('div');
    legs.innerHTML = "<button class='workout-button' onclick='legDay()'><h3>Legs</h3></button>";
    input.appendChild(legs);
}

function strength() {
    let strength = document.getElementById("strength");
    strength.remove();
    let hypertrophy = document.getElementById("hypertrophy");
    hypertrophy.remove();
    let selection = document.getElementById("selection");
    selection.remove();

    let input = document.getElementById('input');
    const muscleSelection = document.createElement('h1');
    muscleSelection.innerText = "Select a muscle group"
    input.appendChild(muscleSelection);

    const pushday = document.createElement('div');
    pushday.innerHTML = "<button class='workout-button' onclick='pushDay()'><h3>Push</h3><p>Push workouts train all the pushing muscles in the upper body: chest, shoulders, and triceps.</p></button>";
    input.appendChild(pushday);

    const pullday = document.createElement('div');
    pullday.innerHTML = "<button class='workout-button' onclick='pullDay()'><h3>Pull</h3><p>Pull workouts train all the pulling muscles in the upper body: back, biceps, and rear shoulders.</p></button>";
    input.appendChild(pullday);

    const legday = document.createElement('div');
    legday.innerHTML = "<button class='workout-button' onclick='legDayStrength()'><h3>Legs</h3></button>";
    input.appendChild(legday);
}


function chestDay() {
    // Randomly pick one exercise from each pair. Exercises are randomly selected everytime a new workout is generated.
    const chestArrayOne = ["Dumbbell bench press 3x12", "Barbell bench press 3x12"];
    const indexOne = Math.floor(Math.random() * chestArrayOne.length);
    const liftOne = chestArrayOne[indexOne];

    const chestArrayTwo = ["Incline dumbbell bench press 3x12", "Incline barbell bench press 3x12"];
    const indexTwo = Math.floor(Math.random() * chestArrayTwo.length);
    const liftTwo = chestArrayTwo[indexTwo];

    const chestArrayThree = ["Machine pec fly 4x12", "Cable pec fly 4x12"];
    const indexThree = Math.floor(Math.random() * chestArrayThree.length);
    const liftThree = chestArrayThree[indexThree];

    const chestArrayFour = ["Tricep cable rope pushdown 4x12", "Tricep cable bar pushdown 4x12"];
    const indexFour = Math.floor(Math.random() * chestArrayFour.length);
    const liftFour = chestArrayFour[indexFour];

    const chestArrayFive = ["Overhead tricep cable extension 4x12", "Skull crushers 4x12"];
    const indexFive = Math.floor(Math.random() * chestArrayFive.length);
    const liftFive = chestArrayFive[indexFive];

    const chestArraySix = ["Dumbbell tricep kickback 4x12", "Tricep dips 4x12"];
    const indexSix = Math.floor(Math.random() * chestArraySix.length);
    const liftSix = chestArraySix[indexSix];
    // Insert the appropriate title above the generated workout
    let output = document.getElementById('output');
    const title = document.createElement('h2');
    title.innerText = "Chest and Triceps"
    output.appendChild(title)
    // Insert the generated workout
    const plan = document.createElement('div');
    plan.className = "exercises";
    plan.innerHTML = liftOne + "<br>" + liftTwo + "<br>" + liftThree + "<br>" + liftFour + "<br>" + liftFive + "<br>" + liftSix;
    output.appendChild(plan);
    // Remove input section 
    let input = document.getElementById('input');    
    input.remove();
}

function backDay() {
    const backArrayOne = ["Dumbbell bent over row 3x12", "Barbell bent over row 3x12"];
    const indexOne = Math.floor(Math.random() * backArrayOne.length);
    const liftOne = backArrayOne[indexOne];

    const backArrayTwo = ["Pull-ups/assisted pull-ups 3x12", "Lat pulldown 3x12"];
    const indexTwo = Math.floor(Math.random() * backArrayTwo.length);
    const liftTwo = backArrayTwo[indexTwo];

    const backArrayThree = ["T-bar row 4x12", "Seated cable row 4x12"];
    const indexThree = Math.floor(Math.random() * backArrayThree.length);
    const liftThree = backArrayThree[indexThree];

    const backArrayFour = ["Standing dumbbell curls 4x12", "Standing barbell curls 4x12"];
    const indexFour = Math.floor(Math.random() * backArrayFour.length);
    const liftFour = backArrayFour[indexFour];

    const backArrayFive = ["EZ bar preacher curls 4x12", "Dumbbell preacher curls 4x12"];
    const indexFive = Math.floor(Math.random() *backArrayFive.length);
    const liftFive = backArrayFive[indexFive];

    const backArraySix = ["Seated reclined curls 4x12", "Hammer curls 4x12"];
    const indexSix = Math.floor(Math.random() * backArraySix.length);
    const liftSix = backArraySix[indexSix];

    let output = document.getElementById('output');
    const title = document.createElement('h2');
    title.innerText = "Back and Biceps"
    output.appendChild(title)

    const plan = document.createElement('div');
    plan.className = "exercises";
    plan.innerHTML = liftOne + "<br>" + liftTwo + "<br>" + liftThree + "<br>" + liftFour + "<br>" + liftFive + "<br>" + liftSix;
    output.appendChild(plan);

    let input = document.getElementById('input');    
    input.remove();
}

function shoulderDay() {
    const shoulderArrayOne = ["Barbell shoulder press 3x12", "Dumbbell shoulder press 3x12"];
    const indexOne = Math.floor(Math.random() * shoulderArrayOne.length);
    const liftOne = shoulderArrayOne[indexOne];

    const shoulderArrayTwo = ["Dumbbell lateral raise 4x12", "Single arm cable lateral raise 4x12"];
    const indexTwo = Math.floor(Math.random() * shoulderArrayTwo.length);
    const liftTwo = shoulderArrayTwo[indexTwo];

    const shoulderArrayThree = ["Dumbbell front raise 4x12", "Cable front raise 4x12"];
    const indexThree = Math.floor(Math.random() * shoulderArrayThree.length);
    const liftThree = shoulderArrayThree[indexThree];

    const shoulderArrayFour = ["Dumbbell rear delt fly 4x12", "Machine rear delt fly 4x12"];
    const indexFour = Math.floor(Math.random() * shoulderArrayFour.length);
    const liftFour = shoulderArrayFour[indexFour];

    const shoulderArrayFive = ["Reverse crunch 4x12", "Hanging leg raises 4x12"];
    const indexFive = Math.floor(Math.random() * shoulderArrayFive.length);
    const liftFive = shoulderArrayFive[indexFive];

    const shoulderArraySix = ["Cable crunch 4x12", "Ab roller 4x12"];
    const indexSix = Math.floor(Math.random() * shoulderArraySix.length);
    const liftSix = shoulderArraySix[indexSix];

    const shoulderArraySeven = ["Wood choppers 4x12", "Seated medicine ball twist 4x12"];
    const indexSeven = Math.floor(Math.random() * shoulderArraySeven.length);
    const liftSeven = shoulderArraySeven[indexSeven];

    let output = document.getElementById('output');
    const title = document.createElement('h2');
    title.innerText = "Shoulders and Abs"
    output.appendChild(title)

    const plan = document.createElement('div');
    plan.className = "exercises";
    plan.innerHTML = liftOne + "<br>" + liftTwo + "<br>" + liftThree + "<br>" + liftFour + "<br>" + liftFive + "<br>" + liftSix + "<br>" + liftSeven;
    output.appendChild(plan);

    let input = document.getElementById('input');    
    input.remove();
}

function legDay() {
    const legArrayOne = ["Leg press 3x12", "Barbell squat 4x12"];
    const indexOne = Math.floor(Math.random() * legArrayOne.length);
    const liftOne = legArrayOne[indexOne];

    const legArrayTwo = ["Bulgarian split squat 3x12", "Walking lunge 3x12"];
    const indexTwo = Math.floor(Math.random() * legArrayTwo.length);
    const liftTwo = legArrayTwo[indexTwo];

    const legArrayThree = ["Romanian deadlift 3x12", "Good mornings 3x12"];
    const indexThree = Math.floor(Math.random() * legArrayThree.length);
    const liftThree = legArrayThree[indexThree];

    const legArrayFour = ["Quad extension 4x12", "Hack squat machine 4x12"];
    const indexFour = Math.floor(Math.random() * legArrayFour.length);
    const liftFour = legArrayFour[indexFour];

    const legArrayFive = ["Seated hamstring curl 4x12", "Prone hamstring curl 4x12"];
    const indexFive = Math.floor(Math.random() * legArrayFive.length);
    const liftFive = legArrayFive[indexFive];

    const legArraySix = ["Standing calf raises 4x12", "Seated calf raises 4x12"];
    const indexSix = Math.floor(Math.random() * legArraySix.length);
    const liftSix = legArraySix[indexSix];

    let output = document.getElementById('output');
    const title = document.createElement('h2');
    title.innerText = "Legs"
    output.appendChild(title)

    const plan = document.createElement('div');
    plan.className = "exercises";
    plan.innerHTML = liftOne + "<br>" + liftTwo + "<br>" + liftThree + "<br>" + liftFour + "<br>" + liftFive + "<br>" + liftSix;
    output.appendChild(plan);

    let input = document.getElementById('input');    
    input.remove();
}

function pushDay() {
    const pushArrayOne = ["Barbell bench press 3x5", "Incline barbell bench press 3x5"];
    const indexOne = Math.floor(Math.random() * pushArrayOne.length);
    const liftOne = pushArrayOne[indexOne];

    const pushArrayTwo = ["Standing overhead press 3x5", "Seated overhead press 3x5"];
    const indexTwo = Math.floor(Math.random() * pushArrayTwo.length);
    const liftTwo = pushArrayTwo[indexTwo];

    const pushArrayThree = ["Weighted dips 3x10", "Close grip bench press 3x10"];
    const indexThree = Math.floor(Math.random() * pushArrayThree.length);
    const liftThree = pushArrayThree[indexThree];

    const pushArrayFour = ["Tricep cable rope pushdown 3x10", "Tricep cable bar pushdown 3x10"];
    const indexFour = Math.floor(Math.random() * pushArrayFour.length);
    const liftFour = pushArrayFour[indexFour];

    const pushArrayFive = ["Dumbbell lateral raise 3x10", "Single arm cable lateral raise 3x10"];
    const indexFive = Math.floor(Math.random() * pushArrayFive.length);
    const liftFive = pushArrayFive[indexFive];

    let output = document.getElementById('output');
    const title = document.createElement('h2');
    title.innerText = "Push Day"
    output.appendChild(title)

    const plan = document.createElement('div');
    plan.className = "exercises";
    plan.innerHTML = liftOne + "<br>" + liftTwo + "<br>" + liftThree + "<br>" + liftFour + "<br>" + liftFive + "<br>";
    output.appendChild(plan);

    let input = document.getElementById('input');    
    input.remove();
}

function pullDay() {
    const pullArrayOne = ["Deadlifts 3x5", "Rack pulls 3x5"];
    const indexOne = Math.floor(Math.random() * pullArrayOne.length);
    const liftOne = pullArrayOne[indexOne];

    const pullArrayTwo = ["Barbell rows 3x5", "Dumbbell rows 3x5"];
    const indexTwo = Math.floor(Math.random() * pullArrayTwo.length);
    const liftTwo = pullArrayTwo[indexTwo];

    const pullArrayThree = ["Weighted chin-ups 3x10", "Weighted pull-ups 3x10"];
    const indexThree = Math.floor(Math.random() * pullArrayThree.length);
    const liftThree = pullArrayThree[indexThree];

    const pullArrayFour = ["Preacher curls 3x10", "Standing barbell curls 3x10"];
    const indexFour = Math.floor(Math.random() * pullArrayFour.length);
    const liftFour = pullArrayFour[indexFour];

    const pullArrayFive = ["Shrugs 3x10", "Farmer's walk 3x40feet"];
    const indexFive = Math.floor(Math.random() *pullArrayFive.length);
    const liftFive = pullArrayFive[indexFive];

    let output = document.getElementById('output');
    const title = document.createElement('h2');
    title.innerText = "Push Day"
    output.appendChild(title)

    const plan = document.createElement('div');
    plan.className = "exercises";
    plan.innerHTML = liftOne + "<br>" + liftTwo + "<br>" + liftThree + "<br>" + liftFour + "<br>" + liftFive + "<br>";
    output.appendChild(plan);

    let input = document.getElementById('input');    
    input.remove();
}

function legDayStrength() {
    const legArrayOne = ["Barbell squat 3x5", "Front squat 3x10"];
    const indexOne = Math.floor(Math.random() * legArrayOne.length);
    const liftOne = legArrayOne[indexOne];

    const legArrayTwo = ["Romanian deadlift 3x5", "Barbell hip thrust 3x5"];
    const indexTwo = Math.floor(Math.random() * legArrayTwo.length);
    const liftTwo = legArrayTwo[indexTwo];

    const legArrayThree = ["Quad extensions 3x10", "Good mornings 3x10"];
    const indexThree = Math.floor(Math.random() * legArrayThree.length);
    const liftThree = legArrayThree[indexThree];

    const legArrayFour = ["Leg press 3x10", "Hack squat machine 3x10"];
    const indexFour = Math.floor(Math.random() * legArrayFour.length);
    const liftFour = legArrayFour[indexFour];

    const legArrayFive = ["Seated hamstring curl 3x10", "Calf raises 3x10"];
    const indexFive = Math.floor(Math.random() * legArrayFive.length);
    const liftFive = legArrayFive[indexFive];

    let output = document.getElementById('output');
    const title = document.createElement('h2');
    title.innerText = "Leg Day"
    output.appendChild(title)

    const plan = document.createElement('div');
    plan.className = "exercises";
    plan.innerHTML = liftOne + "<br>" + liftTwo + "<br>" + liftThree + "<br>" + liftFour + "<br>" + liftFive + "<br>";
    output.appendChild(plan);

    let input = document.getElementById('input');    
    input.remove();
}