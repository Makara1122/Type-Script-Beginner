"use strict";
let a = 20;
let b = "Hello Type Script";
let isPublished;
let x;
console.log(`a value : ${a}`);
let arrays = [1, 2, 3, 4, 5];
let studentNames = ["sok kha", "bona", "data"];
let numberOne;
arrays.map(num => console.log(num++));
let employees;
employees = [
    [1, "Ra"],
    [2, "Raj"]
];
console.log(employees[0][0]);
var Sizes;
(function (Sizes) {
    Sizes[Sizes["Small"] = 30] = "Small";
    Sizes[Sizes["Medium"] = 31] = "Medium";
    Sizes[Sizes["Large"] = 32] = "Large";
})(Sizes || (Sizes = {}));
var SizeString;
(function (SizeString) {
    SizeString["Small"] = "small";
    SizeString["Medium"] = "medium";
    SizeString["Large"] = "large";
})(SizeString || (SizeString = {}));
var PizzaPromotion;
(function (PizzaPromotion) {
    PizzaPromotion["Monday"] = "Buy 1 free 1";
    PizzaPromotion["Tuesday"] = "normal";
    PizzaPromotion["Wednesday"] = "buy 3 free 1";
})(PizzaPromotion || (PizzaPromotion = {}));
console.log(PizzaPromotion.Monday.toLowerCase());
let calculateTax = function (amount, tax) {
    let total = amount - (tax * amount);
    return total;
};
let taxCalculated = calculateTax(100, 200);
console.log(taxCalculated);
let student = {
    id: 1,
    name: "Ha"
};
console.log(student);
