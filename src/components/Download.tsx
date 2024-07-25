import { fedoraCoprURL, flathubURL, githubRepo, issuesURL, licenceURL } from "../data";
import { Element } from 'react-scroll';
import { SiFedora, SiFlatpak } from "react-icons/si";

const Download: React.FC = () => (
    <Element name="#download">
        <div className="relative h-screen flex flex-col justify-center items-center gap-8 py-20 mx-auto bg-[#202C33] bg-[url('/background.webp')]">
            <div className="absolute inset-0 bg-[#202C33]/95"></div>
            <div className="relative flex flex-col justify-around items-center w-full h-full gap-6">
                <div className="flex flex-col justify-center items-center w-2/3 gap-y-4">
                    <p className="text-4xl lg:text-6xl font-extrabold text-[#F0F2F5]">
                        Download
                    </p>
                    <p className="text-base lg:text-xl text-center md:w-2/3 lg:w-2/5 text-[#F0F2F5]">
                        Get the official versions of Zapzap.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-4/5 lg:w-3/5">
                    <a href={flathubURL} target="_blank" className="flex flex-col items-center justify-center bg-green-700 hover:bg-green-800 text-white font-semibold py-4 px-6 rounded-lg gap-2">
                        <SiFlatpak className="text-4xl" />
                        <span className="mt-2">Flathub.com</span>
                        <p className="hover:scale-110">
                            <a href="https://flatstat.mijorus.it/app/com.rtosta.zapzap"
                                title='Flathub statistics: Visualize downloads and uploads data'>
                                <img
                                    className="rounded-md"
                                    src="https://img.shields.io/endpoint?url=https://flathub-stats-backend.vercel.app/badges/com.rtosta.zapzap/shields.io.json" />
                            </a>
                        </p>
                    </a>
                    <a href={fedoraCoprURL} target="_blank" className="flex flex-col items-center justify-center bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-6 rounded-lg gap-2">
                        <SiFedora className="text-4xl" />
                        <span className="mt-2">Fedora Copr</span>
                        <p>For Fedora or Mageia</p>

                    </a>
                </div>
                <div className="flex flex-col items-center w-1/2 lg:w-1/5 gap-2 pt-4 text-sm text-[#F0F2F5]">
                    <a href={issuesURL} target="_blank" className="text-center underline hover:text-blue-600">
                        Access the official support here.
                    </a>
                    <p className="text-center">
                        This software is licensed under the
                        <a href={licenceURL} target="_blank" className="text-blue-600"> GPL v3</a>,
                        with its source code available on
                        <a href={githubRepo} target="_blank" className="text-blue-600"> GitHub</a>.
                    </p>
                </div>
            </div>
        </div>
    </Element>
);

export default Download;
