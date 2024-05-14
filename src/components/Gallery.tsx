
import { gallerySub, galleryTitle } from '../data';
import Carousel from './Carousel';

function Gallery() {
    return (

        <div id="gallery" className="relative bg-[url('/background.webp')] h-screen mx-auto bg-[#F0F2F5] dark:bg-[#202C33] flex flex-col justify-center items-center gap-8 py-20">
            <div className="absolute inset-0 bg-[#F0F2F5]/90 dark:bg-[#202C33]/90"></div>
            <div className='relative flex flex-col justify-center items-center w-2/3 gap-y-4'>
                <p className="text-4xl lg:text-6xl text-dark dark:text-white font-extrabold">
                    {galleryTitle}
                </p>
                <p className="text-base lg:text-xl text-dark dark:text-white text-center md:w-2/3 lg:w-2/5">
                    {gallerySub}
                </p>
            </div>
            <Carousel />
        </div>
    );
}

export default Gallery;
