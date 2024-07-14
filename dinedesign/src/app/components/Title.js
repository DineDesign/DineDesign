import Image from "next/image";
import Background from '../public/title-card-bg.png';

export default function Title() {
    return (
        <div className="relative">
            <div className="flex flex-col gap-7 absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <p className="text-4xl text-center satisfy-regular">
                    Taste of India
                </p>
                <h1 className="text-white text-8xl font-bold text-shadow text-center">Restaurant Title</h1>
                <span className="flex justify-center">
                    <p className="text-lg text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque sagittis suscipit elit quis lacinia. Pellentesque quis vulputate elit.

                    </p>
                </span>
            </div>
            <Image src={Background} alt="background" className="w-full" />
        </div>
    )
} 