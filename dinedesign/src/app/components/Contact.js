export default function Contact() {
    return (
        <div className="bg-rose-50">
            <ul className="flex flex-wrap justify-center gap-x-12 pt-4">

                <li class = "flex items-center">
                    <img src="https://www.svgrepo.com/show/532540/location-pin-alt-1.svg" width="40" height="40" alt="fb" />
                    <div class = "pt-3">
                        <b class ="text-xl">Locate us</b>
                        <p className="text-xs">Riverside 25, San Fran, Cali</p>
                    </div>
                </li>


                <li class = "flex items-center mb-4 md:mb-0">
                <img src="https://www.svgrepo.com/show/529492/clock-circle.svg" width="40" height="40" alt="fb" />
                    <div class = "pt-3">
                        <b class ="text-xl">Open Hours</b>
                        <p className="text-xs">Mon - Fri: 9:00 am - 9:00 pm</p>
                    </div>
                </li>
                

                <li class = "flex items-center mb-4 md:mb-0">
                <img src="https://www.svgrepo.com/show/372448/form.svg" width="40" height="40" alt="fb" />
                    <div class = "pt-3">
                        <b class ="text-xl">Reservation </b>
                        <p className="text-xs">daveinder2007@gmail.com</p>
                    </div>
                </li>

            </ul>

            <div className="grid sm:grid-cols-2 grid-cols-1 mt-10 mx-20 pb-10">
                
                <div className="flex justify-end">
                    <img
                        src="Restaurant.jpg"
                        alt="Placeholder"
                        className="rounded- object-right object-contain  "
                    />
                </div>

                <div className="flex pt-5 md:pt-10  mb-10">
                    <div className="border-l-2 border-gray-500 mx-8 hidden md:block pb"></div>
                    <div id = "text" className = "pt-5 pb-10 space-y-10">
                        <div>
                            <h1 className="text-2xl">
                                The Story
                            </h1>
                            <p className = "text-sm">
                                This is a paragraph of text that will be displayed next to the image. When the screen size
                                is smaller than the `md` breakpoint, the image, line, and text will stack vertically, and the line will be hidden.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
                            <div>
                                <h1 className="text-2xl">
                                    1996
                                </h1>
                                <p className = "text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ab minima error, accusantium odit sint!
                                </p>
                            </div>
                            <div>
                                <h1 className="text-xl">
                                    1996
                                </h1>
                                <p className = "text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ab minima error, accusantium odit sint!
                                </p>
                            </div>
                        </div>

                        <div className ="">
                            <h1 className = "text-2xl">
                                Dave Singh
                            </h1>
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