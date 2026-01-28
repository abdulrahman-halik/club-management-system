// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//     const location = useLocation();

//     const navLinks = [
//         { name: 'Home', path: '/' },
//         { name: 'Match Centre', path: '/live' },
//         { name: 'News', path: '/news' },
//         { name: 'Events', path: '/events' },
//         { name: 'Committee', path: '/committee' },
//         { name: 'Members', path: '/members' },
//         { name: 'About', path: '/about' },
//         { name: 'Contact', path: '/contact' },
//     ];

//     const isActive = (path) => {
//         return location.pathname === path ? 'text-blue-900 font-bold' : 'text-gray-700 hover:text-blue-900';
//     };

//     return (
//         <header className="bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300 border-b border-gray-100">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
//                 <div className="flex h-20 items-center justify-between">
//                     {/* Left Section: Logo / Brand */}
//                     <div className="flex-1 flex items-center justify-start min-w-0">
//                         <Link to="/" className="text-3xl font-black text-blue-900 tracking-tighter flex items-center gap-2">
//                             {/* Placeholder for Logo Image if available, else text */}
//                             UYC
//                         </Link>
//                     </div>

//                     {/* Center Section: Desktop Navigation */}
//                     <nav className="hidden lg:flex items-center justify-center space-x-10">
//                         {navLinks.map((link) => (
//                             <Link
//                                 key={link.name}
//                                 to={link.path}
//                                 className={`${isActive(link.path)} px-1 py-2 text-sm uppercase tracking-wider font-bold transition-colors relative group`}
//                             >
//                                 {link.name}
//                                 <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${location.pathname === link.path ? 'scale-x-100' : ''}`}></span>
//                             </Link>
//                         ))}
//                     </nav>

//                     {/* Right Section: Auth Buttons */}
//                     <div className="flex-1 flex items-center justify-end min-w-0 space-x-6">
//                         <div className="hidden lg:flex items-center space-x-6">
//                             {/* Desktop Auth Buttons moved to TopBar */}
//                         </div>

//                         {/* Mobile Menu Button */}
//                         <div className="flex items-center lg:hidden">
//                             <button
//                                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-100 focus:outline-none transition-colors"
//                                 aria-expanded={isMenuOpen}
//                             >
//                                 <span className="sr-only">Open main menu</span>
//                                 {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {isMenuOpen && (
//                 <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0 top-full z-40 animate-fade-in-down">
//                     <div className="px-4 pt-4 pb-6 space-y-2">
//                         {navLinks.map((link) => (
//                             <Link
//                                 key={link.name}
//                                 to={link.path}
//                                 className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${location.pathname === link.path ? 'bg-blue-50 text-blue-900' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-900'}`}
//                                 onClick={() => setIsMenuOpen(false)}
//                             >
//                                 {link.name}
//                             </Link>
//                         ))}

//                         <div className="border-t border-gray-100 my-4 pt-4 space-y-3">
//                             <Link
//                                 to="/login"
//                                 className="block w-full text-center px-4 py-3 rounded-lg text-gray-700 font-bold hover:bg-gray-50 border border-gray-200"
//                                 onClick={() => setIsMenuOpen(false)}
//                             >
//                                 Login
//                             </Link>
//                             <Link
//                                 to="/register"
//                                 className="block w-full text-center px-4 py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-md"
//                                 onClick={() => setIsMenuOpen(false)}
//                             >
//                                 Join Us
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogOut, User } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        setIsMenuOpen(false);
    };

    const navLinks = [
        { name: 'Home', path: '/', public: true },
        { name: 'Match Centre', path: '/live', public: true },
        { name: 'News', path: '/news', public: true },
        { name: 'Events', path: '/events', public: true },
        { name: 'Committee', path: '/committee', public: true },
        { name: 'About', path: '/about', public: true },
        { name: 'Contact', path: '/contact', public: true },

        // Protected Links
        { name: 'Dashboard', path: '/dashboard', requiredAuth: true }, // Assuming separate dashboard page or profile
        { name: 'Members', path: '/members', requiredAuth: true },
        { name: 'Inventory', path: '/inventory', requiredAuth: true },
        { name: 'Meetings', path: '/meetings', requiredAuth: true },
    ];

    const visibleLinks = navLinks.filter(link => {
        if (link.public) return true;
        if (link.requiredAuth && isAuthenticated) return true;
        return false;
    });

    const isActive = (path) =>
        location.pathname === path
            ? 'text-blue-900 font-bold'
            : 'text-gray-700 hover:text-blue-900';

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-3xl font-black text-blue-900 tracking-tight"
                    >
                        UYC
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex items-center space-x-10">
                        {visibleLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`${isActive(link.path)} text-sm uppercase tracking-wide transition`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center gap-6">

                        {/* Desktop Auth */}
                        <div className="hidden lg:flex items-center gap-4">
                            {isAuthenticated ? (
                                <>
                                    <span className="text-gray-700 font-medium flex items-center gap-2">
                                        <User size={18} />
                                        Hi, {user?.name || 'User'}
                                    </span>
                                    <button
                                        onClick={handleLogout}
                                        className="bg-red-50 text-red-600 px-5 py-2 rounded-full font-bold hover:bg-red-100 transition flex items-center gap-2"
                                    >
                                        <LogOut size={16} />
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="text-gray-700 font-semibold hover:text-blue-900"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold hover:bg-blue-700 transition"
                                    >
                                        Join Us
                                    </Link>
                                </>
                            )}
                        </div>

                        {/* Mobile Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
                        >
                            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t shadow-md">
                    <div className="px-6 py-4 space-y-3">
                        {visibleLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`block px-4 py-2 rounded-md ${location.pathname === link.path
                                    ? 'bg-blue-50 text-blue-900'
                                    : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="pt-4 border-t space-y-3">
                            {isAuthenticated ? (
                                <>
                                    <div className="px-4 py-2 text-gray-700 font-medium flex items-center gap-2 justify-center bg-gray-50 rounded-lg">
                                        <User size={18} />
                                        Hi, {user?.name || 'User'}
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-center py-2 bg-red-50 text-red-600 font-bold rounded-lg flex items-center justify-center gap-2"
                                    >
                                        <LogOut size={16} />
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="block text-center py-2 border rounded-lg hover:bg-gray-50 font-semibold"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="block text-center py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Join Us
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;

