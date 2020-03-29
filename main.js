//DZ6


// Дан элемент #elem. Добавьте ему класс www.

let elem = document.querySelector('#elem');
elem.classList.add('www');
console.log(elem)

// Дан элемент #elem. Удалите у него класс www.

let elem = document.querySelector('#elem');
elem.classList.remove('www');
console.log(elem)

// Дан элемент #elem. Проверьте наличие у него класса www.

let elem = document.querySelector('#elem');
let contains = elem.classList.contains('www');
console.log(contains);

// Дан элемент #elem. Добавьте ему класс www, если его нет и удалите - если есть.

let elem = document.querySelector('#elem');
let contains = elem.classList.contains('www');
if (contains == false) {
elem.classList.add('www');
}
console.log(elem);

// Дан элемент #elem. Узнайте количество его классов.

let elem = document.querySelector('#elem');
let length = elem.classList.length;
console.log(length);

// Дан элемент #elem. Выведите последовательно алертом его классы.

let elem = document.querySelector('#elem');
let classNames = elem.classList;
for (let className of classNames) {
    alert(className);
}

// Дан элемент #elem. Сделайте его красного цвета, размером 30px, добавьте ему границу. 

let elem = document.querySelector('#elem');
elem.style.cssText = 'color: red; font-size: 30px; padding: 10px;';

// Дан элемент #elem. По клику на него выведите название его тега.

let elem = document.getElementById('#elem');
elem.onclick = function() {
console.log(elem.tagName);
};

// Дан элемент #elem. По клику на него выведите название его тега в нижнем регистре.

let elem = document.getElementById('#elem');
elem.onclick = function() {
console.log(elem.tagName.toLowerCase());
};

// Даны элементы с классом www. Добавьте каждому элементу в конец название его тега в нижнем регистре.

// Дан ol. Вставьте ему в конец li с текстом 'пункт'.

let parent = document.getElementById('parent');
let li = document.createElement('li');
li.innerHTML = 'пункт';
parent.appendChild(li);

// Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.

let parent = document.getElementById('parent');
let array = [1, 2, 3, 4, 5];
for ( i = 0; i < array.length; i++) {
let li = document.createElement('li');
li.innerHTML = array[i];
parent.appendChild(li);
}

// Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, 
// чтобы каждый элемент стоял в своем li. Сделайте так, 
// чтобы к вставляемым li было привязано следующее событие: 
// по нажатию на li она должна вывести на экран свой текст.

let ul = document.getElementById('parent');
let array = [1, 2, 3, 4, 5];
for ( i = 0; i < array.length; i++) {
let li = document.createElement('li');
li.innerHTML = array[i];
li.addEventListener('click', clickF )
ul.appendChild(li);
}
function clickF(){
alert(this.innerHTML);
}

// Дан элемент ul, а в нем li #elem. Вставьте перед элементом #elem новую li с текстом '!!!'.

let parent = document.getElementById('parent');
let elemli = document.getElementById('elem');
let li = document.createElement('li');
li.innerHTML = '!!!';
parent.insertBefore(li, elemli);

// Дан элемент #elem. Вставьте перед ним span с текстом '!!!'.

let elem = document.getElementById('elem');
elem.insertAdjacentHTML('beforeBegin', '<span>!!!</span>');

//  Дан элемент #elem. Вставьте после него span с текстом '!!!'.

let elem = document.getElementById('elem');
elem.insertAdjacentHTML('afterEnd', '<span>!!!</span>');

//  Дан элемент #elem. Вставьте ему в начало span с текстом '!!!'.

let elem = document.getElementById('elem');
elem.insertAdjacentHTML('afterBegin', '<span>!!!</span>');

//  Дан элемент #elem. Вставьте ему в конец span с текстом '!!!'.

let elem = document.getElementById('elem');
elem.insertAdjacentHTML('beforeEnd', '<span>!!!</span>');

// Дан элемент #elem. Найдите первого потомка этого элемента и сделайте его текст красного цвета.

let elem = document.getElementById('elem');
elem.firstElementChild.style.color = 'red';

// Дан элемент #elem. Найдите последнего потомка этого элемента и сделайте его текст красного цвета.

let elem = document.getElementById('elem');
elem.lastElementChild.style.color = 'red';

// Дан элемент #elem. Найдите всех потомков этого элемента и добавьте им в конец текст '!'.

let elem = document.getElementById('elem');
for(i = 0; i < elem.children.length; i++){
elem.children[i].innerHTML += '!';
}

// Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'.

let elem = document.getElementById('elem');
let elemsub = elem.previousElementSibling;
elemsub.innerHTML = elemsub.innerHTML + '!';

