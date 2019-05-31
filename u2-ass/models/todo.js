const todos = [
    {id: '1', desc: "Eat Tomatillos"}, 
    {id: '2', desc: "Run"}
];

module.exports = {
    getAll,
    addNew
};

function getAll() {
    return todos;
}

function addNew(todo){
todos.id = `${todos.length +1}`
todos.push(todo)
}

