type parameterProps = {
    id : number
}

export async function DeleteOne({id} : parameterProps){
    console.log(id)
    const response = await fetch(`http://localhost:7070/wot/delete/${id}`, {
        method : 'DELETE'
    });

    const resData = await response.json();

    return resData;

}