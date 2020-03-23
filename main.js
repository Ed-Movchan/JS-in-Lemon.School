// DZ4


// 1. Клонирование массива
// Напишите функцию copyArr(arr), которая копирует массив не изменяя оригинал.

function copyArr(arr){
	console.log(arr)
	let newArr = arr.slice()
	return console.log(newArr)
}
copyArr([23,45,67,78,90])

// 2. Преобразование массива в строку
// Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. 
// Элементы массива будут разделены запятой. Получите результат двумя разными методами.

let arr1 = [1,2,3];
console.log(arr1.join());
let numbers = [ 4, 5, 6, 7];
let arr2 = numbers.toString();
console.log(arr2);

// Заполните массив 10-ю иксами с помощью цикла.

let arr3 = [];
while (arr3.length <10) {
	arr3.push('x');
}
console.log(arr3)

// Заполните массив числами от 1 до 10 с помощью цикла

let element = 1;
let arr4 = [];
while (element <=10) {
arr4.push(element++)
}
console.log(arr4)

// Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. 
// Дроби округляйте до двух знаков в дробной части.

// Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла. 

function shuffle(array) {
	array.sort(() => Math.random() - 0.5);
  }
let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
shuffle(arr6);
console.log(arr6);

// Дан массив с числами. 
// С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти. 

let arr7 = [345, 99867, 2, 84056, 9, 384538, 1231, 3];
let newArr = arr7.filter(function(number) {
	return number > 0 && number < 10;
});
console.log(newArr)

// Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. 
// Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. 
// Если такого элемента нет - ничего не выводите.

let arr8 = [87, 456, 86, 234, 786, 6, 879, 6953];
for (let i = 0; i < arr8.length; i++) {
	const element = arr8[i];
	if (element == 5) {
		console.log('Есть');
		break;
	} else {
	break;
	}
}

// Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.

let arr9 = [243, 546, 753, 3, 642, 6456, 78];
function arr9Sum(arr9){
	var sum = 0;
	for(var i = 0; i < arr9.length; i++){
		sum += arr9[i];
		}
	console.log(sum);
	}
	arr9Sum(arr9);

// Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива. 

let arr10 = [2, 4, 8, 16, 32, 64];
let newArr = [];
for(let i = 0; i < arr10.length; i++) {
  let sqr = arr10[i] * arr10[i];
  newArr.push(sqr);
}
let sum = 0;
for(let j = 0; j < newArr.length; j++) {
  sum += newArr[j];
}
console.log(sum);

// Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество)

function averageСost(arr11) {
	var sum = 0;
	for(var i = 0; i < arr11.length; i++) {
		sum += arr11[i];
	}
	return sum / arr11.length;
 }
 console.log(averageСost([4325,2342,6467,2342,54,12,8758,1,76]))

// Пользователь вводит многозначное число через promt. 
// Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента 
// и вставляет двоеточие (:) между двумя нечетными числами. 
// Например, если вводится число 55639217, то на выход должно быть 5:563:921:7.

let num = prompt('Введите многозначное число');
function colodOdd(num) {
	let str = num.toString();
  let result = [str[0]];
  for(i=1; i<str.length; i++) {
      if((str[i-1]%2 !== 0)&&(str[i]%2 !== 0)) {
        result.push(':', str[i]);
       }
      else {
        result.push(str[i]);
      }
  }
  return result.join('');  
}
console.log(colodOdd(num));

// Напишите функцию removeDuplicates(arr), которая возвращает массив,
// в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).

let arr12 = ["gold", "gold", "pink", "pink",
  "black", "black", "silver", "silver", "blue"
];
function removeDuplicates(arr12) {
  let obj = {},
      out=[];
  for (var i = 0; i < arr12.length; i++) {
    var str = arr12[i];
    obj[str] = true; 
  }
     for (i in obj) {
       out.push(i);
     }
     return out;
}
result = removeDuplicates(arr12);
console.log(result);

// Напишите функцию getFirst(array, n), которая возвращает фрагмент массива, 
// содержащий первые 'n' элементов массива.

let arr13 = [2,3,4,5,6,7,8,9,10];
function getFirst(arr13, n) {
    if (arr13 == null) return false;
    if (n == null) return arr13[0];
  return arr13.slice(0, n);
};
console.log(getFirst(arr13)); 
console.log(getFirst(arr13, 4));
console.log(getFirst(arr13,-3));

// Сумма элементов двух массивов
// Напишите код, который создаёт массив элементов 
// представляющих собой сумму соответствующих элементов заданных массивов.

let arr14 = [1, 2, 3, 4, 5];
let arr15 = [4, 5, 6];
let arr16 = [];
if (arr14.length > arr15.length) {
    var count = arr14.length;
  } else {
    var count = arr15.length;
  }
      for (i = 0; i < count; i++) {
        if (arr15[i] === undefined) {
            arr15.push(0);
        } else {
            if (arr14[i] === undefined) {
              arr14.push(0);
            }
        }
        arr16.push(arr14[i] + arr15[i]);
      }
console.log(arr16)

// Объединить два массива без дублирования элементов
// Напишите функцию union, которая возвращает массив 
// состоящий только из уникальных элементов из каждого массива.

