import { fedoraCoprURL, flathubURL, githubRepo, issuesURL, licenceURL, appImageFile, aurURL } from "../data";
import { Element } from "react-scroll";
import { SiFedora, SiFlatpak } from "react-icons/si";
import { memo } from "react";

const Download: React.FC = memo(() => (
    <Element name="download">
        <div className="relative min-h-screen flex flex-col justify-center items-center gap-12 py-16 px-4 bg-[#202C33] bg-[url('/background.webp')]">
            <div className="absolute inset-0 bg-[#202C33]/95"></div>

            <div className="relative flex flex-col justify-center items-center text-center w-11/12 md:w-4/5 lg:w-3/5 xl:w-2/5 gap-y-6 text-[#F0F2F5]">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold">Download</h2>
                <p className="text-sm md:text-lg lg:text-xl">
                    Choose your preferred platform and install Zapzap effortlessly.
                </p>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full md:w-3/4 lg:w-2/3">
                <a
                    href={flathubURL}
                    target="_blank"
                    className="flex flex-col items-center justify-center bg-green-700 hover:bg-green-800 text-white font-semibold py-4 px-6 rounded-lg gap-2 transition-transform transform "
                >
                    <SiFlatpak className="text-4xl" />
                    <span>Flathub.com</span>
                    <p>
                        <a
                            href="https://flatstat.mijorus.it/app/com.rtosta.zapzap"
                            title="Flathub statistics: Visualize downloads and uploads data"
                        >
                            <img
                                className="rounded-md"
                                src="https://img.shields.io/endpoint?url=https://flathub-stats-backend.vercel.app/badges/com.rtosta.zapzap/shields.io.json"
                                alt="Flathub Stats"
                            />
                        </a>
                    </p>
                </a>

                <a
                    href={fedoraCoprURL}
                    target="_blank"
                    className="flex flex-col items-center justify-center bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-6 rounded-lg gap-2 transition-transform transform "
                >
                    <SiFedora className="text-4xl" />
                    <span>Fedora Copr</span>
                    <p>For Fedora & Mageia</p>
                </a>

                <a
                    href={appImageFile}
                    target="_blank"
                    className="flex flex-col items-center justify-center bg-blue-400 hover:bg-blue-500 text-white font-semibold py-4 px-6 rounded-lg gap-2 transition-transform transform "
                >
                    <img src="https://appimage.org/images/logo3.svg" className="text-4xl" />
                    <span>Direct download</span>
                    <p>AppImage </p>
                </a>

                <a
                    href={aurURL}
                    target="_blank"
                    className="flex flex-col items-center justify-center text-black bg-slate-50 hover:bg-slate-300 font-semibold py-4 px-6 rounded-lg gap-2 transition-transform transform "
                >
                    <img src="https://raw.githubusercontent.com/archlinux/.github/main/profile/archlinux-logo-dark-scalable.svg" className="text-4xl w-32" />
                    <span>Maintainer: alllexx88 (AutoUpdateBot)</span>
                    <p>Submitter: bordam</p>
                </a>
            </div>

            <div className="flex flex-col items-center w-full md:w-3/4 lg:w-1/2 xl:w-1/3 gap-2 text-sm text-[#F0F2F5]">
                <a href={issuesURL} target="_blank" className="underline hover:text-blue-400">
                    Need help? Visit our support page.
                </a>
                <p className="text-center">
                    This software is licensed under
                    <a href={licenceURL} target="_blank" className="text-blue-400 hover:underline"> GPL v3</a>,
                    with source code available on
                    <a href={githubRepo} target="_blank" className="text-blue-400 hover:underline"> GitHub</a>.
                </p>
            </div>
        </div>
    </Element>
));

export default Download;
