"use strict";

let a: number = 20;
let b : string = "Hello Type Script"
let isPublished : true
let x : any
console.log(`a value : ${a}`)


// hello world

let arrays : number[] = [1,2,3,4,5]
let studentNames : string[] = ["sok kha", "bona", "data"]
let numberOne : number
arrays.map(num => console.log(num++))

let employees : [number, string][]

employees = [
    [1,"Ra"],
    [2,"Raj"]
]
console.log(employees[0][0])
    
enum Sizes {Small = 30 , Medium , Large}
enum SizeString {Small = "small", Medium = "medium", Large = "large"}

enum PizzaPromotion {Monday = "Buy 1 free 1", Tuesday = "normal", Wednesday = "buy 3 free 1"}
console.log(PizzaPromotion.Monday.toLowerCase())

//  return function with TypeScript

let calculateTax = function (amount : number, tax : number) : number {
    let total = amount - (tax * amount );
    return total;
}
let taxCalculated = calculateTax(100,200);
console.log(taxCalculated)

// Object

let student : {
    readonly id : number;
    name : string;
    salary? : number;
} = {
    id : 1,
    name : "Ha"
};
console.log(student)
