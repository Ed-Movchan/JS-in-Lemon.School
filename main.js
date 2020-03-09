// Lemon.School, JS
// DZ1

Задача №0

let a = 1
let b = 2
let c = 3
const d = 4
const e = 5
const f = 6
var m = 7
var n = 8
var p = 9

console.log(a,b,c,d,e,f,m,n,p)


Задача №1

let a = 5
let b = 8

if (a+b==13) {
    console.log(a)
} else {
console.log(b)
}


Задача №2

let year = prompt('Введите год', '');

if (year % 4 == 0 && year % 400 !== 0) {
    alert(366)
} else {
alert(365)
}


Задача №3

let a = prompt('Введите число1', '');
let b = prompt('Введите число2', '');
let c = prompt('Введите число3', '');

if ((a<b && a>c) || (a>b && a<c))
alert(a);

if ((b<c && b>a) || (b>c && b<a))
alert(b);

if ((c<a && c>b) || (c>a && c<b))
alert(c);


Задача №4

let a = prompt('Введите число1', '');
let b = prompt('Введите число2', '');
let c = prompt('Введите число3', '');

if (a>b && a>c)
alert(a);

if (b>c && b>a)
alert(b);

if (c>a && c>b)
alert(c);


Задача №5

let a = 16 // а - условные единицы в кармане

if (a-25 <0)
alert('Мы в минусе!')

if (a-14 >0)
alert('Мы в плюсе!')
/* 
<0 - мы должны кому-то
>0 - у нас еще осталось! 
*/
 
Или

// let a = 16

/* 
if (a-25 <0)
alert('Мы в минусе!')

if (a-14 >0)
alert('Мы в плюсе!')
*/