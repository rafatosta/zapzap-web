import { Element } from "react-scroll";
import zapiIcon from '/zapzap-icon.svg'
import { featuresDescription, featuresList } from "../data";

function Features() {
    return (
        <Element name={"Features"} id="features">
            <div className="h-screen mx-auto bg-dark dark:bg-light flex flex-col justify-center items-center gap-8">
                <div className="flex flex-col justify-center items-center w-2/3 gap-y-4">
                    <p className="text-light dark:text-dark text-4xl lg:text-6xl font-extrabold">
                        Features
                    </p>
                    <p className="text-light dark:text-dark text-base lg:text-xl text-center md:w-2/3 lg:w-2/5">
                        {featuresDescription}
                    </p>
                </div>

                <div className='flex flex-row justify-center items-center px-4'>
                    <img src={zapiIcon} className="w-80 p-2 hidden lg:flex" alt="Logo" />
                    <div>
                        <ul className="list-disc pl-6 text-light dark:text-dark">
                            {
                                featuresList.map((f) => (
                                    <li key={f.title} className="mb-2"> <b> {f.title} </b> {f.desc} </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

            </div>

        </Element>
    );
}

export default Features;