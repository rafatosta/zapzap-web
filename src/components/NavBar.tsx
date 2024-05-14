import { useState } from "react";
import { appName, navigationLinks } from '../data';
import logo from '/zapzap-icon.svg'

function NavBar() {

    const toggleExpanded = () => setExpanded((prevState) => !prevState);
    const [isExpanded, setExpanded] = useState(false);
    const closeExpanded = function () {
        setTimeout(function () {
            setExpanded(false);
            console.log(isExpanded);

        }, 250);
    };


    return (
        <nav className="bg-body-tertiary relative bg-[url('/background.webp')] shadow-sm">
            <div className="absolute inset-0 bg-[#F0F2F5]/90 dark:bg-[#202C33]/90"></div>
            <div className="relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
                {/* Logo */}
                <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="ZapZap Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white ">{appName}</span>
                </a>
                {/* Toggle */}
                <button
                    data-collapse-toggle="navbar-solid-bg"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-solid-bg"
                    aria-expanded="false"
                    onClick={toggleExpanded}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                {/* Menu */}
                <div className={`${!isExpanded ? 'hidden' : ''} w-full md:block md:w-auto `} id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent  md:dark:bg-transparent dark:border-gray-700">
                        {navigationLinks.map((link) => (
                            <li key={link.name} >
                                <a href={link.href} className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    onClick={closeExpanded}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>);
}

export default NavBar;