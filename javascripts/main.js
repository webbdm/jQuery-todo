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
            countTask();
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
            countTask();
        }).catch((error) => {
            console.log("Todo error", error);
        });
    });

    // Delete todo
    $('.main-container').on("click", '.delete', (event) => {
        FbApi.deleteTodo(event.target.id).then(() => {
            FbApi.writeDom();
            countTask();
        }).catch((error) => {
            console.log("error in deleteTodo", error);
        });
    });


    // Edit todo
    $('.main-container').on('click', '.edit', (event) => {
        let editText = $(event.target).closest('.col-xs-4').siblings('.col-xs-8').find('.task').html();
        FbApi.editTodo(event.target.id).then(() => {
        	$('.list-container').addClass('hide');
            $('.new-container').removeClass('hide');
            $('#add-todo-text').val(editText);
        }).catch((error) => {
            console.log("error from edit todo", error);
        });
    });


    // Complete
    $('.main-container').on('click', 'input[type="checkbox"]', (e) => {
        console.log("test");
        id = e.target.id;
        FbApi.checker(id).then(() => {
            FbApi.writeDom();
            countTask();
        }).catch((error) => {
            console.log("checker error", error);
        });
    });


    let countTask = () => {
        let remainingTasks = $('#incomplete-tasks li').length;
        $('#counter').hide().fadeIn(2500).html(remainingTasks);
    };



});
