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

type Employees = {
  readonly id : number,
   name : string,
   salary : number,
   details : () => string;
   retirement : (date : Date) => void;
}

let employee1 : Employees = {
    id : 1,
    name : "Tom",
    salary : 1000,
    details : function() {
        return `
        ID : ${this.id}, Name : ${this.name}`
    },
    retirement : function(date : Date) {
        console.log(`${this.name} is retiring on ${date}`)
    }
}

// union type

console.log(employee1.details())

function KgToLbs (weight : number | string) : number {
    if (typeof weight === "number") {
        return weight * 2.2
    } else {
        return parseFloat(weight) * 2.2 
    }
}

console.log(KgToLbs(20))
console.log(KgToLbs('10Kg'))


type Person = {
    name : string;
    age : number;
}

type Employee = {
    id : number; 
    salary : number;
}
type Manager = {
    department : string;
    employees : Employee[];
}
type ManagerWithPerson = Person & Manager & Employee;

let manager1 : ManagerWithPerson = {
    name : " Tom",
    age : 30,
    id : 11, 
    salary : 1000000,
    department : "IT",
    employees : [
        {id : 1, salary : 1000},
        {id : 2 , salary : 3999}
    ]
}

console.log(manager1)

let quantity : any

type Qty = 10 | 20 | 30;
function printQuantity(value : Qty){
    console.log(value);
}
printQuantity(20)

// String also

type Size = "small" | "medium" | "large";

function printQuantity1(value : Size){
    console.log(value)
}
printQuantity1("medium")

function greet(name : string){
    if(name){
        console.log(`Hello ${name}`);
    } else {
        console.log(`Hello Guest`)
    }
}
greet(null)
greet(undefined)
greet("Makara")

// nullable objects 

type Customer = {
   name : string;
    birthDate : Date;
};
function getCustomerDetials(id : number) : Customer | undefined | null {
    return id === 0? null : {name: "makara", birthDate: new Date()}
}

let customer = getCustomerDetials(2);
console.log(customer?.name || "Guest")

