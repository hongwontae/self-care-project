import { useMutation, useQueryClient } from "@tanstack/react-query";
import { forwardRef } from "react";
import { DeleteOne } from "../../http/WayOfThinkingHttp/DeleteOne";
import { LineHightlight } from "../../http/WayOfThinkingHttp/LineHighlightPost";

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

    const { mutate } = useMutation<
      { id: number; line: string },
      Error,
      { id: number }
    >({
      mutationFn: DeleteOne,
      onSuccess: () => {
        console.log("delete success");
        queryClient.invalidateQueries({ queryKey: ["wot-all"] });
        modalDownHandler();
      },
    });

    const { mutate: updateLineMutate } = useMutation({
      mutationFn: LineHightlight,
      onSuccess: () => {
        console.log("update line");
        queryClient.invalidateQueries({ queryKey: ["wot-all"] });
        modalDownHandler();
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
            Do you want to delete or Hightlight{" "}
            <p className="font-bold inline">{lineData?.line}</p>?
          </p>
          <div className="grid grid-cols-5 gap-2 mt-4">
            <button
              className="p-[0.3rem] col-span-1 bg-red-200 rounded-lg font-mono col-start-1 col-span-2 "
              onClick={() => {
                if (!lineData?.id) {
                  return;
                }
                updateLineMutate(lineData.id);
              }}
            >
              Highlight
            </button>
            <button
              onClick={() => {
                if (lineData?.id) {
                  mutate({ id: lineData.id });
                }
              }}
              className="p-[0.3rem] bg-red-200 rounded-lg font-mono col-start-4"
            >
              Yes
            </button>
            <button
              className="p-[0.3rem] bg-red-200 rounded-lg font-mono col-start-5"
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
