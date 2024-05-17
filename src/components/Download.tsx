import { appImageURL, fedoraCoprURL, flathubURL, githubRepo, issuesURL, licenceURL } from "../data";
import { Element } from 'react-scroll'
import { SiFedora, SiFlatpak } from "react-icons/si";
import { IoIosSettings } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";

function Download() {
    return (
        <Element name="#download">
            <div className="relative h-screen mx-auto bg-[url('/background.webp')] bg-[#202C33] flex flex-col justify-center items-center gap-8 py-20">
                <div className="absolute inset-0 bg-[#202C33]/95 "></div>
                <div className="relative flex flex-col justify-around items-center w-full h-full gap-6">
                    <div className="flex flex-col justify-center items-center w-2/3 gap-y-4">
                        <p className="text-[#F0F2F5] text-4xl lg:text-6xl font-extrabold">
                            Download
                        </p>
                        <p className="text-[#F0F2F5]  text-base lg:text-xl text-center md:w-2/3 lg:w-2/5">
                            Get the official versions of Zapzap.
                        </p>
                    </div>
                    <div className='flex flex-col gap-6 justify-center items-center w-3/5 lg:w-1/5'>
                        <a href={flathubURL} target='_blank'
                            className="mt-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-lg w-full flex flex-row gap-x-4 justify-center items-center h-12">
                            <SiFlatpak />
                            Flathub.com
                        </a>
                        <a href={fedoraCoprURL} target="_blank"
                            className="mt-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg w-full flex flex-row gap-x-4 justify-center items-center h-12">
                            <SiFedora />
                            Fedora Copr
                        </a>

                        <a href={appImageURL} target="_blank"
                            className="mt-2 bg-yellow-500 hover:bg-yellow-800 text-white font-semibold py-2 px-4 rounded-lg w-full flex flex-row gap-x-4 justify-center items-center h-12">
                            <div>
                                <FaArrowDown />
                                <IoIosSettings />
                            </div>
                            AppImage
                        </a>
                    </div>
                    <div className="pt-4 text-[#F0F2F5]  text-sm flex flex-col justify-center items-center gap-2 w-1/2 lg:w-1/5">
                        <a href={issuesURL}
                            className="text-[#F0F2F5] text-center hover:text-blue-600 underline"
                            target="_blank">Access the official support here.</a>
                        <p className="text-center">This software is licensed under the
                            <a className="text-blue-600" href={licenceURL} target='_blank'> GPL v3</a>,
                            with it's source code is available on
                            <a className="text-blue-600" href={githubRepo} target='_blank'> GitHub</a>.
                        </p>
                    </div>


                </div>

            </div>
        </Element>


    );
}

export default Download;