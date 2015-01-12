$(document).ready(function() {
  $('.new-todo-input').keyup(showItemPreview);
  $('.submit-btn').click(addNewTodo);
  $('html').on('click', '.todo-item', completeTodo);
});

function showItemPreview() {
  if ($('.new-todo-input').val().trim() !== '') {
    $('.todo-item-preview').css('display', 'list-item');
  } else {
    $('.todo-item-preview').css('display', 'none');
  }

  $('.todo-item-preview').text($(this).val());
}

function addNewTodo() {
  var newTodoTask = $('.new-todo-input').val()
      , todoItemHTML = '<li class="todo-item"><a href="#">' + newTodoTask + '</a></li>';

  if (newTodoTask.trim() === '') return;

  $('.todo-item-preview').css('display', 'none');
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

function completeTodo() {
  $(this).text('Done!').css('color', 'green').delay(500).fadeOut(300);
}