// Дан элемент #elem. Найдите его соседа снизу и добавьте ему в конец текст '!'.

let elem = document.getElementById('elem');
let elemsub = elem.nextElementSibling;
elemsub.innerHTML = elemsub.innerHTML + '!';

// Дан элемент #elem. Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) 
//  и добавьте ему в конец текст '!'.

let elem = document.getElementById('elem');
let elemsub = elem.nextElementSibling.nextElementSibling;
elemsub.innerHTML = elemsub.innerHTML + '!';

// Дан элемент #elem. Найдите его родителя и покрасьте его в красный цвет.

let elem = document.getElementById('elem');
let parent = elem.parentElement;
parent.style.color = 'red';

// Дан элемент #elem. Найдите родителя его родителя и покрасьте его в красный цвет.

let elem = document.getElementById('elem');
let parent = elem.parentElement.parentElement;
parent.style.color = 'red';

// Дан элемент #parent, внутри него дан элемент #child. Дана кнопка. 
// По нажатию на эту кнопку удалите элемент #child.

let elem = document.getElementById('click');
elem.addEventListener('click', clickRemove);
function clickRemove(){
let parent = document.getElementById('parent');
let child = document.getElementById('child');
parent.removeChild(child);
}

// Дан ol. По нажатию на кнопку получите его последнего потомка и удалите его.

let elem = document.getElementById('click');
elem.addEventListener('click', clickRemove);
function clickRemove(){
let parent = document.getElementById('parent');
parent.removeChild(parent.lastElementChild);
}

// Дан элемент. Сделайте так, чтобы по нажатию по нему этот элемент удалялся.

let elem = document.getElementById('elem');
elem.addEventListener('click', clickRemove);
function clickRemove(){
this.parentElement.removeChild(this);
}

// Дан ol, а внутри него li. Сделайте так, чтобы по нажатию на любую li эта li удалялась.

let elem = document.getElementsByTagName('li');
for( i = 0; i < elem.length; i++ ){
elem[i].addEventListener('click', clickRemove);
}
function clickRemove(){
this.parentElement.removeChild(this);
}

// Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.

let buttom = document.getElementById('buttonClone');
let input = document.getElementById('input');
buttom.addEventListener('click', funcClone);
function funcClone(){
let clone = input.cloneNode(true);
input.parentElement.appendChild(clone);
}

// Дан массив. Создайте ul через createElement, 
// затем вставьте каждый элемент этого массива в отдельную li внутри этой ul, 
// затем вставьте эту ul в конец body.

let arr = [12,23,34,45,56,67,78,89];
let ul = document.createElement("ul");
for ( i = 0; i < arr.length; i++) {
let li = document.createElement('li');
li.innerHTML = arr[i];
ul.appendChild(li);
}
document.body.appendChild(ul);

//  Дан инпут. Рядом с ним находится кнопочка "+". 
//  По нажатию на эту кнопку под нашим инпутом должен появится еще один пустой инпут.

let buttom = document.getElementById('buttonClone');
let input = document.getElementById('input');
buttom.addEventListener('click', funcClone);
function funcClone(){
let clone = input.cloneNode(true);
input.parentElement.appendChild(clone);
}
 
//  Дан инпут. В него вводится число. По потери фокуса сделайте так, 
//  чтобы каждая цифра вставилась в новый инпут. 
//  Инпутов для цифр изначально не существует, они должны создаться в процессе работы скрипта.

let inputText = document.getElementById('text');
inputText.addEventListener('blur', function() {
let arr = inputText.value.split('');
for ( i=0; i<arr.length; i++) {
let input = document.createElement('input');
input.value = arr[i];
input.disabled = true;
document.body.appendChild(input);
}
inputText.value = null;
})

//  Дана кнопка. Сделайте так, чтобы по нажатию на эту кнопку, скрывался родитель этой кнопки.

let inputSubmit = document.getElementById('submit');
inputSubmit.addEventListener('click', function() {
inputSubmit.parentElement.style.cssText += 'display: none';
})

// Дан элемент #elem с границами. По нажатию на кнопку выведите толщину его верхней границы. 

let elem = document.getElementById('elem');
let click = document.getElementById('infoButton');
click.addEventListener('click', infoClick);
function infoClick(){
alert(elem.clientTop);
}

// Дан элемент #elem с границами. По нажатию на кнопку выведите толщину его левой границы. 

let elem = document.getElementById('elem');
let click = document.getElementById('infoButton');
click.addEventListener('click', infoClick);
function infoClick(){
alert(elem.clientLeft);
}

