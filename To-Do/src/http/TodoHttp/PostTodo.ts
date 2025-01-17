import { noneIdTodo } from "../../type/TodoType/TodoInterface"
import {HttpResponse} from '../../type/TodoType/HttpResponse'

export async function todoPost({
  todo_title,
  todo_date,
  todo_desc,
  todo_add_items,
  todo_departure,
}: noneIdTodo): Promise<HttpResponse> {
  const postData = {
    title: todo_title,
    date: todo_date,
    departure: todo_departure,
    desc: todo_desc,
    add_items: todo_add_items,
  };

  const response = await fetch("http://localhost:7070/todo/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    throw new Error("http 에러");
  }

  const resData = await response.json();
  
  return resData;
}
