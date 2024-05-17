import { Footer as FooterFB } from "flowbite-react";
import logo from '/zapzap-icon.svg'
import { Link } from 'react-scroll';
import { appName } from "../data";
import { BsGithub } from "react-icons/bs";

function Footer() {
    return (
        <FooterFB container className="bg-[#202C33] px-12">
            <Link to="#home" smooth={true} className="flex flex-row justify-start items-center cursor-pointer">
                <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold text-[#F0F2F5]">{appName}</span>
            </Link>
            <FooterFB.Copyright href="https:www.rtosta.com" by="Rtosta" year={2024} className="" />
            <FooterFB.Icon href="https://github.com/rafatosta/zapzap" icon={BsGithub} className="text-[#F0F2F5]" />
        </FooterFB>);
}

export default Footer;