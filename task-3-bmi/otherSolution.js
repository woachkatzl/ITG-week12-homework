//FUNCTIONS

// Функция для рассчета ИМТ
function calculateBMI(weight, height) {
    const heightInMeters = height / 100;
    const heightSquared = Math.pow(heightInMeters, 2);
    const calcBmi = weight / heightSquared;
    return calcBmi.toFixed(2);
}

//Function to get the result of calculation on the page
function showResult() {
    //These values only work if set inside a function
    const userWeight = parseFloat(weightInput.value);
    const userHeight = parseFloat(heightInput.value);

    // Checking if 
    if (Number.isNaN(userHeight) || Number.isNaN(userWeight)) {
        alert("Ошибка! Ведите числовое значение.");
        messageElement.textContent = "Введены несовместимые данные. Попробуйте ещё раз."
    } else {
        const result = calculateBMI(userWeight, userHeight);
        messageElement.textContent = "Индекс массы тела (ИМТ): " + result;
    }
}


// VARIABLES
const bmiButton = document.querySelector(".bmi-btn");
const messageElement = document.querySelector(".bmi-result");
const weightInput = document.getElementById("weight-input");
const heightInput = document.getElementById("height-input");

//EVENT LISTENERS
bmiButton.addEventListener("click", showResult);
