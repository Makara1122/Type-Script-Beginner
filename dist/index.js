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
let employee1 = {
    id: 1,
    name: "Tom",
    salary: 1000,
    details: function () {
        return `
        ID : ${this.id}, Name : ${this.name}`;
    },
    retirement: function (date) {
        console.log(`${this.name} is retiring on ${date}`);
    }
};
console.log(employee1.details());
function KgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseFloat(weight) * 2.2;
    }
}
console.log(KgToLbs(20));
console.log(KgToLbs('10Kg'));
let manager1 = {
    name: " Tom",
    age: 30,
    id: 11,
    salary: 1000000,
    department: "IT",
    employees: [
        { id: 1, salary: 1000 },
        { id: 2, salary: 3999 }
    ]
};
console.log(manager1);
let quantity;
function printQuantity(value) {
    console.log(value);
}
printQuantity(20);
function printQuantity1(value) {
    console.log(value);
}
printQuantity1("medium");
function greet(name) {
    if (name) {
        console.log(`Hello ${name}`);
    }
    else {
        console.log(`Hello Guest`);
    }
}
greet(null);
greet(undefined);
greet("Makara");
function getCustomerDetials(id) {
    return id === 0 ? null : { name: "makara", birthDate: new Date() };
}
let customer = getCustomerDetials(2);
console.log((customer === null || customer === void 0 ? void 0 : customer.name) || "Guest");
