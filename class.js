let item1 = 5
let item2 = 10

let result1 = item1 + item2
let result2 = item1 * item2
let result3 = item1 - item2
let result4 = item1 / item2

console.log("result = ", result1)
console.log("result = ", result2)
console.log("result = ", result3)
console.log("result = ", result4)
console.log("result = " + result1, typeof result1)


let name1 = "Hello"

console.log(name1, typeof name1)

//types

let v1 = 10
let v2 = 10.5
let v3 = true
let v4 = false
let v5 = null
let v6 = [10,11,44]
let v7 = {"name" : "Natalia", "age" : 25, "salary" : 2000}
let v8 = "Hello"
let v9 = "10"
let v10 = NaN

console.log(v1, typeof v1)
console.log(v2, typeof v2)
console.log(v3, typeof v3)
console.log(v4, typeof v4)
console.log(v5, typeof v5)
console.log(v6, typeof v6)
console.log(v7, typeof v7)
console.log(v8, typeof v8)

let typeConv = +v9

//compare

let item3 = 10
let item4 = 20

let age1 = 25

let salary1 = 1000
let salary2 = 1500
let salary3 = 2000


let result5 = item3 >= item4

console.log("result = ", result5)

//branching

if (age1 < 30) {
    console.log("salary = ", salary1)
} else if (age1 >= 30 && age1 < 40) {
    console.log("salary = ", salary2)
} else if (age1 >= 40 && age1 < 50) {
    console.log("salary = ", salary3)
} else {console.log("other result")
}

if (true) { console.log("!!!!!!!!!")}


if (isNaN(v5)) {
    console.log("!!!!", v10, typeof v10)
} else {console.log("----------------")}

