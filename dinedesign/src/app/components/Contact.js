export default function Contact() {
    return (
        <div className="bg-rose-50 pt-20" id = "contact">
            <ul className="flex flex-col md:flex-row justify-between items-center gap-y-8 px-6 md:px-16 lg:px-24 pt-4">
                <li className="flex items-center">
                    <img src="https://www.svgrepo.com/show/532540/location-pin-alt-1.svg" width="40" height="40" alt="location" />
                    <div className="ml-3">
                        <b className="text-xl">Locate us</b>
                        <p className="text-xs">Riverside 25, San Fran, Cali</p>
                    </div>
                </li>

                <li className="flex items-center">
                    <img src="https://www.svgrepo.com/show/529492/clock-circle.svg" width="40" height="40" alt="clock" />
                    <div className="ml-3">
                        <b className="text-xl">Open Hours</b>
                        <p className="text-xs">Mon - Fri: 9:00 am - 9:00 pm</p>
                    </div>
                </li>

                <li className="flex items-center">
                    <img src="https://www.svgrepo.com/show/372448/form.svg" width="40" height="40" alt="form" />
                    <div className="ml-3">
                        <b className="text-xl">Reservation</b>
                        <p className="text-xs">daveinder2007@gmail.com</p>
                    </div>
                </li>
            </ul>

            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center mt-10 mx-4 sm:mx-8 md:mx-12 lg:mx-20 pb-10">
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0 sm:pt-16">
                    <img
                        src="Restaurant.jpg"
                        alt="Restaurant"
                        className="rounded object-cover w-full max-w-md h-auto lg:max-w-lg"
                    />
                </div>

                <div className="w-full lg:w-1/2 flex pt-5 ">
                    <div className="border-l-2 border-gray-500 mx-4 hidden lg:block"></div>
                    <div id="text" className="pt-5 pb-10 space-y-8 lg:space-y-10 px-4 lg:px-8">
                        <div>
                            <h1 className="text-2xl mb-2">The Story</h1>
                            <p className="text-sm">
                                This is a paragraph of text that will be displayed next to the image. When the screen size
                                is smaller, the image and text will stack vertically, and the line will be hidden.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
                            <div>
                                <h1 className="text-2xl mb-2">1996</h1>
                                <p className="text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ab minima error, accusantium odit sint!
                                </p>
                            </div>
                            <div>
                                <h1 className="text-xl mb-2">1996</h1>
                                <p className="text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ab minima error, accusantium odit sint!
                                </p>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-2xl">Dave Singh</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}







            {/* <div className="flex flex-col md:flex-row items-center justify-center pt-12">
                <img
                src="Restaurant.jpg"
                alt="Placeholder"
                className="w-70 h-42 md:w-1/4 md:h-auto"
                 />
                <div className="hidden md:block border-l-2 border-gray-500 h-32 mx-4"></div>
                <div className="text-center pt-5 sm:pt-0 md:text-left md:w-1/2">
                    <h1 className = "text-center text-xl">
                        The Story
                    </h1>
                    <p>
                    This is a paragraph of text that will be displayed next to the image. When the screen size
                    is smaller than the `md` breakpoint, the image, line, and text will stack vertically, and the line will be hidden.
                    </p>
                    <div class ="flex flex-wrap">
                        <div class ="">
                            <h1 className = "text-xl">
                                1996
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div class ="text-center">
                            <h1 className = "text-xl ">
                                1996
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                  
                </div>
            </div>
            {/* <img class = "object-cover  ease-in-out" src = "Restaurant.jpg" alt ="what"/> */}
            {/* <div className="w-32 h-full bg-blue-500 "></div> */}