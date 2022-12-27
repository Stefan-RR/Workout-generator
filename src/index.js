function chestday() {
    const chestArrayOne = ["Dumbbell bench press", "Barbell bench press"]
    const indexOne = Math.floor(Math.random() * chestArrayOne.length);
    const liftOne = chestArrayOne[indexOne];

    const chestArrayTwo = ["Incline dumbbell bench press", "Incline barbell bench press"]
    const indexTwo = Math.floor(Math.random() * chestArrayTwo.length);
    const liftTwo = chestArrayTwo[indexTwo];

    const chestArrayThree = ["Machine pec fly", "Cable pec fly"]
    const indexThree = Math.floor(Math.random() * chestArrayThree.length);
    const liftThree = chestArrayThree[indexThree];

    const chestArrayFour = ["Tricep cable rope pushdown", "Tricep cable bar pushdown"]
    const indexFour = Math.floor(Math.random() * chestArrayFour.length);
    const liftFour = chestArrayFour[indexFour];

    const chestArrayFive = ["Overhead tricep cable extension", "Skull crushers"]
    const indexFive = Math.floor(Math.random() * chestArrayFive.length);
    const liftFive = chestArrayFive[indexFive];

    const chestArraySix = ["Dumbbell tricep kickback", "Tricep dips"]
    const indexSix = Math.floor(Math.random() * chestArraySix.length);
    const liftSix = chestArraySix[indexSix];

    let output = document.getElementById('output')
    const plan = document.createElement('div')
    plan.innerText = liftOne + liftTwo + liftThree + liftFour + liftFive + liftSix
    output.appendChild(plan)
}