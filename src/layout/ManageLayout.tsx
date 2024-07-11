
import Header from '@/components/ui/HeaderFooter/Header';
import Sidenavbar from '@/components/ui/Sidenavbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
           <div>
      <Header></Header>
      <div className="flex lg:flex-row flex-col ">
        <div className="">
          <Sidenavbar></Sidenavbar>
        </div>
        <div className=" lg:w-[90%] ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
        </div>
    );
};

export default MainLayout;