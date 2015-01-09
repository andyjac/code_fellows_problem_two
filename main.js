$(document).ready(function() {
  $('.new-todo-input').keyup(showItemPreview);

  $('.submit-btn').click(addNewTodo);

  $(document).on('click', '.remove-todo', function() {
    $(this).parent().remove();
  });
});

function showItemPreview() {
  $('.todo-item-preview').text($(this).val());
}

function addNewTodo() {
  var newTodoTask = $('.new-todo-input').val()
      , todoItemHTML = '<li class="todo-item">' + newTodoTask +
                       '<a href="#" class="remove-todo">remove</a></li>';

  if (newTodoTask === '') return;
  $('.todo-item-preview').before(todoItemHTML);
  $('.todo-item-preview').text('');
  $('.new-todo-input').val('');
  restrictSubmit();
}

function restrictSubmit() {
  $('.todo-form').submit(function(e) {
    e.preventDefault();
    return;
  });
}
