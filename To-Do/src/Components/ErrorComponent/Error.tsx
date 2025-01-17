import { useRouteError } from "react-router-dom";
import Navigation from "../../Pages/Navigation/Navigation";

function Error({error : queryError} : {error : Error}) {
  const error = useRouteError();
  console.log(error);
  console.log(queryError)
  return (
    <>
      <div className="grid grid-rows-layout min-h-screen bg-slate-800">
        {/* Header */}
        <header className=" text-white">
          <Navigation></Navigation>
        </header>

        {/* Main Content */}
        <main className="text-slate-300 items-center flex justify-center font-custom-Oswald mb-40">
          <p className="text-5xl text-center">
            sorry. An error occurred. Errors occur for many reasons, such as
            incorrect URL access, data fetching failure, or data transmission
            failure. Please access the navigation at the top to navigate away
            from the error page and try again.
          </p>
        </main>
      </div>
    </>
  );
}

export default Error;
