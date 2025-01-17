import { useRef, useState } from "react";
import WayOfThinkingModal from "./WayOfThinkingModal";

type WayOfThinkingLinesProps = {
  item: {
    wotId : number;
    wotLine : string;
    highlight : boolean;
    createdAt : string;
    updatedAt : string
  };
  highlightTailwind? : string | undefined
};

type stateProps = {
  line : string
  id : number

}


function WayOfThinkingLine({ item, highlightTailwind }: WayOfThinkingLinesProps) {
  const [lineData, setLineData] = useState<stateProps| null>(null);

  const dialogRef = useRef<HTMLDialogElement>(null);

  function modalOpenHandler(line: string, id : number) {
    setLineData({line, id});
    dialogRef.current?.showModal();
  }

  function modalDownHandler() {
    setLineData(null);
    dialogRef.current?.close();
  }

  return (
    <>
      <WayOfThinkingModal
        ref={dialogRef}
        lineData={lineData}
        modalDownHandler={modalDownHandler}
      ></WayOfThinkingModal>
      <div className="bg-slate-400 p-2 w-3/5 text-center rounded-lg font-custon-Bangers">
        <div
          onClick={() => modalOpenHandler(item.wotLine, item.wotId)}
          className={`text-3xl font-bold text-custom-letter-color m-auto ${highlightTailwind || ''}`}
        >
          {item.wotLine}
        </div>
      </div>
    </>
  );
}

export default WayOfThinkingLine;
