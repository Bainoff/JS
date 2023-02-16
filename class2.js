let a = 10
let b = 15

let c1 = a > b
let c2 = a < b
let c3 = a == b
let c4 = a != b

console.log("result c1 = ", c1, "result c2 = ", c2,"result c3 = ", c3,"result c4 = ", c4)

//if branching
if (c1) {
    console.log("result c1 = ", c1)}
else if (c2) {
    console.log("result c2 = ", c2)}
else if (c3) {
    console.log("result c3 = ", c3)}
else if (c4){
    console.log("result c4 = ", c4)}
else {
    console.log("other result")}


//while loop
   let count = 0
while (c2) {
    count++
    console.log("count ==", count)
if (count == 10) {break}
else if (count == 5) {continue
} else if (count == 8) {
    let count2 = 0
    while (true){
        count2++
        console.log("count2 ===", count2)
        if (count2 == 4) {break}
    }
}
console.log("count ==-==", count)
}

// for loop
let count3 = 10
for (let i = 0; i < count3; i++) {
    if (i = 5) {break}
    console.log("i = ", i)
}

// array loop
let codes = [100,200,300,400,500]
console.log("array == ", codes)
for (let i in codes) {

    console.log("i ==", codes[i])

if (codes[i] == 300) {
    codes[i] = 700
}
}
console.log("new array == ", codes)

