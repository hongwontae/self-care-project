import {HttpNoneDataResponse} from '../type/HttpResponse'

interface TodoParameter {
    todo_id : number | undefined | string | null;
    todo_title : string | undefined;
    todo_departure : string | undefined;
    todo_date : string | undefined;
    todo_desc : string | undefined;
    todo_add_items : string | undefined
}

export async function update(updateObject : TodoParameter) : Promise<HttpNoneDataResponse> {
    const response = await fetch(`http://localhost:7070/todo/update/${updateObject.todo_id}`, {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(updateObject)
    });
    
    if(!response.ok){
        throw new Error('update http faled');
    }

    const resData = await response.json();

    return resData;
}