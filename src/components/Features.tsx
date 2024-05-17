import zapiIcon from '/zapzap-icon.svg'
import { featuresSub, featuresList, featuresTitle } from "../data";
import { Element } from 'react-scroll'

function Features() {
    return (
        <Element name="#features">
            <div className="relative h-screen mx-auto bg-[url('/background.webp')] bg-[#202C33] flex flex-col justify-center items-center gap-8">
                <div className="absolute inset-0 bg-[#202C33]/95 "></div>
                <div className="relative flex flex-col justify-center items-center w-full h-full gap-6">
                    <div className="flex flex-col justify-center items-center w-2/3 gap-y-4">
                        <p className="text-[#F0F2F5] text-4xl lg:text-6xl font-extrabold">
                            {featuresTitle}
                        </p>
                        <p className="text-[#F0F2F5] text-base lg:text-xl text-center md:w-2/3 lg:w-2/5">
                            {featuresSub}
                        </p>
                    </div>

                    <div className='flex flex-row justify-center items-center px-4'>
                        <img src={zapiIcon} className="w-80 p-2 hidden lg:flex" alt="Logo" />
                        <div>
                            <ul className="list-disc pl-6 text-[#F0F2F5]">
                                {
                                    featuresList.map((f) => (
                                        <li key={f.title} className="mb-2"> <b> {f.title} </b> {f.desc} </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Element>

    );
}

export default Features;