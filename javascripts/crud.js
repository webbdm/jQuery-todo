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

    return old;

})(FbApi || {});
