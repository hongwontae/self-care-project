import {getOne} from '../..//type/TodoType/TodoInterface';

export async function getTodoOne(id : number | string) : Promise<getOne>{
    const response = await fetch(`http://localhost:7070/todo/get-one/${id}`);

    if(!response.ok){
        throw new Error('failed http get-one');
    }

    const resData = await response.json();

    return resData;
}