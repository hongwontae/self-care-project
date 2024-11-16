import { useRef, useState } from "react";
import { getDataType } from "../../type/WayOfThinking-Type/GetResponseType";
import WayOfThinkingModal from "./WayOfThinkingModal";

type WayOfThinkingLinesProps = {
  item: getDataType;
};

type stateProps = {
  line : string
  id : number
}


function WayOfThinkingLine({ item }: WayOfThinkingLinesProps) {
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
      <div className="bg-slate-400 p-2 w-3/5 text-center rounded-lg font-custom-Candal">
        <div
          onClick={() => modalOpenHandler(item.wotLine, item.wotId)}
          className="text-2xl font-bold"
        >
          {item.wotLine}
        </div>
      </div>
    </>
  );
}

export default WayOfThinkingLine;
