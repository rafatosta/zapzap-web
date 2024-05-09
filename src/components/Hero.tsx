import laptop from '/laptop-art.svg'
import { Link as ScrollLink } from "react-scroll";

function Hero() {
    return (
        <div className="relative bg-[url('/background.webp')] bg-light dark:bg-dark text-white">
            <div
                className="absolute inset-0 bg-light/90"
            ></div>
            <div className="relative h-screen mx-auto flex flex-col justify-center items-center gap-8">
                <img src={laptop} className="w-64" alt="Laptop logo" />
                <div className='flex flex-col justify-center items-center w-2/3 gap-y-4'>
                    <p className="text-5xl lg:text-7xl text-dark dark:text-white font-extrabold">
                        ZapZap
                    </p>
                    <p className="text-base lg:text-xl text-dark dark:text-white text-center md:w-2/3 lg:w-2/5">
                        A Linux WhatsApp webapp for with a native application experience.
                    </p>
                </div>
                <div className='flex flex-row gap-x-6 justify-center items-center'>

                    <ScrollLink
                        to="Download"
                        spy={true}
                        activeClass="active"
                        className="nav-link"
                    >
                        <button className="bg-green-600 hover:bg-green-700 text-light text-sm lg:text-md font-semibold rounded-lg p-3">
                            Get Started
                        </button>
                    </ScrollLink>

                    <ScrollLink
                        to="Features"
                        spy={true}
                        activeClass="active"
                        className="nav-link"
                    >
                        <button
                            className='bg-gray-600 hover:bg-gray-700 text-light text-sm lg:text-md font-semibold rounded-lg p-3'>
                            Learn More
                        </button>
                    </ScrollLink>

                </div>
            </div>
        </div >
    );
}

export default Hero;