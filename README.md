# Self Care Project
**React(TypeScript), NodeJS를 통해 구축한 개인 향상성을 증가하기 위한 애플리케이션입니다.**

## Programming Language
&nbsp;&nbsp;&nbsp;![Badge](https://img.shields.io/badge/JavaScript-F7DF1E.svg?&logo=JavaScript&logoColor=fff)
![Badge](https://img.shields.io/badge/Node.js-5FA04E.svg?&logo=Node.js&logoColor=fff)
![Badge](https://img.shields.io/badge/React-61DAFB.svg?&logo=React&logoColor=fff)
![Badge](https://img.shields.io/badge/TypeScript-3178C6.svg?&logo=TypeScript&logoColor=fff)

## Project Goals
1. React와 TypeScript 상호작용 (React/TS, Tanstack-Query/TS, Redux-Toolkit/TS)
2. 프론트엔드와 백엔드 동시 구축
3. 프로젝트 독립적으로 구성

## Self Care Project Explanation

1. **Front File Structure**
 - src/components : src/pages의 컴포넌트
 - src/http : React-Query의 useQuery의 queryFn, useMutation의 mutationFn의 http 함수
 - src/http : React-Router를 통해 분리한 페이지들
 - src/store : Redux-Toolkit 설정 및 Slice
 - src/type : .tsx에서 사용할 타입 모듈
 - src/util : 날짜 변환 함수

![Image](https://github.com/user-attachments/assets/de78f4b6-ec59-417c-87b3-c9a5041d67c5)

2. **Front Settings**
- tanstack/react-query
- React Router
- Redux-Toolkit
- Tailwind


3. **Features**

  - 3-1. **HomePage**

  날짜 순으로 일정을 나타내는 UI입니다.
  
  select/option 박스를 통해 원하는 날짜의 일정 확인이 가능합니다.
  

![Image](https://github.com/user-attachments/assets/270129ba-671e-432e-89dd-9be62f2c5454)

![Image](https://github.com/user-attachments/assets/7ab16bfd-ef49-4fe6-aeb3-c2922e673c63)

  - Some Code
```javascript
interface TodoMainComponentProps {
  data: Todo[] | undefined;
  dayData: string[] | undefined;
}

const containerTailwind = `bg-slate-400 text-black text-center w-11/12 m-auto 
h-[8rem] rounded-lg flex flex-col justify-center gap-2 overflow-hidden font-custom-Oswald 
hover:bg-red-400`;

function TodoMainComponent({ data, dayData }: TodoMainComponentProps) {

....

<div className="grid grid-cols-3 gap-4 w-full mb-10 max-homepage-box-1:grid-cols-2 max-homepage-box-2:grid-cols-1">
        {data &&
          data.map((ele) => {
            const date = formatDate(ele.todo_departure);
            const sDate = formatDate(ele.todo_date);
            const dateBool = new Date(ele.todo_date) < new Date()
            return (
              <div
                key={ele.todo_id}
                className={containerTailwind + ' overflow-hidden' + ` ${dateBool ? 'bg-red-300' : null}`}
                onClick={() => modalOpenHandler(ele)}
              >
                <div className="font-bold text-white text-[1.4rem] sticky top-0 z-10 ">
                  {ele.todo_title}
                </div>
                <div className="text-slate-900">
                  <div className="inline font-bold text-[1.2rem]">
                    Departure Time :
                  </div>{" "}
                  {date}
                </div>
                <div className="text-slate-900">
                  <div className="inline font-bold text-[1.2rem]">
                    Schedule Time :
                  </div>{" "}
                  {sDate}
                </div>
              </div>
            );
          })}
      </div>
```









