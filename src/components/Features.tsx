import { Element } from "react-scroll";
import zapiIcon from '/zapzap-icon.svg'

function Features() {
    return (
        <Element name={"Features"} id="features">
            <div className="h-screen mx-auto bg-dark dark:bg-light flex flex-col justify-center items-center gap-8">
                <div className="flex flex-col justify-center items-center w-2/3 gap-y-4">
                    <p className="text-light dark:text-dark text-4xl lg:text-6xl font-extrabold">
                        Features
                    </p>
                    <p className="text-light dark:text-dark text-base lg:text-xl text-center md:w-2/3 lg:w-2/5">
                        Zapzap aims to facilitate the use of WhatsappWeb on Linux, bringing the webapp experience closer to a native application.
                    </p>
                </div>

                <div className='flex flex-row justify-center items-center px-4'>
                    <img src={zapiIcon} className="w-80 p-2 hidden lg:flex" alt="Logo" />
                    <div>
                        <ul className="list-disc pl-6 text-light dark:text-dark">
                            <li className="mb-2"> <b> Multiple users: </b> use multiple WhatsApp accounts at the same time. </li>
                            <li className="mb-2"> <b> Tray icon: </b> indicates when there are new messages in a customizable way. </li>
                            <li className="mb-2"> <b> Media sharing: </b> drag-and-drop support for photos, videos and documents. </li>
                            <li className="mb-2"> <b> Spellchecker: </b> so you make less mistakes.</li>
                            <li className="mb-2"> <b> Daemon mode: </b> you can choose to let the app background and start after logging in. </li>
                            <li className="mb-2"> <b> Themes: </b> the app adapts to the global theme (light or dark). </li>
                            <li className="mb-2"> <b> Notifications: </b> native notifications for the Dekstop Environment of your choice. </li>
                        </ul>
                    </div>
                </div>

            </div>

        </Element>
    );
}

export default Features;