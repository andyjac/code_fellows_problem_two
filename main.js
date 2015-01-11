$(document).ready(function() {
  $('.new-todo-input').keyup(showItemPreview);
  $('.submit-btn').click(addNewTodo);
  $('html').on('click', '.todo-item', removeItem);
});

function showItemPreview() {
  if ($('.new-todo-input').val() !== '') {
    $('.todo-item-preview').css('display', 'list-item');
  }
  else {
    $('.todo-item-preview').css('display', 'none');
  }

  $('.todo-item-preview').text($(this).val());
}

function addNewTodo() {
  $('.todo-item-preview').css('display', 'none');
  var newTodoTask = $('.new-todo-input').val()
      , todoItemHTML = '<li class="todo-item"><a href="#">' + newTodoTask + '</a></li>';

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

function removeItem() {
  $(this).remove();
}
