import { Link } from "react-router-dom";

const liTailwindCSS = `text-[1.35rem] font-normal hover:text-[1.25rem] hover:text-red-600`;

function Navigation() {
  return (
    <>
      <header className="pt-4 pb-2 flex justify-center font-custome-Poppins">
        <ul className="flex justify-center gap-5 max-layout-1:flex-col">
          <Link to={"/"}>
            <li className={liTailwindCSS}>To-Do</li>
          </Link>
          <Link to={"/to-do/plus"}>
            <li className={liTailwindCSS}>Plus To-Do</li>
          </Link>
          <Link to={'/way-of-thinking'}>
          <li className={liTailwindCSS}>Way Of Thinking</li>
          </Link>
        </ul>
      </header>
    </>
  );
}

export default Navigation;