// Дан элемент #elem с границами. По нажатию на кнопку выведите его полную ширину с учетом границы и padding. 

let elem = document.getElementById('elem');
let click = document.getElementById('infoButton');
click.addEventListener('click', infoClick);
function infoClick(){
alert(elem.offsetWidth);
}

// Дан элемент #elem с границами. По нажатию на кнопку выведите его полную высоту с учетом границы и padding. 

let elem = document.getElementById('elem');
let click = document.getElementById('infoButton');
click.addEventListener('click', infoClick);
function infoClick(){
alert(elem.offsetHeight);
}

// Дан элемент #elem с границами. 
// По нажатию на кнопку выведите его полную ширину без учета границы, но с padding. 

let elem = document.getElementById('elem');
let click = document.getElementById('infoButton');
click.addEventListener('click', infoClick);
function infoClick(){
alert(elem.clientWidth);
}

// Дан элемент #elem с границами. 
// По нажатию на кнопку выведите его полную высоту без учета границы, но с padding. 

let elem = document.getElementById('elem');
let click = document.getElementById('infoButton');
click.addEventListener('click', infoClick);
function infoClick(){
alert(elem.clientHeight);
}

// Дан элемент #elem. Получите его ширину и высоту, без учета границы и padding. 

let elem = document.getElementById('elem');
let click = document.getElementById('infoButton');
click.addEventListener('click', infoClick);
function infoClick(){
alert(getComputedStyle(elem).height + getComputedStyle(elem).width);
}

// Дан элемент #elem с вертикальной полосой прокрутки. 
// По нажатию на кнопку выведите на сколько элемент прокручен сверху. 

let elem = document.getElementById('elem');
let click = document.getElementById('infoButton');
click.addEventListener('click', infoClick);
function infoClick(){
alert('scrollTop: ' + elem.scrollTop);
}

// Дан элемент #elem с горизонтальной полосой прокрутки. 
// По нажатию на кнопку выведите на сколько элемент прокручен слева. 

let elem = document.getElementById('elem');
let click = document.getElementById('infoButton');
click.addEventListener('click', infoClick);
function infoClick(){
alert('scrollLeft: ' + elem.scrollLeft);
}

// Дан элемент #elem с вертикальной полосой прокрутки. 
// По нажатию на кнопку прокрутите его до позиции 100px сверху. 

let elem = document.getElementById('elem');
let click = document.getElementById('infoButton');
click.addEventListener('click', infoClick);
function infoClick(){
elem.scrollTop = 100;
}

// Дан элемент #elem с вертикальной полосой прокрутки. 
// По нажатию на кнопку прокрутите его на 100px вниз от текущего положения

let elem = document.getElementById('elem');
let click = document.getElementById('infoButton');
click.addEventListener('click', infoClick);
function infoClick(){
elem.scrollTop += 100;
}

// Дан элемент #elem с вертикальной полосой прокрутки. 
// По нажатию на кнопку выведите реальную высоту элемента с учетом прокрутки. 

let elem = document.getElementById('elem');
let click = document.getElementById('infoButton');
click.addEventListener('click', infoClick);
function infoClick(){
alert('scrollHeight: ' + elem.scrollHeight);
}

// Дан элемент #elem с горизонтальной полосой прокрутки. 
// По нажатию на кнопку выведите реальную ширину элемента с учетом прокрутки. 

let elem = document.getElementById('elem');
let click = document.getElementById('infoButton');
click.addEventListener('click', infoClick);
function infoClick(){
alert('scrollWidth: ' + elem.scrollWidth);
}

// Дан элемент #elem с вертикальной полосой прокрутки. 
// По нажатию на кнопку прокрутите его до позиции 100px от нижнего края элемента. 

let elem = document.getElementById('elem');
let click = document.getElementById('infoButton');
click.addEventListener('click', infoClick);
function infoClick(){
let height = elem.scrollHeight;
let height_after_scroll = height - 100;
elem.scrollTop = height_after_scroll;
}

// Дана страница с вертикальной полосой прокрутки. 
// По нажатию на кнопку узнайте на сколько страница прокручена по вертикали. 

let elem = document.getElementById('elem');
let click = document.getElementById('infoButton');
click.addEventListener('click', infoClick);
function infoClick(){
alert(pageYOffset);
}

// Дана страница с горизонтальной полосой прокрутки. 
// По нажатию на кнопку узнайте на сколько страница прокручена по горизонтали. 

let elem = document.getElementById('elem');
let click = document.getElementById('infoButton');
click.addEventListener('click', infoClick);
function infoClick(){
alert(pageXOffset);
}

