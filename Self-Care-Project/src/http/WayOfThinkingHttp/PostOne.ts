import {PostResponse} from '../../type/WayOfThinking-Type/PostResonseType';
export async function PostOne({line, highlight} : {line : string, highlight : boolean}):Promise<PostResponse>{


    const response = await fetch('http://localhost:7070/wot/save/one', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({wotLine : line, highlight : highlight})
    })

    const resData = await response.json();

    return resData;

}