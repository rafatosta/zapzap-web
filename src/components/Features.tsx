import { Element } from 'react-scroll';
import zapiIcon from '/zapzap-icon.svg';
import { featuresSub, featuresList, featuresTitle } from '../data';

const Features: React.FC = () => (
    <Element name="#features">
        <div className="relative h-screen flex flex-col justify-center items-center gap-8 mx-auto bg-[#202C33] bg-[url('/background.webp')]">
            <div className="absolute inset-0 bg-[#202C33]/95"></div>
            <div className="relative flex flex-col justify-center items-center w-full h-full gap-6">
                <div className="flex flex-col justify-center items-center w-2/3 gap-y-4">
                    <p className="text-4xl lg:text-6xl font-extrabold text-[#F0F2F5]">
                        {featuresTitle}
                    </p>
                    <p className="text-base lg:text-xl text-center md:w-2/3 lg:w-2/5 text-[#F0F2F5]">
                        {featuresSub}
                    </p>
                </div>
                <div className="flex flex-row justify-center items-center px-4">
                    <img src={zapiIcon} className="w-80 p-2 hidden lg:flex" alt="Logo" />
                    <div>
                        <ul className="list-disc pl-6 text-[#F0F2F5]">
                            {featuresList.map((feature) => (
                                <li key={feature.title} className="mb-2">
                                    <b>{feature.title}</b> {feature.desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Element>
);

export default Features;
