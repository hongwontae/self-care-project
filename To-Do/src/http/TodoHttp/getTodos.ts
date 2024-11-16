import {Todo} from '../type/TodoInterface';


export async function getAllTodo(date? : string | null) : Promise<Todo[]>{


    const formattedDate = date?.replace(' ', "");
    
    let response

    if(!date || date.length < 4){
        response = await fetch('http://localhost:7070/todo/all');
    } else {
        response = await fetch(`http://localhost:7070/todo/all/?date=${formattedDate}`);
    }


    if(!response.ok){
        throw new Error('http failed');
    }

    const resData = await response.json();

    return resData;
}