// Дана страница с горизонтальной и вертикальной полосами прокрутки. 
// По нажатию на кнопку прокрутите ее в точку 300px слева, 500px сверху. 

let click = document.getElementById('infoButton');
click.addEventListener('click', moveClick);
function moveClick(){
window.scrollTo(300, 500);
}

// Дана страница с вертикальной полосой прокрутки. 
// По нажатию на кнопку прокрутите на 300px вниз от текущего положения. 

let click = document.getElementById('infoButton');
click.addEventListener('click', moveClick);
function moveClick(){
window.scrollBy(0, 300);
}

// По нажатию на кнопку прокрутите страницу до самого низа. 

let button = document.getElementById('button');
button.addEventListener('click', function() {
let elem = document.getElementById('elem');
elem.scrollTop = elem.scrollHeight;
})

// По нажатию на кнопку прокрутите страницу на 400px от текущего положения. 

let button = document.getElementById('button');
button.addEventListener('click', function() {
let elem = document.getElementById('elem');
elem.scrollTop += 400;
})

// По нажатию на кнопку проверьте, прокручена ли страница до самого низа. 
// Если это так - прокрутите ее в положение 100px от верхнего края. 

let button = document.getElementById('button');
button.addEventListener('click', function() {
let elem = document.getElementById('elem');
if (elem.scrollTop == elem.scrollHeight - elem.clientHeight) elem.scrollTop = 100;
})

// Дан элемент #elem. По клику на него увеличьте его ширину и высоту в 2 раза. 

let elem = document.getElementById('elem');
elem.addEventListener('click', function() {
let style = getComputedStyle(elem);
elem.style.width = parseInt(style.width) * 2 + 'px';
elem.style.height = parseInt(style.height) * 2 + 'px';
})

// Дана кнопка. По нажатию на у кнопку узнайте, есть ли у окна браузера вертикальная прокрутка.

let button = document.getElementById('button');
button.addEventListener('click', function() {
alert(document.documentElement.clientHeight)
})

//  Дана кнопка. По нажатию на эту кнопку прокрутите окно браузера до самого низа. 

let button = document.getElementById('button');
button.addEventListener('click', function() {
document.documentElement.scrollTo(0, document.documentElement.offsetHeight);
})

//  Дана кнопка. По нажатию на эту кнопку узнайте, есть ли у окна браузера вертикальная прокрутка. 

let button = document.getElementById('button');
button.addEventListener('click', function() {
alert('Прокрутка на ' + window.pageYOffset + 'px')
})

// Реализуйте функцию prettify, которая находит текст 
// (дочерние текстовые ноды) внутри элемента div и оборачивает текст в параграф.

(function () {
    window.prettify = function (d) {
        var treeWalker = document.createTreeWalker(d,4),
            elementsArray = [],
            valuesArray = [];
        while (treeWalker.nextNode()) {
            var parentEl = treeWalker.currentNode.parentNode,
                valueElement = treeWalker.currentNode.nodeValue.trim();
            if (parentEl.tagName === 'DIV' && valueElement !== "") {
                elementsArray.push(parentEl);
                valuesArray.push(valueElement);
            }
        }
        for (var i = 0; i < elementsArray.length; i++) {
            elementsArray[i].innerHTML = '<p>' + valuesArray[i] + '</p>';
        }
    };
})();
window.onload = function () {
        const elements = prettify(document);
        console.log(document.body.innerHTML);
    }

// Реализуйте функцию normalize, которая нормализует имена классов для всех элементов на странице. 
// В данном случае это означает что происходит преобразование всех классов 
// написанных используя kebab нотацию в camelCase нотацию: text-center => textCenter

(function () {
    window.normalize = function (d) {
        let all = d.body.getElementsByTagName('*'),
            pattern = /.*-.*/;
        for (i = 0; i < all.length; i++) {
            let res = '';
            for (j = 0; j < all[i].classList.length; j++) {
                let str = all[i].classList[j],
                    pos = str.indexOf('-');
                if (pattern.test(str)) {
                    let chunkStr = str.split(''),
                        resultStr = '',
                        newChar = chunkStr[pos + 1].toUpperCase();
                    chunkStr.splice(pos, 1);
                    chunkStr[pos] = newChar;
                    resultStr = chunkStr.join('');
                } else {
                    resultStr = str;
                }
                res += resultStr + ' ';
            }
            if (res !== '') {
                all[i].removeAttribute('class');
                all[i].setAttribute('class', res.trim());
            }
        }
    };
    window.onload = function () {
        const elements = normalize(document);
        console.log(document.body.innerHTML);
    }
})();
