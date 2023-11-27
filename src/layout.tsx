import { Outlet } from 'react-router-dom';
import NavMenu from './components/nav-menu';
import { Toaster } from './components/ui/toaster';

const Layout = () => {
  return (
    <div className="h-full flex flex-col">
      <NavMenu />
      <div className="h-full p-4 overflow-y-auto">
        <Outlet />
        <Toaster />
      </div>
    </div>
  );
};
export default Layout;
