import laptop from '/laptop-art.svg'
import { appName, appDescription } from '../data';
import { Element } from 'react-scroll'

function Hero() {
    return (
        <Element name="#aa">
            <div className="relative bg-[url('/background.webp')] bg-[#F0F2F5] dark:bg-[#202C33] text-white">
                <div className="absolute inset-0 bg-[#F0F2F5]/90 dark:bg-[#202C33]/90"></div>
                <div className="relative h-screen mx-auto flex flex-col justify-center items-center gap-8">
                    <img src={laptop} className="w-64" alt="Laptop logo" />
                    <div className='flex flex-col justify-center items-center w-2/3 gap-y-4'>
                        <p className="text-5xl lg:text-7xl dark:text-[#F0F2F5] text-[#202C33] font-extrabold">
                            {appName}
                        </p>
                        <p className="text-base lg:text-xl dark:text-[#F0F2F5] text-[#202C33] text-center md:w-2/3 lg:w-2/5">
                            {appDescription}
                        </p>
                    </div>
                    <div className='flex flex-row gap-x-6 justify-center items-center'>
                        <a
                            href="#download"
                        >
                            <button className="bg-green-600 hover:bg-green-700 text-[#F0F2F5] text-sm lg:text-md font-semibold rounded-lg p-3">
                                Get Started
                            </button>
                        </a>

                        <a
                            href="#features"
                        >
                            <button
                                className='bg-gray-600 hover:bg-gray-700 text-[#F0F2F5] text-sm lg:text-md font-semibold rounded-lg p-3'>
                                Learn More
                            </button>
                        </a>

                    </div>
                </div>
            </div >

        </Element>

    );
}

export default Hero;