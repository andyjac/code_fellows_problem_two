$(document).ready(function() {
  $('.submit-btn').click(addNewTodo);
});

function addNewTodo() {
  var newTodoTask = $('.new-todo-task').val();

  if (newTodoTask === '') return;
  $('.todo-list').append('<li class="todo-item">' + newTodoTask + '</li>');
  $('.new-todo-task').val('');
  restrictSubmit();
}

function restrictSubmit() {
  $('.todo-form').submit(function(e) {
    e.preventDefault();
    return;
  });
}
