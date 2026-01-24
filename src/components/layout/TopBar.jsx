// import React from 'react';
// import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const TopBar = () => {
//     return (
//         <div className="bg-blue-900 text-white py-2 text-xs hidden md:block">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full flex justify-between items-center">
//                 <div className="flex items-center space-x-6">
//                     <a href="mailto:info@unitedcricketclub.com" className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors">
//                         <Mail size={14} />
//                         <span>info@unitedcricketclub.com</span>
//                     </a>
//                     <span className="flex items-center space-x-2 text-white/90">
//                         <Phone size={14} />
//                         <span>+1 234 567 8900</span>
//                     </span>
//                 </div>
//                 <div className="flex items-center space-x-6">
//                     <span className="opacity-80">Follow us:</span>
//                     <div className="flex items-center space-x-4">
//                         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-200 transition-colors">
//                             <Twitter size={15} />
//                         </a>
//                         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-300 transition-colors">
//                             <Instagram size={15} />
//                         </a>
//                         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-300 transition-colors">
//                             <Facebook size={15} />
//                         </a>
//                     </div>
//                     <div className="border-l border-white/20 pl-6 flex items-center space-x-4 ml-4">
//                         <Link to="/login" className="hover:text-blue-200 font-semibold transition-colors">
//                             Login
//                         </Link>
//                         <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full font-bold transition-all shadow-sm hover:shadow-md">
//                             Join Us
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TopBar;

import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const TopBar = () => {
    return (
        <div className="hidden md:block bg-blue-900 text-white text-sm">
            <div className="max-w-7xl mx-auto px-6 py-1.5 flex justify-between items-center">

                {/* Left */}
                <div className="flex items-center gap-6">
                    <a
                        href="mailto:info@unitedcricketclub.com"
                        className="flex items-center gap-2 opacity-90 hover:opacity-100"
                    >
                        <Mail size={14} />
                        info@unitedcricketclub.com
                    </a>
                    <a
                        href="tel:+12345678900"
                        className="flex items-center gap-2 opacity-90 hover:opacity-100"
                    >
                        <Phone size={14} />
                        +1 234 567 8900
                    </a>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4">
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <Twitter size={15} className="hover:text-blue-300" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <Instagram size={15} className="hover:text-pink-300" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <Facebook size={15} className="hover:text-blue-300" />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default TopBar;





