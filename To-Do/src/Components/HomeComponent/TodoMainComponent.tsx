import { useRef, useState } from "react";
import { formatDate } from "../../util/DateFormatt";
import TodoModal from "../CustomComponents/TodoModal";
import DaySelect from "../CustomComponents/DaySelect";
import {Todo} from '../../type/TodoInterface';


interface TodoMainComponentProps {
  data: Todo[] | undefined;
  dayData: string[] | undefined;
}

const containerTailwind = `bg-slate-400 text-black text-center w-11/12 m-auto 
h-[8rem] rounded-lg flex flex-col justify-center gap-2 overflow-hidden font-custom-Oswald 
hover:bg-red-400`;

function TodoMainComponent({ data, dayData }: TodoMainComponentProps) {
  const [todoOne, setTodoOne] = useState<Todo | null>(null);

  const dialogRef = useRef<HTMLDialogElement>(null);

  function modalOpenHandler(ele: Todo) {
    setTodoOne({ ...ele });
    dialogRef.current?.showModal();
  }

  function modalDownHandler() {
    setTodoOne(null);
    dialogRef.current?.close();
  }

  return (
    <>
      <TodoModal
        ref={dialogRef}
        modalDownHandler={modalDownHandler}
        todoOne={todoOne}
      ></TodoModal>

      <DaySelect dayData={dayData}></DaySelect>

      <div className="grid grid-cols-3 gap-4 w-full mb-10 max-homepage-box-1:grid-cols-2 max-homepage-box-2:grid-cols-1">
        {data &&
          data.map((ele) => {
            const date = formatDate(ele.todo_departure);
            const sDate = formatDate(ele.todo_date);
            return (
              <div
                key={ele.todo_id}
                className={containerTailwind + ' overflow-hidden'}
                onClick={() => modalOpenHandler(ele)}
              >
                <div className="font-bold text-white text-[1.4rem] sticky top-0 z-10 ">
                  {ele.todo_title}
                </div>
                <div className="text-slate-900">
                  <div className="inline font-bold text-[1.2rem]">
                    Departure Time :
                  </div>{" "}
                  {date}
                </div>
                <div className="text-slate-900">
                  <div className="inline font-bold text-[1.2rem]">
                    Schedule Time :
                  </div>{" "}
                  {sDate}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default TodoMainComponent;
