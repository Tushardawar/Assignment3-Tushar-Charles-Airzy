/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dayCounter = 0;
let dailyRate = 35;
var weeklyCost = document.getElementById("calculated-cost");
var clearButton = document.getElementById("clear-button");
var dayButtons = document.querySelectorAll(".day-selector li");
var halfDay = document.getElementById("half");
var fullDay = document.getElementById("full");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function colourChange() {
    if (!this.classList.contains("clicked")) {
        this.classList.add("clicked");
        dayCounter++;
    }
    calculate();
}

dayButtons.forEach(function(day) { 
    day.addEventListener("click", colourChange);
    });


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays() {
    dayButtons.forEach(function(day) { day.classList.remove("clicked");});
    dayCounter = 0;
    weeklyCost.textContent = "0";
}

clearButton.addEventListener("click",clearDays);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function changeRateHalf() {
    dailyRate = 20;
    halfDay.classList.add("clicked");
    fullDay.classList.remove("clicked");
    calculate();
}

halfDay.addEventListener("click", changeRateHalf);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function changeRateFull() {
    dailyRate = 35;
    fullDay.classList.add("clicked");
    halfDay.classList.remove("clicked");
    calculate();
}

fullDay.addEventListener("click", changeRateFull);


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    const finalCost = dayCounter * dailyRate;
    weeklyCost.innerHTML = finalCost;
}
