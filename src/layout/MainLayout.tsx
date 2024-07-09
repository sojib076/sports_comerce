
import Header from '@/components/ui/HeaderFooter/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <h1>
                Footer
            </h1>
        </div>
    );
};

export default MainLayout;