
// DZ AJAX

let module_todos_list = (function () {
    function ajax(url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onreadystatechange = function () {
            //if (this.readyState == 4 && this.status == 200)
            if (this.readyState == 4) {
                if (this.status == 200)
                    callback(JSON.parse(this.responseText));
            }
        };
        xhr.send(null);
    }
  
    ajax('https://jsonplaceholder.typicode.com/todos', function (data) {
        let list = document.getElementById('todos_list');
        let currentIndex = 0;
        let currentLimit = 10; 
        let button = document.getElementById('MoreButton');
        button.addEventListener('click', showTodos);

        function showTodos() {
            currentLimit += currentIndex;
            for (currentIndex; currentIndex < currentLimit && currentIndex < data.length; currentIndex++) {
              list.innerHTML += data[currentIndex] + "<br />"; 
            };
        data.map(function (el) {   
            
          let div_todos = document.createElement('div');
          div_todos.className = 'todo';
          let todos = document.createTextNode('todo:');
          let todo_userId = document.createTextNode('userId:' + el.userId);
          let todo_id = document.createTextNode('id:' + el.id);
          let todo_title = document.createTextNode('title:' + el.title);
          let todo_completed = document.createTextNode('completed:' + el.completed);
          div_todos.appendChild(todos);		
          div_todos.appendChild(document.createElement("p"));
          div_todos.appendChild(todo_userId);		
          div_todos.appendChild(document.createElement("br"));
          div_todos.appendChild(todo_id);		
          div_todos.appendChild(document.createElement("br"));
          div_todos.appendChild(todo_title);		
          div_todos.appendChild(document.createElement("br"));
          div_todos.appendChild(todo_completed);		
          div_todos.appendChild(document.createElement("br"));
          div_todos.appendChild(document.createElement("br"));
          list.appendChild(div_todos);			
            });	

            }
    });
})();