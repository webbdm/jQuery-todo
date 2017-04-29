$(document).ready(function() {

    $('#new-item').click(() => {
        $('.list-container').addClass('hide');
        $('.new-container').removeClass('hide');
    });

    $('#list-items').click(() => {
        $('.new-container').addClass('hide');
        $('.list-container').removeClass('hide');
    });

    // Get Todo
    FbApi.getTodos().then(() => {
            FbApi.writeDom();
        })
        .catch((error) => {
            console.log("getTodos Error", error);
        });

    // Add todo
    $('#add-todo-button').click(() => {
        let newTodo = {
            isCompleted: false,
            task: $('#add-todo-text').val()
        };
        FbApi.addTodo(newTodo).then(() => {
            $('#add-todo-text').val();
            $('.new-container').addClass('hide');
            $('.list-container').removeClass('hide');
            FbApi.writeDom(newTodo);
        }).catch((error) => {
        	console.log("Todo error", error);
        });
    });

    // Delete todo
    // Edit todo
    // Complete




});
