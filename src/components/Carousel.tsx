import { Carousel as CarouselFlowbite } from "flowbite-react";
import { galleryFiles } from "../data";

function Carousel() {
    return (
        <div className="w-full h-full md:h-1/2 lg:w-1/2">
            <CarouselFlowbite>
                {galleryFiles.map((file) => (
                    <img key={file.name} src={file.name} className="h-full" alt={file.name} />
                ))}
            </CarouselFlowbite>
        </div>);
}

export default Carousel;