import { forwardRef, useRef } from "react";
import { formatDate } from "../../util/DateFormatt";
import { buttonTailwindCss } from "../TodoPlusComponent/Todo-Tailwind";
import DeleteModal from "./DeleteModal";
import { useNavigate } from "react-router-dom";
import {Todo} from '../../type/TodoType/TodoInterface'

interface todoModalProps {
  modalDownHandler: () => void;
  todoOne: Todo | null;
}

const TodoModal = forwardRef<HTMLDialogElement, todoModalProps>(
  function TodoModal({ modalDownHandler, todoOne }, ref) {

    const navigate = useNavigate();

    const dialogRef = useRef<HTMLDialogElement>(null);

    const date = formatDate(todoOne?.todo_date || "");
    const departure = formatDate(todoOne?.todo_departure || "");

    function deleteCloseHandler() {
      dialogRef.current?.close();
    }

    function deleteOpenHandler() {
      dialogRef?.current?.showModal();
    }

    function updateHandler(){
      sessionStorage.setItem('todo', JSON.stringify(todoOne?.todo_id));
      navigate('/to-do/update')
    }

    return (
      <>
        <DeleteModal
          id={todoOne?.todo_id}
          ref={dialogRef}
          deleteCloseHandler={deleteCloseHandler}
          title={todoOne?.todo_title}
          modalDownHandler={modalDownHandler}
        ></DeleteModal>
        <dialog
          onClose={modalDownHandler}
          ref={ref}
          className="p-6 w-8/12 rounded-lg font-custome-Poppins bg-stone-500"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="font-bold text-custom-letter-color mb-4 text-2xl">
              Todo : {todoOne && todoOne?.todo_title}
            </div>
            <div className="text-white">
              <div className="inline font-bold text-black">
                Departure Time :{" "}
              </div>
              {departure}
            </div>
            <div className="text-white">
              <div className="inline font-bold text-black">
                Scheduled Time :{" "}
              </div>
              {date}
            </div>
            <div className="text-white">
              <div className="inline font-bold text-black">Info : </div>
              {todoOne?.todo_desc}
            </div>
            <div className="text-white">
              <div className="inline font-bold text-black">Itmes : </div>
              {todoOne?.todo_add_items}
            </div>
          </div>

          <div className="flex flex-row justify-end gap-4 mt-4">
            <button
              type="button"
              className={buttonTailwindCss}
              onClick={deleteOpenHandler}
            >
              Delete
            </button>
            <button onClick={updateHandler} type="button" className={buttonTailwindCss}>
              Update
            </button>
            <button
              type="button"
              className={buttonTailwindCss}
              onClick={modalDownHandler}
            >
              Close
            </button>
          </div>
        </dialog>
      </>
    );
  }
);

export default TodoModal;
