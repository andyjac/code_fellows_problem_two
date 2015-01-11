$(document).ready(function() {
  $('.todo-item-preview').hide();

  $('.new-todo-input').keyup(showItemPreview);

  $('.submit-btn').click(addNewTodo);

  $('html').on('click', '.todo-item', removeItem);
});

function showItemPreview() {
  if ($('.new-todo-input').val() !== '') {
    $('.todo-item-preview').show();
  }
  else {
    $('.todo-item-preview').hide();
  }

  $('.todo-item-preview').text($(this).val());
}

function addNewTodo() {
  $('.todo-item-preview').hide();
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
