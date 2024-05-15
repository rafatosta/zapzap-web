import pixIcon from '/pix_icon.svg'
import paypalIcon from '/paypal_icon.svg'
import githubSeeklogo from '/github-seeklogo.svg'
import { Element } from 'react-scroll'
import ProgressDonate from './ProgressDonate'

function Donate() {
    return (
        <Element name="#donate">
            <div className="relative bg-[url('/background.webp')] h-screen mx-auto bg-[#F0F2F5] flex flex-col justify-center items-center gap-8 lg:gap-16 py-20">
                <div className="absolute inset-0 bg-[#F0F2F5]/90 "></div>

                <div className=' relative flex flex-col justify-center items-center w-2/3 gap-y-4'>
                    <p className="text-4xl lg:text-6xl text-[#202C33]  font-extrabold">
                        Donate
                    </p>
                    <p className="hidden lg:flex text-base lg:text-xl text-[#202C33]  text-center md:w-2/3 lg:w-2/5">
                        Make contribute by making a donation to the project.
                    </p>
                </div>

               
                    <ProgressDonate />
               


                <div className="relative grid grid-rows-4 lg:grid-rows-2 grid-flow-col gap-1 lg:gap-4 w-2/3">
                    <a href="https://ko-fi.com/rafaeltosta" target="_blank"
                        className="flex justify-center items-center gap-x-2 text-center w-full h-20 mt-2 bg-[#29abe0] hover:bg-blue-500 text-[#F0F2F5] font-semibold p-4 rounded-lg">
                        <img className="h-8 animate-bounce "
                            src="https://storage.ko-fi.com/cdn/whitelogo.svg"
                            alt=" Buy Me a Coffee at ko-fi" />
                        Buy Me a Coffee at ko-fi
                    </a>
                    <a className="flex justify-center items-center gap-x-2 text-center w-full h-20 mt-2 bg-[#32bcad] hover:bg-[#4ab4a8] text-[#F0F2F5] font-semibold p-4 rounded-lg"
                        href="https://nubank.com.br/pagar/3c3r2/LS2hiJJKzv"
                        target="_blank">
                        <img className="h-8 motion-safe:animate-bounce" src={pixIcon} alt="pix" />
                        Faça um PIX
                    </a>
                    <a className="flex justify-center items-center gap-x-2 text-center w-full h-20 mt-2 bg-[#32bcad] hover:bg-[#4ab4a8] text-[#F0F2F5] font-semibold p-4 rounded-lg"
                        href="https://www.paypal.com/donate/?business=E7R4BVR45GRC2&no_recurring=0&item_name=ZapZap+-+Whatsapp+Desktop+for+linux&currency_code=USD"
                        target="_blank">
                        <img className="h-8 motion-safe:animate-bounce" src={paypalIcon} alt="pix" />
                        PayPal
                    </a>
                    <a className="flex justify-center items-center gap-x-2 text-center w-full h-20 mt-2 bg-[#32bcad] hover:bg-[#4ab4a8] text-[#F0F2F5] font-semibold p-4 rounded-lg"
                        href="https://github.com/sponsors/rafatosta"
                        target="_blank">
                        <img className="h-8 motion-safe:animate-bounce" src={githubSeeklogo} alt="pix" />
                        GitHub Sponsor
                    </a>
                </div>
                <p className='relative font-bold text-[#202C33]'>Thanks for the support!</p>
            </div>

        </Element>

    );
}

export default Donate;