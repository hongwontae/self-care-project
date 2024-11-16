import { Outlet } from "react-router-dom";
import Navigation from '../Navigation/Navigation'
function Layout() {
  return (
    <>
      <div className="grid grid-rows-layout min-h-screen bg-slate-800">
        {/* Header */}
        <header className=" text-white mb-2">
          <Navigation></Navigation>
        </header>

        {/* Main Content */}
        <main className="p-2">
          <Outlet />
        </main>


      </div>
    </>
  );
}

export default Layout;
