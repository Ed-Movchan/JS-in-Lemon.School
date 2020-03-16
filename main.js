// DZ3

// Создайте 4 любые математические функции  с как минимум одним параметром функции.

function calc(number1, number2) {
  return number1 * number2
}
alert(calc(22,15))


function calc1(number1, number2, number3) {
  return (number1 + number2) / number3
}
alert(calc1(3,6,1))


function calc2(number1, number2, number3, number4) {
  return (number1 - number2) + (number3 + number4)
}
alert(calc2(4,4,3,8))


function calc3(number1, number2, number3, number4, number5) {
  return number1 / number2 + (number3 - number4 * number5)
}
alert(calc3(10,5,3,2,2))

// Создать 3 функции без параметров и return
// первая выводит ваше имя в консоль .лог
// Вторая выводит в алерте
// Третья и в консол.лог и в алерте


let myName = function() {
  console.log('Eduard');
}   
myName()


let myName = function() {
  alert('Eduard');
}   
myName()


let myName = function() {
  alert('Eduard'); console.log('Eduard')
}   
myName()

// Создать  функции (всегда с параметром)
// Функция 
// 1)Суммы всех нечетных чисел в передаваемом числе

function sumNumber(num) {

let sum = 0;
 
while (num > 0) {
      if (num % 2 !== 0) { 
          sum += num % 10; 
      }
      num = num / 10 ^ 0; 
}
console.log(sum);
}
sumNumber(363)


// 2)Нахождение наибольшего четного числа в передаваемом числе

// 3)Нажождения последнего нечетного числа в передаваемом числе


// 4)Наибольшее из трех переданных чисел

function compareNumber(number1, number2, number3) {
    if (number1>number2 && number1>number3)
console.log(number1);

if (number2>number3 && number2>number1)
console.log(number2);

if (number3>number1 && number3>number2)
console.log(number3);
}
compareNumber(12,4,9)

// 5)Наименьшее из 5 переданных чисел

function compareNumber(number1, number2, number3, number4, number5) {
  if (number1<number2 && number1<number3 && number1<number4 && number1<number5)
console.log(number1);

if (number2<number1 && number2<number3 && number2<number4 && number2<number5)
console.log(number2);

if (number3<number1 && number3<number2 && number3<number4 && number3<number5)
console.log(number3);

if (number4<number1 && number4<number2 && number4<number3 && number4<number5)
console.log(number4);

if (number5<number1 && number5<number2 && number5<number3 && number5<number4)
console.log(number5);
}
compareNumber(12,4,9,50,58)

// 6)Функция, которая выводит в консоль тип передаваемого параметра -строка,число и т.д

function showType(parameter) {
let result = typeof(parameter)
console.log(result)
}
showType("Word")

// 7)Функция, которая получает число дня недели и выводит в алерт Название дня

function showDays(dayNumber) {
switch (dayNumber) {
  case 1:
    alert( 'Monday' );
    break;

    case 2:
    alert( 'Tuesday' );
    break;

    case 3:
    alert( 'Wednesday' );
    break;

    case 4:
    alert( 'Thursday' );
    break;

    case 5:
    alert( 'Friday' );
    break;

    case 6:
    alert( 'Saturday' );
    break;

    case 7:
    alert( 'Sunday' );
    break;

    default:
    alert( 'Go to sleep, progammer' );
}
}
showDays(7)
