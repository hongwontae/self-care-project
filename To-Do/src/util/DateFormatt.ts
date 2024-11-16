export function formatDate(dateData : string){

  if(!dateData){
    return 'Date not'
  }

    const date = new Date(dateData);

    const formatter = new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true, // 12시간제 사용
      });
      const formattedDate = formatter.format(date);
      return formattedDate
}

export function dateLocalFormat(isoDate : string){

  if(!isoDate){
    return 'Date not'
  }

  const date = new Date(isoDate);
  
  // 날짜와 시간을 포맷
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  // datetime-local 형식으로 변환
  return `${year}-${month}-${day}T${hours}:${minutes}`;


}