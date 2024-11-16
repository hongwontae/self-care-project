import { getDataType } from "../../type/WayOfThinking-Type/GetResponseType";
import WayOfThinkLine from './WayOfThinkingLine';

type WayOfThinkingLinesProps = {
  data: getDataType[];
};

const WayOfThinkingLines = ({ data } : WayOfThinkingLinesProps) => {
  return (
    <div className="flex flex-col items-center mt-10 gap-6 mb-10">
      {data.map((item) => (
        <WayOfThinkLine key={item.wotId} item={item}></WayOfThinkLine>
      ))}
    </div>
  );
};

export default WayOfThinkingLines;