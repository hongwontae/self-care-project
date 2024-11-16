import { useMutation, useQueryClient } from "@tanstack/react-query";
import { forwardRef } from "react";
import { DeleteOne } from "../../http/WayOfThinkingHttp/DeleteOne";

type stateProps = {
  line: string;
  id: number;
};

interface WayOfThinkingProps {
  lineData: stateProps | null;
  modalDownHandler: () => void;
}

const WayOfThinkingModal = forwardRef<HTMLDialogElement, WayOfThinkingProps>(
  function WayOfThinkingModal({ lineData, modalDownHandler }, ref) {
    const queryClient = useQueryClient();

    console.log(lineData)

    const { mutate } = useMutation<
      { id: number; line: string },
      Error,
      { id: number }
    >({
      mutationFn: DeleteOne,
      onSuccess: () => {
        console.log("delete success");
        queryClient.invalidateQueries({ queryKey: ["wot-all"] });
      },
    });

    return (
      <>
        <dialog
          ref={ref}
          className="p-4 rounded-lg w-1/3 text-center"
          onClose={modalDownHandler}
        >
          <p>
            Do you want to delete{" "}
            <p className="font-bold inline">{lineData?.line}</p>?
          </p>
          <div className="flex justify-end mr-6 gap-4 mt-2">
            <button
              onClick={() => {
                if(lineData?.id){
                    mutate({id : lineData.id})
                    modalDownHandler()
                }
              }}
              className="p-[0.3rem] bg-red-200 rounded-lg"
            >
              Yes
            </button>
            <button
              className="p-[0.3rem] bg-red-200 rounded-lg"
              onClick={modalDownHandler}
            >
              No
            </button>
          </div>
        </dialog>
      </>
    );
  }
);
export default WayOfThinkingModal;
