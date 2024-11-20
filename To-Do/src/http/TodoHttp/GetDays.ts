export async function nowMonthGetDays(){
    const response = await fetch('http://localhost:7070/date/month/all');


    if(!response.ok){
        throw new Error('http failed');
    }

    const resData = await response.json();
    console.log(resData);

    return resData;

}