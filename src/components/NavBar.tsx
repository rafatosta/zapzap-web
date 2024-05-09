import { Container, Nav, Navbar } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import logo from '/zapzap-icon.svg'
import { useState } from "react";

export const navigationLinks = [
    { name: "Home", to: "Home" },
    { name: "Features", to: "Features" },
    { name: "Gallery", to: "Gallery" },
    { name: "Download", to: "Download" },
    { name: "Donate", to: "Donate" },
];

function NavBar() {

    const toggleExpanded = () => setExpanded((prevState) => !prevState);
    const [isExpanded, setExpanded] = useState(false);
    const closeExpanded = function () {
        setTimeout(function () {
            setExpanded(false);
        }, 250);
    };

    return (
        <Navbar
            id='nav'
            expand="lg"
            expanded={isExpanded}
            fixed="top"
            className="bg-body-tertiary relative bg-[url('/background.webp')] shadow-sm">
            <div
                className="absolute inset-0 bg-light/90"
            ></div>
            <Container className="relative">
                <Navbar.Brand className='flex flex-row justify-center itens-center'>
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="ZapZap Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-dark dark:text-light">ZapZap</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"
                    onClick={toggleExpanded} />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav navbarScroll >
                        {navigationLinks.map((item) => (
                            <Nav.Item key={item.name}>
                                <ScrollLink
                                    to={item.to}
                                    spy={true}
                                    activeClass="active"
                                    className="nav-link"
                                    onClick={closeExpanded}
                                >
                                    {item.name}
                                </ScrollLink>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;