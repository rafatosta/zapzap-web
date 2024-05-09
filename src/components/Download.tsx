import { Element } from "react-scroll";

function Download() {
    return (
        <Element name={"Download"} id="download">
            <div className="h-screen mx-auto bg-dark dark:bg-light flex flex-col justify-center items-center gap-8 py-20">

                <div className="flex flex-col justify-center items-center w-2/3 gap-y-4">
                    <p className="text-light dark:text-dark text-4xl lg:text-6xl font-extrabold">
                        Get ZapZap
                    </p>
                    <p className="text-light dark:text-dark text-base lg:text-xl text-center md:w-2/3 lg:w-2/5">
                        Get the official versions of Zapzap.
                    </p>
                </div>
                <div className='flex flex-row gap-x-6 justify-center items-center'>
                    <a href="https://flathub.org/apps/com.rtosta.zapzap" target='_blank'
                        className="mt-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-lg">
                        Flathub.com
                    </a>
                    <a href="https://copr.fedorainfracloud.org/coprs/rafatosta/zapzap/" target="_blank"
                        className="mt-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg">
                        Fedora Copr
                    </a>
                </div>
                <div className="pt-4 text-light dark:text-dark text-sm flex flex-col justify-center items-center gap-2 w-1/2 lg:w-1/5">
                    <a href="https://github.com/zapzap-linux/zapzap/issues"
                        className="text-light dark:text-dark hover:text-blue-600 underline"
                        target="_blank">Access the official support here.</a>
                    <p className="text-center">This software is licensed under the
                        <a className="text-blue-600" href="https://github.com/zapzap-linux/zapzap/blob/main/LICENSE" target='_blank'> GPL v3</a>,
                        with it's source code is available on
                        <a className="text-blue-600" href="https://github.com/zapzap-linux/zapzap" target='_blank'> GitHub</a>.
                    </p>
                </div>
            </div>

        </Element>);
}

export default Download;