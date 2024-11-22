import { UseMutateFunction } from "@tanstack/react-query";
import { useRef } from "react";
import {PostResponse} from '../../type/WayOfThinking-Type/PostResonseType'

interface mutateType {
    mutate : UseMutateFunction<PostResponse, Error, {line : string, highlight : boolean}>
}

function WotPlus({mutate} : mutateType) {
  const wotRef = useRef<HTMLInputElement | null>(null);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Delete" && wotRef.current) {
      wotRef.current.value = "";
    }
    if(e.key === 'Enter' && wotRef.current){
      if(wotRef.current.value === '' || wotRef.current.value.length < 4){
        return;
      }
     mutate({line : wotRef.current.value, highlight : false})
     wotRef.current.value = '';
    }
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <label htmlFor="wot" className="text-4xl font-bold text-custom-wot-label-color mb-6 font-custom-Ubuntu">
          Way of Thinking
        </label>
        <input
          ref={wotRef}
          id="wot"
          onKeyDown={(e) => handleKeyDown(e)}
          type="text"
          className="w-2/3 rounded-lg p-2 text-center text-black text-[1.5rem] font-custon-Bangers"
        ></input>
      </div>
    </>
  );
}

export default WotPlus;
