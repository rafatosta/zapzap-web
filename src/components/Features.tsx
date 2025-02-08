import { Element } from 'react-scroll';
import zapiIcon from '/zapzap-icon.svg';
import { featuresSub, featuresList, featuresTitle } from '../data';
import { memo } from 'react';

interface Feature {
    title: string;
    desc: string;
}

const Features: React.FC = memo(() => (
    <Element name="features">
        <div className="relative h-screen flex flex-col justify-center items-center gap-8 mx-auto bg-[#202C33] bg-[url('/background.webp')]">
            <div className="absolute inset-0 bg-[#202C33]/95"></div>

            <div className="relative flex flex-col justify-center items-center w-full h-full gap-6">
                {/* Título e Subtítulo */}
                <div className="flex flex-col justify-center items-center w-2/3 gap-y-4 text-[#F0F2F5]">
                    <h2 className="text-4xl lg:text-6xl font-extrabold">{featuresTitle}</h2>
                    <p className="text-base lg:text-xl text-center md:w-2/3 lg:w-2/5">{featuresSub}</p>
                </div>

                {/* Lista de Features */}
                <div className="flex flex-row justify-center items-center px-4">
                    <img
                        src={zapiIcon}
                        className="w-80 p-2 hidden lg:flex"
                        alt="Application icon"
                        aria-label="Application icon"
                    />
                    <div>
                        <ul className="list-disc pl-6 text-[#F0F2F5]" aria-label="Feature list">
                            {featuresList.map(({ title, desc }: Feature) => (
                                <li key={title} className="mb-2">
                                    <b>{title}</b> {desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Element>
));

export default Features;
