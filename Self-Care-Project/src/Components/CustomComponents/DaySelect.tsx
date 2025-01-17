import { setDate } from "../../store/ToggleSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useQueryClient } from "@tanstack/react-query";
import {containerTailwind, dayselectTailwind} from './DaySelectTailwind';

interface Days {
  dayData: string[] | undefined;
}

function DaySelect({ dayData }: Days) {
  const isDate = useSelector((state: RootState) => state.isDate.isDate);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  async function dayTodoSelectHandler(date: string) {
    if (date === "none") {
      return;
    }
    dispatch(setDate(date));
    queryClient.invalidateQueries({ queryKey: ["todos", isDate] });
  }

  return (
    <div className={containerTailwind}>
      <select
        value={isDate || ""}
        className={dayselectTailwind}
        onChange={(e) => dayTodoSelectHandler(e.target.value)}
      >
        <option value="none">날짜를 선택하세요</option>
        {dayData &&
          dayData.map((ele) => (
            <option value={ele} key={ele}>
              {ele}
            </option>
          ))}
      </select>
    </div>
  );
}

export default DaySelect;