let arr17 = [9, 14, 26, 67, 89];
let arr18 = [9, 14, 1, 67, 104, 12];
let union = function(arr17, arr18) {
    let arr19 = [];
    let arr = arr17.concat(arr18);
    let len = arr.length;
    let obj = {};
    while(len--) {
        let itm = arr[len];
        if(!obj[itm]) {
            arr19.unshift(itm);
            obj[itm] = true;
        }
    }
    return arr19;
};
console.log(union(arr17, arr18));

// Напишите функцию union, которая возвращает массив, 
// содержащий все элементы arr1, которые не находятся в arr2 и наоборот.

let arr20 = [40, 99, 88];
let arr21 = [40, 99, 345, 890, 1212];  
function arrayDiff(arr20, arr21) {
  let obj1={}, obj2={}, diff=[], key;
  for (let i=0; i < arr20.length; i++) { obj1[arr20[i]] = true; }
  for (let i=0; i < arr21.length; i++) { obj2[arr21[i]] = true; }
  for (key in obj1) { if (!(key in obj2)) { diff.push(key); } }
  for (key in obj2) { if (!(key in obj1)) { diff.push(key); } }
  return diff;
}
console.log(arrayDiff(arr20, arr21)); 
console.log(arrayDiff(arr21, arr20));

// Напишите функцию compareNumbers(arr), которая возвращает массив, 
// элементы которого отсортированы по убыванию их значений.

function compareNumbers(arr22){
	var arr22 = arr22.sort(function(a,b){return a-b})
	console.log(arr22)
  }
  let numbers = [88, 23, 45, 678, 55, -99, -4, 62, 11];
  compareNumbers(numbers);

// Напишите функцию sumOfSquares(arr), которая возвращает сумму квадратов значений массива.

function sumOfSquares(arr23) {
	return arr23.reduce(function (prev, cur) {
	  return prev + cur * cur;
	  })
  }
  console.log(sumOfSquares([1, 2, 3, 4, 5]));

// Напишите код, который определяет сумму и произведение значений массива.

let arr24 = [1,2,3,4,5,6,7,8,9];
let sum = arr24.reduce(function(prev, curr) { return prev + curr });
let product = arr24.reduce(function(prev, curr) { return prev * curr });
console.log("Сумма : "+sum);
console.log("Произведение : "+product);

// Напишите функцию filterFalse(arr), которая очищает массив от ложных (false) 
// значений: false, null, undefined, 0, –0, NaN и "" (пустя строка).

let arr25 = [NaN, 0, 77, false, -17, '',undefined, 99, null];
function filterFalse(arr25) {
  return arr25.filter(function(v) { return !!v; });
}
console.log(filterFalse(arr25));

// Переместить элемент массива из одной позиции в другую
// Напишите функцию moveElement(arr,from,to), 
// которая позволяет переместить элемент массива из позиции from в позицию to.

function moveElement(arr26,from,to) {
	arr26.splice(to,0,arr26.splice(from,1)[0]);
	return arr26;
  };
  let arr26 = [ 1, 2, 3, 4, 5];
  console.log(moveElement(arr26,3,1));

// Напишите функцию generateNumbers(start, len), которая генерирует массив заданной длины len, 
// заполненный целыми числами, где каждое число больше предыдущего на единицу.

function generateNumbers(start, len) {
    let arr27 = Array(len);
    for ( i = 0; i < len; i++, start++) {
      arr27[i] = start;
    }
        return arr27;
}
console.log(generateNumbers(8, 16));

// Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. 
// Использую метод reduce() напишите функцию currentSums(numbers), 
// которая возвращает новый массив из такого же числа элементов, 
// в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

let numbers = [2, 3, 5, 7, 11, 13, 17];
function currentSums(numbers) {
   let result = [];
   numbers.reduce(function(sum, current, i) {
      return result[i] = sum + current;
   }, 0);
   console.log(result);
}
currentSums(numbers);

// Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

let arr28 = ['a', 'b', 'c'];
let element = 1;
while (element<=3) {
	arr28.push(element++);
}
console.log(arr28);

// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

let arr29 = [1,2,3];
arr29.reverse();
console.log(arr29);

// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

let arr30 = [1,2,3];
newLength = arr30.unshift(4,5,6);
console.log(arr30);

// Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

let arr31 = ['js', 'css', 'jq'];
console.log(arr31[2]);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

let arr32 = [1,2,3,4,5];
arr33 = arr32.slice([3], [5]);
console.log(arr33);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

let arr34 = [1,2,3,4,5];
arr34.splice(1,2);
console.log(arr34);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

let arr35 = [1,2,3,4,5];
arr36 = arr35.splice(1,3);
console.log(arr36);

// Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.

let arr37 = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
arr38 = arr37[1];
console.log(arr38[0]);

// Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.

let obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
console.log(obj.js[0]);

// Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.

let arr38 = ['a', 'b', 'c'];
alert(arr38);

//  С помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.

let arr39 = ['a', 'b', 'c'];
alert(arr39[0]);              
alert(arr39[1]);
alert(arr39[2]);

//  Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.

let arr40 = ['a', 'b', 'c', 'd'];
console.log(arr40[0] + '+' + arr40[1] + ',' + arr40[2] + '+' + arr40[3]);

//  Создайте массив arr с элементами 2, 5, 3, 9. 
//  Умножьте первый элемент массива на второй, а третий элемент на четвертый. 
//  Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.

let arr41 = [2, 5, 3, 9];
calc1 = arr41[0] * arr41[1];
calc2 = arr41[2] * arr41[3];
result = calc1 + calc2;
console.log(result);
