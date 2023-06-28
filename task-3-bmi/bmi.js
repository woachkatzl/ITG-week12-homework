//FUNCTIONS

// Функция для рассчета ИМТ
function calculateBMI(weight, height) {
    let heightSquared = Math.pow(height, 2);
    let calcBmi = weight / heightSquared;
    return calcBmi.toFixed(2);
}

//Function to get values of weight and height
function getValue(event) {
    const eventTarget = event.target;
    if (eventTarget.getAttribute("id") === "weight-input") {
        userWeight = eventTarget.value;
    } else if (eventTarget.getAttribute("id") === "height-input") {
        userHeight = eventTarget.value / 100;
    }
}

//Function to get the result of calculation on the page
function showResult() {
    let result = calculateBMI(userWeight, userHeight);
    message.textContent = "Индекс массы тела (ИМТ): " + result;
}


// VARIABLES
const bmiButton = document.querySelector(".bmi-btn");
const message = document.querySelector(".bmi-result");
const weightInput = document.getElementById("weight-input");
const heightInput = document.getElementById("height-input");
let userWeight = 0;
let userHeight = 0;

//EVENT LISTENERS
// Пришлось добавить эти слушатели событий и функцию, так как не получалось извлечь данные из полей ввода с помощью кода:
// let userWeight = weightInput.value;
// консоль фиксировала пустую строку даже после ввода данных в поле.
weightInput.addEventListener("change", getValue);
heightInput.addEventListener("change", getValue);

bmiButton.addEventListener("click", showResult);
