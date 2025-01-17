import { forwardRef } from "react";
import { DeleteTodo } from "../../http/TodoHttp/DeleteTodo";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface deleteProps {
  deleteCloseHandler: () => void;
  title: string | undefined;
  id: number | undefined;
  modalDownHandler : ()=>void
}

const deleteModalTailwindCSS = `
px-5 py-2.5 bg-custom-blue text-white font-bold rounded-md 
hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-gray-400 
focus:ring-opacity-50 transition duration-150
`;

const DeleteModal = forwardRef<HTMLDialogElement, deleteProps>(
  function DeleteModal({ deleteCloseHandler, modalDownHandler, title, id }, ref) {

    const queryClient = useQueryClient();

    const { mutate } = useMutation({
      mutationFn: DeleteTodo,
      onSuccess: () => {
        console.log("Success Delete Todo");
        queryClient.invalidateQueries({queryKey : ['todos']});
        deleteCloseHandler();
        modalDownHandler();
      },
    });

    function deleteHandler() {
      mutate(id);
    }

    return (
      <dialog onClose={deleteCloseHandler} ref={ref} className="p-6 w-1/3 rounded-lg">
        <div className="text-[1.2rem]">
          Do you want to delete <div className="inline font-bold">{title}?</div>
        </div>
        <div className="flex flex-row justify-end gap-2">
          <button className={deleteModalTailwindCSS} onClick={deleteHandler}>
            Yes
          </button>
          <button
            className={deleteModalTailwindCSS}
            type="button"
            onClick={deleteCloseHandler}
          >
            No
          </button>
        </div>
      </dialog>
    );
  }
);

export default DeleteModal;
