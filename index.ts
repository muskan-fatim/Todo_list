import inquirer from "inquirer"
let todo = []
let condition = true;
while(condition){
let task = await inquirer.prompt([
    {
       name: "todo",
       type: "input",
       message: "what you want to add to your todo"
    },
    {
        name: "add",
        type: "confirm",
        message: "you want to add more on todo",
        default: false
}])
todo.push(task.todo)
condition = task.add;
for(const i of todo){
    console.log( " your want to do " , i)
    
}
}
