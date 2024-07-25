import { Element } from 'react-scroll';
import { gallerySub, galleryTitle } from '../data';
import Carousel from './Carousel';

const Gallery: React.FC = () => (
    <Element name="#gallery">
        <div className="relative h-screen flex flex-col justify-center items-center gap-8 py-20 mx-auto bg-[#F0F2F5] bg-[url('/background.webp')]">
            <div className="absolute inset-0 bg-[#F0F2F5]/90"></div>
            <div className="relative flex flex-col justify-center items-center w-11/12 md:w-2/3 gap-y-4 text-center">
                <p className="text-4xl lg:text-6xl font-extrabold text-[#202C33]">
                    {galleryTitle}
                </p>
                <p className="text-base lg:text-xl text-[#202C33] md:w-2/3 lg:w-2/5">
                    {gallerySub}
                </p>
            </div>
            <Carousel />
        </div>
    </Element>
);

export default Gallery;
