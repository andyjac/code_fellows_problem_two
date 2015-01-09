$(document).ready(function() {
  $('.submit-btn').click(addNewTodo);

  $(document).on('click', '.remove-todo', function() {
    $(this).parent().remove();
  });
});

function addNewTodo() {
  var newTodoTask = $('.new-todo-task').val()
      , todoItemHTML = '<li class="todo-item">' + newTodoTask +
                       '<a href="#" class="remove-todo">remove</a></li>';

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
