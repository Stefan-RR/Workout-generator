function chestDay() {
    const chestArrayOne = ["Dumbbell bench press 3x12", "Barbell bench press 3x12"]
    const indexOne = Math.floor(Math.random() * chestArrayOne.length);
    const liftOne = chestArrayOne[indexOne];

    const chestArrayTwo = ["Incline dumbbell bench press 3x12", "Incline barbell bench press 3x12"]
    const indexTwo = Math.floor(Math.random() * chestArrayTwo.length);
    const liftTwo = chestArrayTwo[indexTwo];

    const chestArrayThree = ["Machine pec fly 4x12", "Cable pec fly 4x12"]
    const indexThree = Math.floor(Math.random() * chestArrayThree.length);
    const liftThree = chestArrayThree[indexThree];

    const chestArrayFour = ["Tricep cable rope pushdown 4x12", "Tricep cable bar pushdown 4x12"]
    const indexFour = Math.floor(Math.random() * chestArrayFour.length);
    const liftFour = chestArrayFour[indexFour];

    const chestArrayFive = ["Overhead tricep cable extension 4x12", "Skull crushers 4x12"]
    const indexFive = Math.floor(Math.random() * chestArrayFive.length);
    const liftFive = chestArrayFive[indexFive];

    const chestArraySix = ["Dumbbell tricep kickback 4x12", "Tricep dips 4x12"]
    const indexSix = Math.floor(Math.random() * chestArraySix.length);
    const liftSix = chestArraySix[indexSix];

    let output = document.getElementById('output')
    const plan = document.createElement('div')
    plan.className = "exercises"
    plan.innerText = liftOne + liftTwo + liftThree + liftFour + liftFive + liftSix
    output.appendChild(plan)
}

function backDay() {
    const backArrayOne = ["Dumbbell bent over row 3x12", "Barbell bent over row 3x12"]
    const indexOne = Math.floor(Math.random() * backArrayOne.length);
    const liftOne = backArrayOne[indexOne];

    const backArrayTwo = ["Pull-ups/assisted pull ups 3x12", "Lat pulldown 3x12"]
    const indexTwo = Math.floor(Math.random() * backArrayTwo.length);
    const liftTwo = backArrayTwo[indexTwo];

    const backArrayThree = ["T-bar row 4x12", "Seated cable row 4x12"]
    const indexThree = Math.floor(Math.random() * backArrayThree.length);
    const liftThree = backArrayThree[indexThree];

    const backArrayFour = ["Standing dumbbell curls 4x12", "Standing barbell curls 4x12"]
    const indexFour = Math.floor(Math.random() * backArrayFour.length);
    const liftFour = backArrayFour[indexFour];

    const backArrayFive = ["EZ bar preacher curls 4x12", "Dumbbell preacher curls 4x12"]
    const indexFive = Math.floor(Math.random() *backArrayFive.length);
    const liftFive = backArrayFive[indexFive];

    const backArraySix = ["Seated reclined curls 4x12", "Hammer curls 4x12"]
    const indexSix = Math.floor(Math.random() * backArraySix.length);
    const liftSix = backArraySix[indexSix];

    let output = document.getElementById('output')
    const plan = document.createElement('div')
    plan.className = "exercises"
    plan.innerText = liftOne + liftTwo + liftThree + liftFour + liftFive + liftSix
    output.appendChild(plan)
}

function shoulderDay() {
    const shoulderArrayOne = ["Barbell shoulder press 3x12", "Dumbbell shoulder press 3x12"]
    const indexOne = Math.floor(Math.random() * shoulderArrayOne.length);
    const liftOne = shoulderArrayOne[indexOne];

    const shoulderArrayTwo = ["Dumbbell lateral raise 4x12", "Single arm cable lateral raise 4x12"]
    const indexTwo = Math.floor(Math.random() * shoulderArrayTwo.length);
    const liftTwo = shoulderArrayTwo[indexTwo];

    const shoulderArrayThree = ["Dumbbell front raise 4x12", "Cable front raise 4x12"]
    const indexThree = Math.floor(Math.random() * shoulderArrayThree.length);
    const liftThree = shoulderArrayThree[indexThree];

    const shoulderArrayFour = ["Dumbbell rear delt fly 4x12", "Machine rear delt fly 4x12"]
    const indexFour = Math.floor(Math.random() * shoulderArrayFour.length);
    const liftFour = shoulderArrayFour[indexFour];

    const shoulderArrayFive = ["Reverse crunch 4x12", "Hanging leg raises 4x12"]
    const indexFive = Math.floor(Math.random() * shoulderArrayFive.length);
    const liftFive = shoulderArrayFive[indexFive];

    const shoulderArraySix = ["Cable crunch 4x12", "Ab roller 4x12"]
    const indexSix = Math.floor(Math.random() * shoulderArraySix.length);
    const liftSix = shoulderArraySix[indexSix];

    const shoulderArraySeven = ["Wood choppers 4x12", "Seated medicine ball twist 4x12"]
    const indexSeven = Math.floor(Math.random() * shoulderArraySeven.length);
    const liftSeven = shoulderArraySeven[indexSeven];

    let output = document.getElementById('output')
    const plan = document.createElement('div')
    plan.className = "exercises"
    plan.innerText = liftOne + liftTwo + liftThree + liftFour + liftFive + liftSix + liftSeven
    output.appendChild(plan)
}

function legDay() {
    const legArrayOne = ["Leg press 3x12", "Barbell squat 4x12"]
    const indexOne = Math.floor(Math.random() * legArrayOne.length);
    const liftOne = legArrayOne[indexOne];

    const legArrayTwo = ["Bulgarian split squat 3x12", "Walking lunge 3x12"]
    const indexTwo = Math.floor(Math.random() * legArrayTwo.length);
    const liftTwo = legArrayTwo[indexTwo];

    const legArrayThree = ["Romanian deadlift 3x12", "Good mornings 3x12"]
    const indexThree = Math.floor(Math.random() * legArrayThree.length);
    const liftThree = legArrayThree[indexThree];

    const legArrayFour = ["Quad extension 4x12", "Hack squat machine 4x12"]
    const indexFour = Math.floor(Math.random() * legArrayFour.length);
    const liftFour = legArrayFour[indexFour];

    const legArrayFive = ["Seated hamstring curl 4x12", "Prone hamstring curl 4x12"]
    const indexFive = Math.floor(Math.random() * legArrayFive.length);
    const liftFive = legArrayFive[indexFive];

    const legArraySix = ["Standing calf raises 4x12", "Seated calf raises 4x12"]
    const indexSix = Math.floor(Math.random() * legArraySix.length);
    const liftSix = legArraySix[indexSix];

    let output = document.getElementById('output')
    const plan = document.createElement('div')
    plan.className = "exercises"
    plan.innerText = liftOne + liftTwo + liftThree + liftFour + liftFive + liftSix
    output.appendChild(plan)
}