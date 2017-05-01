var FbApi = ((old) => {

    old.getTodos = () => {
        let items = [];
        return new Promise((resolve, reject) => {
            $.ajax('./db/seed.json')
                .done((data) => {
                    let response = data.items;
                    Object.keys(response).forEach((key) => {
                        console.log("key", key);
                        response[key].id = key;
                        items.push(response[key]);
                    });
                    FbApi.setTodos(items);
                    resolve();
                })
                .fail((error) => {
                    reject(error);
                });
        });
    };

    old.addTodo = (newTodo => {
    	return new Promise ((resolve, reject)=>{
    		newTodo.id = `item${FbApi.todoGetter().length}`;
    		console.log("newTodo", newTodo);
    		FbApi.setSingleTodo(newTodo);
    		resolve();
    	});
    });

    old.checker = (id) => {
    	return new Promise((resolve,reject)=>{
    		FbApi.setChecked(id);
    		resolve();
    	});
    };

    old.deleteTodo = (id) => {
    	return new Promise ((resolve, reject)=>{
    		FbApi.duhlete(id);
    		resolve();
    	});
    };


    return old;

})(FbApi || {});
