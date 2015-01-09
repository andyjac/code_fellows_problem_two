$(document).ready(function() {
  $('.submit-btn').click(addNewTodo);

  $('.todo-item').click(function() {
    alert('Function called!');
    $(this).remove();
  });
});

function addNewTodo() {
  var newTodoTask = $('.new-todo-task').val()
      , todoItemHTML = '<li class="todo-item">' + newTodoTask + '</li>';

  if (newTodoTask === '') return;
  $('.todo-list').append(todoItemHTML);
  $('.new-todo-task').val('');
  restrictSubmit();
}

function restrictSubmit() {
  $('.todo-form').submit(function(e) {
    e.preventDefault();
    return;
  });
}
