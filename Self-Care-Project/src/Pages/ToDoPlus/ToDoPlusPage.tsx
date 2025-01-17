import { useRef } from "react";
import  TodoForm from "../../components/TodoPlusComponent/TodoForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todoPost } from "../../http/TodoHttp/PostTodo";
import {useNavigate} from 'react-router-dom';

function ToDoPlusPage() {

  const navigate = useNavigate();
  const queryCleint = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: todoPost,
    onSuccess: () => {
      console.log('Success');
      queryCleint.invalidateQueries({queryKey : ['todos']})
      navigate('/');
    },
    onError : (error)=>{
      if(error instanceof Error){
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  });

  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const departureRef = useRef<HTMLInputElement>(null);
  const addRef = useRef<HTMLInputElement>(null);
  

  function buttonClickHandler() {
    mutate({
      todo_title: titleRef.current?.value || "",
      todo_date: dateRef.current?.value || "",
      todo_desc: descRef.current?.value || "",
      todo_departure : departureRef?.current?.value || "",
      todo_add_items: addRef.current?.value || "",
    });
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
      <div className="mt-4">
        <TodoForm
          buttonClickHandler={buttonClickHandler}
          titleRef={titleRef}
          descRef={descRef}
          dateRef={dateRef}
          addRef={addRef}
          departureRef={departureRef}
          resetHandler={resetHandler}
        ></TodoForm>
      </div>
    </>
  );
}

export default ToDoPlusPage;
