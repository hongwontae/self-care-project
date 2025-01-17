import {Todo} from '../../type/TodoType/TodoInterface'


export async function DeleteTodo(id : number | undefined) : Promise<Todo>{
    const response = await fetch(`http://localhost:7070/todo/delete/${id}`, {
        method : 'DELETE',
    });

    if(!response.ok){
        throw new Error('Delete Http Failed')
    }

    const resData = await response.json();
    console.log(resData);
    return resData;

}