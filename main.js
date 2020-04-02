// DZ7

// Создайте кнопку, при клике на которую, она будет скрывать сама себя.

<input type="button" onclick="this.hidden=true" value="Нажми, и я спрячусь"></input>

// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id=hide;

let elem = document.getElementById('click');
elem.addEventListener('click', clickRemove);

function clickRemove(){
    let hide = document.getElementById('hide');
    hide.remove();
    }

// Задача. состоит из трёх частей.
// Сделайте список, элементы которого можно выделять кликом.

let ul = document.getElementsByTagName('ul')[0];

ul.onclick = function(e) {
  e = e || event;
  let target = e.target || event.srcElement;

  if (target.tagName != "LI") return;

  selectSingle(target);
}

ul.onselectstart = ul.onmousedown = function() {
  return false;
};

function selectSingle(li) {
  deselectAll();
  li.className = 'selected';
}

function deselectAll() {
  for(var i=0; i<ul.children.length; i++) {
    ul.children[i].className = '';
  }
}

// Добавьте мульти-выделение. Если клик с нажатым Ctrl (Cmd под Mac), 
// то элемент добавляется-удаляется из выделенных.

let ul = document.getElementsByTagName('ul')[0];

ul.onclick = function(e) {
  e = e || event;
  let target = e.target || event.srcElement;

  if (target.tagName != "LI") return;

  let isMac = navigator.platform.indexOf("Mac") != -1;
  if(isMac ? e.metaKey : e.ctrlKey) { 
    toggleSelect(target);
  } else {
    selectSingle(target);
  }
}

ul.onselectstart = ul.onmousedown = function() {
  return false;
};

function toggleSelect(li) {
  li.className = (li.className == '') ? 'selected' : '';
}

function deselectAll() {
  for(i=0; i<ul.children.length; i++) {
    ul.children[i].className = '';
  }
}

function selectSingle(li) {
  deselectAll();
  li.className = 'selected';
}

// Добавьте выделение промежутков. Если происходит клик с нажатым Shift, 
// то к выделению добавляется промежуток элементов от предыдущего кликнутого до этого. 
// При этом не важно, какое именно действие делал предыдущий клик.

let ul = document.getElementsByTagName('ul')[0];

let lastClickedLi = null;

ul.onclick = function(e) {
  e = e || event;
  let target = e.target || event.srcElement;

  if (target.tagName != "LI") return;

  let isMac = navigator.platform.indexOf("Mac") != -1;
  if(isMac ? e.metaKey : e.ctrlKey) { 
    toggleSelect(target);
  } else if (e.shiftKey) {
    selectFromLast(target);
  } else {
    selectSingle(target);
  }

  lastClickedLi = target;
}

ul.onselectstart = ul.onmousedown = function() {
  return false;
}

function toggleSelect(li) {
  li.className = (li.className == '') ? 'selected' : '';
}

function selectFromLast(target) {
  let startElem = lastClickedLi || ul.children[0];

  let isLastClickedBefore = compareDocumentPosition(startElem, target) & 4;

  if (isLastClickedBefore) {
    for(let elem = startElem; elem != target; elem = elem.nextSibling) {
      elem.className = 'selected';
    }
  } else {
    for(let elem = startElem; elem != target; elem = elem.previousSibling) {
      elem.className = 'selected';
    }
  }
  elem.className = 'selected';

}

function deselectAll() {
  for(i=0; i<ul.children.length; i++) {
    ul.children[i].className = '';
  }
}

function selectSingle(li) {
  deselectAll();
  li.className = 'selected';
}

function compareDocumentPosition(a, b) {
  return a.compareDocumentPosition ?
    a.compareDocumentPosition(b) :
      (a != b && a.contains(b) && 16) +
        (a != b && b.contains(a) && 8) +
        (a.sourceIndex >= 0 && b.sourceIndex >= 0 ?
          (a.sourceIndex < b.sourceIndex && 4) +
            (a.sourceIndex > b.sourceIndex && 2) :
          1);
}


// Напишите код, который запрещает прокрутку страницы при помощи мыши и клавиш.

document.onwheel = function() {
    return false;
  };
  
  document.addEventListener ("MozMousePixelScroll",
    function() { 
        return false }, 
        false);
  
  document.onkeydown = function(e) {
    if (e.keyCode >= 33 && e.keyCode <= 40) return false;
  }

// Задача. Переместить элемент в координаты клика мышки.
// Т.е. пользователь кликает и элемент (div, например) передвигается туда.

document.onclick = function(e){
    mydiv.style.left = e.pageX + "px";
    mydiv.style.top = e.pageY + "px";
}