import React from "react";
import { formTailwind, buttonTailwindCss } from "./Todo-Tailwind";

interface childProps {
  titleRef: React.RefObject<HTMLInputElement>;
  descRef: React.RefObject<HTMLTextAreaElement>;
  dateRef: React.RefObject<HTMLInputElement>;
  addRef: React.RefObject<HTMLInputElement>;
  departureRef: React.RefObject<HTMLInputElement>;
  buttonClickHandler: () => void;
  resetHandler: () => void;
}

function TodoForm({
  titleRef,
  descRef,
  dateRef,
  addRef,
  departureRef,
  buttonClickHandler,
  resetHandler,
}: childProps) {
  return (
    <>
      <form className={formTailwind}>
        <div className="font-bold text-3xl text-custom-letter-color mt-2 mb-2">
          Todo Form
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
          ></input>
        </div>
        <div className="flex flex-col gap-1 items-center w-full">
          <label htmlFor="desc" className="font-bold text-[1.2rem]">
            Desc
          </label>
          <textarea
            ref={descRef}
            className="text-center text-black rounded-lg p-1 w-2/3 h-[10rem] bg-zinc-500"
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
          ></input>
        </div>
        <div className="flex gap-4 mt-8">
          <button
            className={buttonTailwindCss}
            type="button"
            onClick={resetHandler}
          >
            Reset
          </button>
          <button
            className={buttonTailwindCss}
            type="button"
            onClick={buttonClickHandler}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default TodoForm;
