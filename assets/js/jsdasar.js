// the hello world program
console.log('Hello World'); alert ("Hello World");

console.log('Hello World') 
alert ("Hello World")

var nama = "Erlan Noviar";
let id = 123;
const alamat = "Jatinangor - Sumedang";
console.log ("ini isi dari variabel nama", nama);
console.log ("ini isi dari let id", id);
console.log ("ini isi dari const alamat", alamat);

//type data number
let n = 25;
n = 30;
console.log(n)

let inf = 100/0;
console.log(inf)

console.log ("Arkatama" + 1);
console.log ("Multi Solusindo" + (2*5));
console.log (NaN * 3); //tidak ada nilai ang di kalikan

//type data BIGINT
const BigInt = 1216386276451863782164978n
console.log (BigInt);

//type data STRING
const nama1 = "Arkatama";
const nama2 = 'Arkatama';
const nama3 = `Arakatama`;
console.log(nama1, nama2, nama3);

//type data BOOLEAN
let isLoggedIn = true;
let isAdmin = false;

let isGreater = 10 > 5;
let isLess = 10 < 5;
console.log(isLoggedIn, isAdmin, isGreater, isLess);

//type Data Null
let girlfriend = null;
console.log(girlfriend);

//type data UNDIFINED
let name;
console.log('name');

//type data SYMBOL
let employee = Symbol('Joko');
console.log (employee);
console.log (employee.description);

//type data OBJECT
let employee2 ={
    name : "John",
    age :30,
    job : "Web Developer",
    isMarried : false,
    hobbies : ["Sport", "cooking"],
};
console.log(`His name is ${employee2.name} and he is ${employee2.age} years old`);

//type Conversion STRING
var value = true;
value = String(value); //now value is a string "true"
alert(typeof value); //string

//type Conversion NUMERIC
alert("6" / "2"); //3, strings are converted to number

let str = 123;
alert(typeof str); //string

let num = Number(str); //becomes a number 123
alert (typeof num); //number

//type Conversion BOOLEAN
alert (Boolean (1) ); //true
alert (Boolean (0) ); //false

alert (Boolean ("hello") ); //true
alert (Boolean ("") ); //false

//--------------------------------------------------------------------------------------//
//JavaScript Operator
//Aritmethic Operator
let a = 10;
let b = 3;

console.log (a + b)
console.log (a - b)
console.log (a * b)
console.log (a / b)
console.log (a % b)
console.log (a ** b)

let g = 2;
console.log (a);

g+=5;
console.log(g);

//Comparison OPERATOR
let c = 4;
let d = 5;

console.log (c == d);
console.log (c < d);
console.log (c > d);
console.log (c != d);

//LOGICAL OPERATOR
let e = 4;
let f = 5;

console.log (e && f);
console.log (e || f);
console.log (!e);

//BITWISE OPERATOR
let x = 4;
let y = 5;

console.log (x & b);
console.log (x | y);
console.log (x ^ y);
console.log (~a);

//TERNARY OPERATOR
let o = 1;
let p = 1;
console.log( o == p ? "yes" : "no");

//POP UP :ALERT
alert ("Selamat Datang Di Arkatama");
alert ("Sekarang tanggal :" +new Date());

//POP UP BOX
//POP UP :PROMPT
let response = prompt ("Apakah kamu mau nonton akhir pekan ini ?");
alert ("Jawaban adalah " +response);

//POP UP:CONFIRM
let res = confirm ("Mau dianter malam ini ?");
alert ("Jawabannya : " +res);

//CONDITIONAL :IF
let jwb = prompt ("1 + 1 =");
if (jwb == 2) {
    alert ("CORRECT");
}

//CONDITIONAL :IF-ELSE
let answer = prompt ("1 + 1 =");
if (answer == 2) {
    alert ("CORRECT");
}else {
    alert("WRONG");
}

let H = prompt ("1 + 1 =");
if (H == 2) {
    alert ("CORRECT");
}else if (H < 2) {
    alert("Too Low!");
}else {
    alert("Too High!");
}

//CONDITIONAL :SWITCH
let color = "red";

switch (color) {
    case "red":
        alert ("I Love Red!");
        break;
    case "blue":
        alert ("I Love Blue!");
        break;
    default :
    alert ("I dont know what color it is!");
    break;
}

//JAVASCRIPT LOOP
// LOOP:FOR 
for (let i = 0; i < 5; i++) {
    console.log(`Interasi ke ${i}`);
}

// LOOP: DO WHILE
let s = 0;
do {
    console.log (`Integrasi ke ${s}`);
    s+=1;
}while (s < 5);

// LOOP WHILE 
let v = 0;
while (v<5) {
    console.log(`Integrasi ke ${v}`);
    v++;
}

//LOOP CONTROL:BREAK
for (let b = 0; b < 5; b++) {
    if (b==3) {
        break;
    }
    console.log(`Integrasi ke ${b}`);
}

//LOOP CONTROL:CONTINUE
for (let r = 0; r < 5; r++) {
    if (r==3) {
        continue;
    }
    console.log(`Integrasi ke ${r}`);
}