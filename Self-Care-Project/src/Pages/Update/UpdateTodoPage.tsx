import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { getTodoOne } from "../../http/TodoHttp/GetTodo";
import {
  useNavigationType,
  NavigationType,
  useNavigate,
} from "react-router-dom";
import { dateLocalFormat } from "../../util/DateFormatt";
import { update } from "../../http/TodoHttp/UpdateTodo";

const formTailwind = `bg-slate-400 rounded-lg w-3/5 pt-2 pb-10 m-auto 
grid grid-rows-[repeat(6,auto)] justify-items-center items-center gap-2 font-custom-Ubuntu mb-10 mt-2
max-plus-page-2:w-4/5`;

const buttonTailwind = `px-5 py-2.5 bg-gray-700 text-white font-medium rounded-md 
  hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-150`;

function UpdateTodoPage() {
  const navigationType = useNavigationType();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const storedId = sessionStorage.getItem("todo")
    ? sessionStorage.getItem("todo")
    : null;

  const { data } = useQuery({
    queryKey: ["update-todo", storedId],
    queryFn: () => {
      if (storedId) {
        return getTodoOne(storedId);
      } else {
        throw new Error("sesstion id가 존재하지 않습니다.");
      }
    },
  });

  const { mutate } = useMutation({
    mutationFn: update,
    onSuccess: () => {
      console.log("Success Update");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      queryClient.invalidateQueries({ queryKey: ["update-todo", storedId] });
      navigate("/");
    },
  });

  useEffect(() => {
    return () => {
      if (
        navigationType === NavigationType.Push ||
        navigationType === NavigationType.Pop
      ) {
        queryClient.invalidateQueries({ queryKey: ["update-todo", storedId] });
        sessionStorage.removeItem("todo");
      }
    };
  }, [navigationType, queryClient, storedId]);

  const titleRef = useRef<HTMLInputElement>(null);
  const departureRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const addRef = useRef<HTMLInputElement>(null);

  function updateHandler() {
    const updateObject = {
      todo_id: storedId,
      todo_title: titleRef?.current?.value,
      todo_departure: departureRef?.current?.value,
      todo_date: dateRef?.current?.value,
      todo_desc: descRef?.current?.value,
      todo_add_items: addRef?.current?.value,
    };
    mutate(updateObject);
  }

  function resetHandler() {
    if(titleRef.current){
      titleRef.current.value = '';
    }
    if(departureRef.current){
      departureRef.current.value = '';
    }
    if(dateRef.current){
      dateRef.current.value = '';
    }
    if(descRef.current){
      descRef.current.value = '';
    }
    if(addRef.current){
      addRef.current.value = '';
    }
  }

  return (
    <>
      <form className={formTailwind}>
        <div className="font-bold text-3xl text-custom-letter-color mt-2 mb-2">
          Update Todo
        </div>
        <div className="flex flex-col gap-1 justify-center items-center w-full">
          <label htmlFor="title" className="font-bold text-[1.2rem]">
            To Do-Title
          </label>
          <input
            ref={titleRef}
            className="text-center text-black rounded-lg p-1 w-1/2 max-plus-page-1:w-10/12"
            type="text"
            id="title"
            defaultValue={data && data?.data.todo_title}
          ></input>
        </div>
        <div className="flex flex-col gap-1 items-center w-full">
          <label htmlFor="departure time" className="font-bold text-[1.2rem]">
            Departure Time
          </label>
          <input
            type="datetime-local"
            ref={departureRef}
            className="text-center text-black rounded-lg p-1 w-1/2 max-plus-page-1:w-10/12 max-plus-page-2:w-8/12"
            defaultValue={data && dateLocalFormat(data.data.todo_departure)}
          ></input>
        </div>
        <div className="flex flex-col gap-1 items-center w-full">
          <label htmlFor="date" className="font-bold text-[1.2rem]">
            To Do-Date
          </label>
          <input
            ref={dateRef}
            className="text-center text-black rounded-lg p-1 w-1/2 max-plus-page-1:w-10/12 max-plus-page-2:w-8/12"
            type="datetime-local"
            defaultValue={data && dateLocalFormat(data.data.todo_date)}
          ></input>
        </div>
        <div className="flex flex-col gap-1 items-center w-full">
          <label htmlFor="desc" className="font-bold text-[1.2rem]">
            Desc
          </label>
          <textarea
            ref={descRef}
            className="text-center text-black rounded-lg p-1 w-2/3 h-[10rem] bg-zinc-500"
            defaultValue={data && data.data.todo_desc}
          ></textarea>
        </div>
        <div className="flex flex-col gap-1 items-center w-full">
          <label htmlFor="ai" className="font-bold text-[1.2rem]">
            Additional items
          </label>
          <input
            ref={addRef}
            type="text"
            className="text-center text-black rounded-lg p-1 w-1/2 max-plus-page-1:w-10/12 max-plus-page-2:w-8/12"
            defaultValue={data && data.data.todo_add_items}
          ></input>
        </div>
        <div className="flex gap-4 mt-8">
          <button className={buttonTailwind} type="button" onClick={resetHandler}>
            Reset
          </button>
          <button
            className={buttonTailwind}
            type="button"
            onClick={updateHandler}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default UpdateTodoPage;
