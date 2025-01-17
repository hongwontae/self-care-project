export async function LineHightlight(id : number){
    const response = await fetch(`http://localhost:7070/wot/highlight/${id}`, {
        method : 'POST',
    })

    console.log('???')

    const resData = await response.json();
    console.log(resData)
    return resData;
}