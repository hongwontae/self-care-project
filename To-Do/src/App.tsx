// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// @Tanstack query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Todo-Pages
import HomePage from "./Pages/Home/HomePage";
import Layout from "./Pages/Layout/Layout";
import ToDoPlusPage from "./Pages/ToDoPlus/ToDoPlusPage";
import UpdateTodoPage from "./Pages/Update/UpdateTodoPage";

// way-of-thinking Pages
import WayOfThinking from "./Pages/WOT/WayOfThinking";


// error
import Loading from "./Components/LoadingComponent/Loading";
import Error from "./Components/ErrorComponent/Error";


const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement : <Error></Error>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/to-do/plus",
        element: <ToDoPlusPage></ToDoPlusPage>,
      },
       {
        path : '/to-do/update',
        element : <UpdateTodoPage></UpdateTodoPage>
       },
       {
        path : '/loading',
        element : <Loading></Loading>
       },
       {
        path : '/way-of-thinking',
        element : <WayOfThinking></WayOfThinking>
       }
    ],
  },
]);

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
