import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import TopBar from './TopBar';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="sticky top-0 z-50 w-full">
                <TopBar />
                <Navbar />
            </div>
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
