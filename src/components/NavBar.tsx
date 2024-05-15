import { Navbar } from "flowbite-react";
import { appName, navigationLinks } from '../data';
import logo from '/zapzap-icon.svg'
import { useEffect } from "react";

function NavBar() {

    useEffect(() => { 
        if (window.location.hash == "#donate") {
            window.location.href = "#donate"
        }
    }, [])

    return (
        <Navbar rounded
            className="bg-body-tertiary fixed z-50 w-full bg-[url('/background.webp')] shadow-sm">
            <div className="absolute inset-0 bg-[#F0F2F5]/90 dark:bg-[#202C33]/90"></div>
            <Navbar.Brand href="#home" className="relative">
                <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{appName}</span>
            </Navbar.Brand>
            <Navbar.Toggle className="relative" />
            <Navbar.Collapse className="relative">
                {navigationLinks.map((link) => (
                    <Navbar.Link key={link.name}
                        href={link.href}
                        className="text-[#202C33] dark:text-[#F0F2F5] hover:text-green-600">{link.name}</Navbar.Link>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;