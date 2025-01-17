import {HttpResponse} from '../../type/TodoType/HttpResponse';

export async function getDay(date : string):Promise<HttpResponse>{

    const response = await fetch(`http://localhost:7070/day/one/${date}`);

    if(!response.ok){
        throw new Error('http failed');
    }

    const resData = await response.json();

    return resData;
    
    
}

export default getDay;