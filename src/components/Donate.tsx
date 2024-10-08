import { Element } from 'react-scroll';
import ProgressDonate from './ProgressDonate';
import pixIcon from '/pix_icon.svg';
import paypalIcon from '/paypal_icon.svg';
import githubSeeklogo from '/github-seeklogo.svg';

const Donate: React.FC = () => (
    <Element name="#donate">
        <div className="relative h-screen flex flex-col justify-center items-center gap-8 lg:gap-16 py-20 mx-auto bg-[#F0F2F5] bg-[url('/background.webp')]">
            <div className="absolute inset-0 bg-[#F0F2F5]/90"></div>

            <div className="relative flex flex-col justify-center items-center w-2/3 gap-y-4">
                <p className="text-4xl lg:text-6xl font-extrabold text-[#202C33]">
                    Donate
                </p>
                <p className="hidden lg:flex text-base lg:text-xl text-center md:w-2/3 lg:w-2/5 text-[#202C33]">
                    Make contribute by making a donation to the project.
                </p>
            </div>

            <ProgressDonate />

            <div className="relative grid grid-rows-4 lg:grid-rows-2 grid-flow-col gap-1 lg:gap-4 w-2/3">
                <a href="https://ko-fi.com/rafaeltosta" target="_blank" className="flex justify-center items-center gap-x-2 w-full h-20 mt-2 bg-[#29abe0] hover:bg-blue-500 text-[#F0F2F5] font-semibold p-4 rounded-lg">
                    <img className="h-8 animate-bounce" src="https://storage.ko-fi.com/cdn/whitelogo.svg" alt="Buy Me a Coffee at ko-fi" />
                    Buy Me a Coffee at ko-fi
                </a>
                <a href="https://nubank.com.br/pagar/3c3r2/LS2hiJJKzv" target="_blank" className="flex justify-center items-center gap-x-2 w-full h-20 mt-2 bg-[#32bcad] hover:bg-[#4ab4a8] text-[#F0F2F5] font-semibold p-4 rounded-lg">
                    <img className="h-8 motion-safe:animate-bounce" src={pixIcon} alt="pix" />
                    Faça um PIX
                </a>
                <a href="https://www.paypal.com/donate/?business=E7R4BVR45GRC2&no_recurring=0&item_name=ZapZap+-+Whatsapp+Desktop+for+linux&currency_code=USD" target="_blank" className="flex justify-center items-center gap-x-2 w-full h-20 mt-2 bg-[#32bcad] hover:bg-[#4ab4a8] text-[#F0F2F5] font-semibold p-4 rounded-lg">
                    <img className="h-8 motion-safe:animate-bounce" src={paypalIcon} alt="PayPal" />
                    PayPal
                </a>
                <a href="https://github.com/sponsors/rafatosta" target="_blank" className="flex justify-center items-center gap-x-2 w-full h-20 mt-2 bg-[#32bcad] hover:bg-[#4ab4a8] text-[#F0F2F5] font-semibold p-4 rounded-lg">
                    <img className="h-8 motion-safe:animate-bounce" src={githubSeeklogo} alt="GitHub Sponsor" />
                    GitHub Sponsor
                </a>
            </div>
        </div>
    </Element>
);

export default Donate;
