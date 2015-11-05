#### What does this code do?

###### Index.html
-  Defines a controller (TodoListController)
  - Gives it an alias (todoList)
- Gets a list of all items stored in the scope (.remaining)
- Allows you to archive the item (See Todo.js below)
- Allow you to mark off an item as done
  - Activates the Todo.css (done-true)
 - Allows you too add an item (See Todo.js below)

###### Todo.js
- TodoListController
  - Creates a todo list and adds two default values for display
  - addTodo
    - Add a string to the todoList.todos
    - This appends the string & its default properties (done:false)
  - remaining
    - Return all todos that have not been marked as done (done:true)
  - archive
    - Add each todo that is marked as done to a list of all archived todos 

###### Todo.css
- Adds a line through the selected items and changes the text color to grey
