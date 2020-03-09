DZ2

// Задача №0

let arg = prompt("Введите день недели числом");
switch (arg) {
  case '1':
    alert( 'Понедельник' );
    break;

  case '2':
    alert( 'Вторник' );
    break;

  case '3':
    alert( 'Среда' );
    break;

    case '4':
        alert( 'Четверг' );
        break;
        
  case '5':
    alert( 'Пятница' );
    break;   
    
  case '6':
    alert( 'Суббота' );
    break;

    case '7':
        alert( 'Воскресенье' );
        break;

  default:
    alert( 'Нет такого дня недели' );
}


// Задача №1

let arg = prompt("Введите код города");
switch (arg) {
  case '905':
      let city1 = 10*4.15
    alert(city1);
    break;

  case '194':
    let city2 = 10*1.98
    alert(city2);
    break;

  case '491':
    let city3 = 10*2.69
    alert(city3);
    break;

  case '800':
    let city4 = 10*5.00
    alert(city4);
    break;   

  default:
    alert( 'Город отсутствует в базе' );
}


// Задача №2

let min = prompt("Введите число от 0 до 59");
      if (min >= 0 && min <= 14) {
        console.log ("Первая");
     }
      if (min >= 15 && min <= 29) {
        console.log ("Вторая");
     }
     if (min >= 30 && min <= 44) {
        console.log ("Третья");
     }
     if (min >= 45 && min <= 59) {
        console.log ("Четвертая");
     }

// Задача №3

let num = prompt("Введите число от 1 до 4");
      if (num == 1) {
        let result = "Зима"
        alert (result);
     }
     if (num == 2) {
        let result = "Весна"
        alert (result);
     }
     if (num == 3) {
        let result = "Лето"
        alert (result);
     }
     if (num == 4) {
        let result = "Осень"
        alert (result);
     }

// Задача №4


let height = prompt("Введите высоту прямоугольника");
let width = prompt("Введите ширину прямоугольника");
      if ( s = height*width ) {
        alert (s);
     }


let heightC = prompt("Введите высоту цилиндра");
let dC = prompt("Введите диаметр основания цилиндра");
      if ( v = heightC*dC ) {
        alert (v);
     }

let sideN = 3;
let sideM = 4;
let k = 0;
     if (k = (sideN ** 2)+(sideM ** 2)) {
       console.log(k)  
     }

// Задача №5

let i = 44;
while (++i <= 67) 
console.log( i );


let i = 44;
while (++i <= 670) 
if (i % 10 == 0)
console.log( i );


for (let i = 44; i <= 670; i++) {
    if (i % 10 == 0) {
      console.log( i );
    }
  }


// Задача №6

let num = prompt('Введите целое число: ', '');

let sum = 0;
 
while (num > 0) {
      if (num % 10 % 2 == 0) { 
          sum += num % 10; 
      }
      num = num / 10 ^ 0; 
}

alert(sum);

// Задача №7

-


// Задача №8

let sum = 0;
        for (let i = 0; i <= 255; i++)
        {
            if (i % 2 == 1) sum += i;
        }
        console.log(sum);


// Задача №9

let sum = '';
for (let i=1; i<=10; i=i+1) {
sum = sum +3 +' * '+i+' = ' +3*i + ',';
}
console.log(sum);


// Задача №10

let num = +prompt('Введите любое целое положительное число');
let sum = 0;
for (let i=1; i<=num; i=i+1) {
sum = sum + i;
}
console.log(sum);


// Задача №11

let exit = false;
for(let i = 1; i <= 3; i++){
    if (exit == true)
        break;
   let ans=prompt('Рогатый транспорт');
switch (ans) {
  case 'Троллейбус':
      let answer1 = 'Правильно!'
    console.log(answer1);
    exit = true;
    break;

  case 'Сдаюсь':
      let answer2 = 'Правильный ответ: Троллейбус'
    console.log(answer2);
    exit = true;
    break;

  default:
      let answer3 = 'Подумай еще'
    console.log(answer3);
}
}


// Задача №12

let num1 = +prompt('Введите число1');
let num2 = +prompt('Введите число2');
let sum = 0;

for (let i=num1; i<=num2; i+=2){
  sum +=i;
}
console.log(sum)


// Задача №13

let num = +prompt('Введите любое  число');
let calc = 1;
for (let i=1; i<=num; i++) {
calc = calc * i;
}
console.log(calc);


// Задача №14

let num = 2;
let calc = 1;
for (i=10; i>0; i=i-1) {
calc = calc * num;
}
console.log(calc);
