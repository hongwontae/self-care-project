// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// @Tanstack query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Todo-Pages
import HomePage from "./pages/Home/HomePage";
import Layout from "./pages/Layout/Layout";
import ToDoPlusPage from "./pages/ToDoPlus/ToDoPlusPage";
import UpdateTodoPage from "./pages/Update/UpdateTodoPage";

// way-of-thinking Pages
import WayOfThinking from "./pages/WOT/WayOfThinking";


// error
import Loading from "./components/LoadingComponent/Loading";
import Error from "./components/ErrorComponent/Error";


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
