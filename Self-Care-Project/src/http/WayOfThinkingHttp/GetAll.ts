import {GetAllType} from '../../type/WayOfThinking-Type/GetResponseType';

export async function getAll() : Promise<GetAllType> {
    const response = await fetch('http://localhost:7070/wot/all');

    const resData = await response.json();
    console.log(resData)
    return resData;
}