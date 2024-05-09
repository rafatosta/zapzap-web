import Carousel from 'react-bootstrap/Carousel';
import { Element } from "react-scroll";

/* files in public/screenshot*/
export const files = [
    { name: "0.png" },
    { name: "1.png" },
    { name: "2.png" },
    { name: "3.png" },
];

function Gallery() {
    return (
        <Element name={"Gallery"} id="gallery">
            <div className="relative bg-[url('/background.webp')] h-screen mx-auto bg-light dark:bg-dark flex flex-col justify-center items-center gap-8 py-20">
                <div
                    className="absolute inset-0 bg-light/90"
                ></div>
                <div className='relative flex flex-col justify-center items-center w-2/3 gap-y-4'>
                    <p className="text-4xl lg:text-6xl text-dark dark:text-white font-extrabold">
                        Gallery
                    </p>
                    <p className="text-base lg:text-xl text-dark dark:text-white text-center md:w-2/3 lg:w-2/5">
                        See some ZapZap screenshots.
                    </p>
                </div>
                <Carousel
                    className='relative lg:w-1/2'>
                    {files.map((file) => (
                        <Carousel.Item key={file.name}>
                            <img src={'./screenshot/' + file.name} className="h-full" alt={file.name} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </Element>);
}

export default Gallery;
