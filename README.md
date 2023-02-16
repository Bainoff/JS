![java script](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VdywFhf9xsN6AIeK4F6snUxn3xxXiWJrk8NNusEKF3E7FCXN1zWFZbTFTR6aOhBeXg&usqp=CAU)

# Java Script

Familiar with basics of JS, that makes me able to dig the code and find the very basic reasons of detected bugs. In other words - to use white (glass) box testing.

```java script        
function f1(p1,p2){
    let a1 = p1
    let a2 = p2
    result_text = "hello, "+p1+" "+p2
    console.log(result_text)
    return result_text
}

f1("Dude", 10)

let func1 = f1("Man", 100)
let func2 = f1(100, 10)
console.log(func1)
console.log(func2)

function f2(name, message){
    message = message || "welcome,"
    return message + ' ' + name 
}
console.log(f2("aliens!"))

function f3(name, message = "welcome"){
    return message + ' ' + name 
}
console.log(f3("Bond", "James"))

function f4(p1,p2){
    if (p1 > p2) {
        return p1 - p2
    } else if (p1 < p2) {
        return p1 + p2
    } else {
        return "P1 == P2"
    }
    }
console.log(f4(4,4))

// arrow functions

let fs11 = () => console.log("OK!")
fs11()

let fs22 = (p1,p2) => console.log("OK!",p1,p2)
fs22(30,40)

let n1 = 100
let n2 = 200

let fs33 = (n1 > n2) ?
    (p1,p2) => console.log("1_OK!",p1-p2) :
    (p1,p2) => console.log("2_OK!", p1+p2);

fs33(n1,n2)

// nested functions

function n3(title, fn1){
    console.log(title, "N2")
    fn1("code 200 OK!!!!")
}

n3("Test code 200", function(pp1){
    console.log("Test run!")
    console.log(pp1)
})

```
My scope of **Java Script** knowleadge is capable enough both for writing not complicated programs and automating testin process, using Postman or Selenium. 
## Java Script
1. Dynamic typing
2. Loops
3. Conditions and branching
4. Arrays
5. Functions
