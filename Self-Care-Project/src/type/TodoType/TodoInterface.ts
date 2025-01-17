export interface Todo {
    todo_id: number;
    todo_title: string;
    todo_desc: string;
    todo_date: string;
    todo_add_items: string;
    todo_departure : string;
}

export interface noneIdTodo {
    todo_title: string;
    todo_date: string;
    todo_desc: string;
    todo_departure : string;
    todo_add_items: string;
}

export interface getOne{
    status : boolean,
    message : string,
    data : Todo
}