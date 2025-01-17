import { useQuery } from "@tanstack/react-query";
import TodoMainComponent from "../../Components/HomeComponent/TodoMainComponent";
import {getAllTodo} from '../../http/TodoHttp/getTodos';
import {nowMonthGetDays} from '../../http/TodoHttp/GetDays';
import Loading from "../../Components/LoadingComponent/Loading";
import { useSelector } from "react-redux";
import {RootState} from '../../store/store';
import {Todo} from '../../type/TodoType/TodoInterface';
import Error from '../../Components/ErrorComponent/Error'



function HomePage(){
    const {isDate} = useSelector((state : RootState)=> state.isDate);


    const {data, error, isError, isLoading} = useQuery<Todo[], Error>({
        queryKey : ['todos', isDate],
        queryFn : ()=>{
            return getAllTodo(isDate)
        },
        staleTime : 100000
    });

    const {data : dayData,} = useQuery<string[], Error>({
        queryKey : ['date'],
        queryFn : nowMonthGetDays,
        staleTime : 5*6*1000
    })

    if(isLoading){
        return <Loading></Loading>
    }

    if(isError){
        return <Error error={error}></Error>
    }

    return(
        <>
            <TodoMainComponent data={data} dayData={dayData}></TodoMainComponent>
        </>
    )
}

export default HomePage;