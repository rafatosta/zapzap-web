import { Navbar } from "flowbite-react";
import { appName, navigationLinks } from '../data';
import logo from '/zapzap-icon.svg'
import { useEffect } from "react";
import { Link, scroller } from 'react-scroll';

function NavBar() {

    useEffect(() => {
        if (window.location.hash == "#donate") {
            scroller.scrollTo('#donate', {
                duration: 500,
                smooth: true,
            })
        }
    }, [])


    return (
        <Navbar rounded
            className="bg-body-tertiary fixed z-50 w-full bg-[url('/background.webp')] shadow-sm">
            <div className="absolute inset-0 bg-[#F0F2F5]/90"></div>
            <Navbar.Brand as={Link} to="#home" smooth={true} className="relative cursor-pointer">
                <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold ">{appName}</span>
            </Navbar.Brand>
            <Navbar.Toggle className="relative" />
            <Navbar.Collapse className="relative">
                {navigationLinks.map((link) => (
                    <Navbar.Link as={Link}
                        key={link.name}
                        className="text-[#202C33] hover:text-green-600 cursor-pointer"
                        to={link.href}
                        activeClass="active"
                        spy={true}
                        hashSpy={true}
                        smooth={true}
                        duration={500}
                        activeStyle={{
                            color: 'rgb(5 122 85 / var(--tw-text-opacity))',
                            fontWeight: 'bold'
                        }}
                    >
                        {link.name}
                    </Navbar.Link>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;