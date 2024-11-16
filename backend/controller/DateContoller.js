
exports.monthAllDay = (req, res, next)=>{
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const monthName = `${month + 1}월`; // 1월부터 시작하도록 맞춤

  // 이번 달의 마지막 날을 구하기 위해 다음 달의 첫 날에서 하루를 뺍니다.
  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

  // 결과 배열 생성: [11월, 11월 1일, ... , 11월 30일]
  const datesArray = Array.from({ length: lastDayOfMonth + 1 }, (_, i) => {
      return i === 0 ? monthName : `${monthName} ${i}일`;
  });

  return res.json(datesArray);
}