import { Element } from "react-scroll";
import pixIcon from "/pix_icon.svg";
import paypalIcon from "/paypal_icon.svg";
import githubSeeklogo from "/github-seeklogo.svg";

const Donate: React.FC = () => (
    <Element name="donate">
        <div className="relative min-h-screen flex flex-col justify-center items-center gap-12 py-16 px-4 bg-[#F0F2F5] bg-[url('/background.webp')]">
            <div className="absolute inset-0 bg-[#F0F2F5]/90"></div>

            <div className="relative flex flex-col justify-center items-center text-center w-11/12 md:w-4/5 lg:w-3/5 xl:w-2/5 gap-y-6 text-[#202C33]">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold">Donate</h2>
                <p className="text-sm md:text-lg lg:text-xl">
                    Support the project by making a donation.
                </p>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full md:w-3/4 lg:w-2/3">
                <a
                    href="https://ko-fi.com/rafaeltosta"
                    target="_blank"
                    className="flex justify-center items-center gap-x-3 w-full h-20 bg-[#29abe0] hover:bg-blue-500 text-[#F0F2F5] font-semibold p-4 rounded-lg transition-transform transform hover:scale-105"
                >
                    <img className="h-8 animate-bounce" src="https://storage.ko-fi.com/cdn/whitelogo.svg" alt="Buy Me a Coffee at ko-fi" />
                    Buy Me a Coffee at Ko-fi
                </a>

                <a
                    href="https://nubank.com.br/pagar/3c3r2/LS2hiJJKzv"
                    target="_blank"
                    className="flex justify-center items-center gap-x-3 w-full h-20 bg-[#32bcad] hover:bg-[#4ab4a8] text-[#F0F2F5] font-semibold p-4 rounded-lg transition-transform transform hover:scale-105"
                >
                    <img className="h-8 motion-safe:animate-bounce" src={pixIcon} alt="PIX" />
                    Make a PIX
                </a>

                <a
                    href="https://www.paypal.com/donate/?business=E7R4BVR45GRC2&no_recurring=0&item_name=ZapZap+-+Whatsapp+Desktop+for+linux&currency_code=USD"
                    target="_blank"
                    className="flex justify-center items-center gap-x-3 w-full h-20 bg-[#0070ba] hover:bg-[#005f9e] text-[#F0F2F5] font-semibold p-4 rounded-lg transition-transform transform hover:scale-105"
                >
                    <img className="h-8 motion-safe:animate-bounce" src={paypalIcon} alt="PayPal" />
                    PayPal
                </a>

                <a
                    href="https://github.com/sponsors/rafatosta"
                    target="_blank"
                    className="flex justify-center items-center gap-x-3 w-full h-20 bg-[#24292e] hover:bg-[#1b1f23] text-[#F0F2F5] font-semibold p-4 rounded-lg transition-transform transform hover:scale-105"
                >
                    <img className="h-8 motion-safe:animate-bounce" src={githubSeeklogo} alt="GitHub Sponsor" />
                    GitHub Sponsor
                </a>
            </div>

            <div className="relative flex flex-col justify-center items-center text-center w-11/12 md:w-4/5 lg:w-3/5 xl:w-2/5 gap-y-6 text-[#202C33]">
            <p className="font-bold">Thanks for the support.</p>
                <div className="w-2/3">
                    <div className="flex justify-between items-center">
                        <p className="text-center">Thank you for all the collaborations, this keeps me motivated.</p>
                    </div>
                </div>
            </div>

        </div>
    </Element>
);

export default Donate;
