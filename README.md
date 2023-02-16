![java script](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VdywFhf9xsN6AIeK4F6snUxn3xxXiWJrk8NNusEKF3E7FCXN1zWFZbTFTR6aOhBeXg&usqp=CAU)

# Java Script

Familiar with basics of JS, that makes me able to dig the code and find the very basic reasons of detected bugs. In other words - to use white (glass) box testing.

```java script        
function func1sum(x,y) {
    z = x + y;
return z;
}

function func2sqr(x) {
    z = x * x;
    return z;
}

function func3json(surname, name, middlename) {
    return  "{name : " + name +
            "\n surname : " + surname +
            "\n middlename : " + middlename + "}"}

function func4even() {
    const digs = [];
    let i = 0;
    for (const n of arguments) {
        if (n%2 == 0) {
            digs[i] = n;
            i++;}
    }
    if (digs.length == 0) return "No even numbers";
    else return digs;
}

function func5Acounter(word) {
    let counter = 0;
    for (i = 0; i < word.length; i++) {
        if (word.charAt(i) == 'a') {counter++;}
    }
    if (counter == 0) {return "No A characters"}
return counter + " a characters in given word";
}

function func6webElemTest(element) {
    if (element == "phoneNumberField") return "   1. Fitting pattern" + 
                                            "\n   2. Contains digits only" +
                                            "\n   3. Contains predefined delimeters only";
                                            
    if (element == "checkbox") return "           1. Can be checked/unchecked" + 
                                            "\n   2. Conditions for being active/unactive" +
                                            "\n   3. Clickable some pixels around it" +
                                            "\n   4. It's default state";

    if (element == "signInButton") return "   1. Fitting design pattern" + 
                                        "\n   2. Conditions for being active/unactive" +
                                        "\n   3. Clicking action animation";

    if (element != "phoneNumberField" && element != "checkbox" && element != "signInButton") return "Enter correct element";
}

function func7json2xml (script) {
    var xml = '';
    for (var prop in script) {
      xml += script[prop] instanceof Array ? '' : "<" + prop + ">";
      if (script[prop] instanceof Array) {
        for (var array in script[prop]) {
          xml += "<" + prop + ">";
          xml += func7json2xml(new Object(script[prop][array]));
          xml += "</" + prop + ">";
        }
      } else if (typeof script[prop] == "object") {
        xml += func7json2xml(new Object(script[prop]));
      } else {
        xml += script[prop];
      }
      xml += script[prop] instanceof Array ? '' : "</" + prop + ">";
    }
    var xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
    return xml
  }

console.log(func1sum(2,3));
console.log(func2sqr(3));
console.log(func3json("ivanov", "ivan", "ivanovich"));
console.log(func4even(1,2,3,4,5,5,5,5,6,7,8));
console.log(func5Acounter("abrakadabra"));
console.log(func6webElemTest("signInButton"));
console.log(func7json2xml({"type": "module", "name": "John", "age": 30}));
```
My scope of **Java Script** knowleadge is capable enough both for writing not complicated programs and automating testin process, using Postman or Selenium. 
## Java Script
1. Dynamic typing
2. Loops
3. Conditions and branching
4. Arrays
5. Functions
