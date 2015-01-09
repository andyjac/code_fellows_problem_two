$(document).ready(function() {
  console.log('Jquery loaded!');

  $('.submit-btn').click(function() {
    var newTodoTask = $('.new-todo-task').val();

    if (newTodoTask === '') {
      return;
    }
    $('.todo-list').append('<li class="todo-item">' + newTodoTask + '</li>');
    $('.new-todo-task').val('');
  });

  $('.todo-form').submit(function(e) {
    e.preventDefault();
    return;
  });
});
