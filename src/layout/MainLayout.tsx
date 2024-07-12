
import Footer from '@/components/ui/HeaderFooter/Footer';
import Header from '@/components/ui/HeaderFooter/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;