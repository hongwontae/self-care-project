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

<br/>


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

<br/>

 - 3-2. **Plus Form Page**

  일정을 추가하는 Form Page입니다.

  Form을 채운 후 HomePag로 redirect 합니다.

  ![Image](https://github.com/user-attachments/assets/d1bc0556-67ed-4643-a333-3b7db012025e)

 <br/>

  - Some Code
  ```javascript
 // type
interface childProps {
  titleRef: React.RefObject<HTMLInputElement>;
  descRef: React.RefObject<HTMLTextAreaElement>;
  dateRef: React.RefObject<HTMLInputElement>;
  addRef: React.RefObject<HTMLInputElement>;
  departureRef: React.RefObject<HTMLInputElement>;
  buttonClickHandler: () => void;
  resetHandler: () => void;
}
// ...
<div className="flex flex-col gap-1 justify-center items-center w-full">
          <label htmlFor="title" className="font-bold text-[1.2rem]">
            To Do-Title
          </label>
          <input
            ref={titleRef}
            className="text-center text-black rounded-lg p-1 w-1/2 max-plus-page-1:w-10/12"
            type="text"
            id="title"
          ></input>
        </div>
        <div className="flex flex-col gap-1 items-center w-full">
          <label htmlFor="departure time" className="font-bold text-[1.2rem]">
            Departure Time
          </label>
          <input
            type="datetime-local"
            ref={departureRef}
            className="text-center text-black rounded-lg p-1 w-1/2 max-plus-page-1:w-10/12 max-plus-page-2:w-8/12"
          ></input>
        </div>
   //...
 ```
<br/>

 - 3-3. Detail Modal
 
 일정을 상세히 볼 수 있습니다.

 Update, Delete 작업이 가능합니다.

 ![Image](https://github.com/user-attachments/assets/ea6bffe2-133c-404b-954d-17332411c870)

 <br/>

  - Some Code
 ```javascript
           <DeleteModal
          id={todoOne?.todo_id}
          ref={dialogRef}
          deleteCloseHandler={deleteCloseHandler}
          title={todoOne?.todo_title}
          modalDownHandler={modalDownHandler}
        ></DeleteModal>
        <dialog
          onClose={modalDownHandler}
          ref={ref}
          className="p-6 w-8/12 rounded-lg font-custome-Poppins bg-stone-500"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="font-bold text-custom-letter-color mb-4 text-2xl">
              Todo : {todoOne && todoOne?.todo_title}
            </div>
            <div className="text-white">
              <div className="inline font-bold text-black">
                Departure Time :{" "}
              </div>
              {departure}
            </div>
            <div className="text-white">
              <div className="inline font-bold text-black">
                Scheduled Time :{" "}
              </div>
           // ....
```

 <br/>

 - 3-4. **Update, Delete Page**

<br/>

![Image](https://github.com/user-attachments/assets/dae16c52-c7d9-494d-8ddc-33b2dab54a3e)

<br/>

![Image](https://github.com/user-attachments/assets/046817ae-fca2-43e7-a43a-5ce731031b32)

<br/>

 - Some Code

 ```javascript
function UpdateTodoPage() {
  const navigationType = useNavigationType();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const storedId = sessionStorage.getItem("todo")
    ? sessionStorage.getItem("todo")
    : null;

  const { data } = useQuery({
    queryKey: ["update-todo", storedId],
    queryFn: () => {
      if (storedId) {
        return getTodoOne(storedId);
      } else {
        throw new Error("sesstion id가 존재하지 않습니다.");
      }
    },
  });

  const { mutate } = useMutation({
    mutationFn: update,
    onSuccess: () => {
      console.log("Success Update");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      queryClient.invalidateQueries({ queryKey: ["update-todo", storedId] });
      navigate("/");
    },
  });

  useEffect(() => {
    return () => {
      if (
        navigationType === NavigationType.Push ||
        navigationType === NavigationType.Pop
      ) {
        queryClient.invalidateQueries({ queryKey: ["update-todo", storedId] });
        sessionStorage.removeItem("todo");
      }
    };
  }, [navigationType, queryClient, storedId]);
```
 <br/>

 - 3-5. Way of Thinking Page

 지켜야 할 생활 방식이나 규칙들을 명시하는 Page입니다.

 delete, Highlight 기능을 사용할 수 있습니다.

 
![Image](https://github.com/user-attachments/assets/f58d124a-9a2b-4cd9-96a3-2ed09d68f492)

![Image](https://github.com/user-attachments/assets/9581cb7b-3ba4-458b-95cf-65f4c97916ca)

![Image](https://github.com/user-attachments/assets/0088749c-32dd-4985-bbe6-76ed7a9bae21)

 <br/>

 - Some Code
```javascript
function WayOfThinking() {
  
  const client = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: PostOne,
    onSuccess : ()=>{
      console.log('refresh')
      client.invalidateQueries({queryKey : ['wot-all']});
    }
  });

  const { data, isError, error, isLoading } = useQuery<GetAllType, Error>({
    queryKey: ["wot-all"],
    queryFn: () => getAll(),
    staleTime : 10 * 60 * 1000
  });

  if (isError) {
    console.log(error);
    return <div>Error...</div>;
  }

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <div>
        <WotPlus mutate={mutate}></WotPlus>
        <WayOfThinkingLines data={data?.data || []}></WayOfThinkingLines>
      </div>
    </>
  );
}

export default WayOfThinking;
```

<br/>


4. **Backend**

 - 4-1. Express.js
 - 4-2. Sequelize
 - 4-3. MySQL
 - 4-4. Error Handling

  - Preview
 ```javascript
exports.getAll = async (req, res, next) => {
  const date = req?.query?.date;
  if (!date) {
    try {
      const allTodo = await TodoModel.findAll({
        order : [['todo_date', 'ASC']]
      });
      return res.json(allTodo);
    } catch (error) {
      console.log(error);
      const err = new Error();
      err.location = "controller";
      err.message = "getAll find fail";
      err.status = false;
      return next(err);
    }
  }

  if (date) {
    const formatedDate = Formatted(date);

    const dateTodos = await TodoModel.findAll({
      where: Sequelize.where(
        Sequelize.fn("DATE", Sequelize.col("todo_date")),
        formatedDate
      ),
    });
    
    console.log(dateTodos);
    return res.json(dateTodos)

  }
};
```











