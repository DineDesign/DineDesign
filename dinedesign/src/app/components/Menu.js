export default function Menu() {
    return (
        <div className="flex flex-col items-center p-5 gap-5">
            <h1 className="text-2xl">Menu</h1>
            <span className="text-center max-w-prose">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                voluptatum deleniti atque corrupti quos dolores et At vero eos et accusamus et iusto odio dignissimos ducimus
                qui blanditiis praesentium
            </span>
            <div className="flex flex-wrap justify-center gap-5">
                <button className="w-32 border border-brown-200 p-2 rounded-md hover:bg-brown-200 hover:text-white active:bg-brown-200 active:text-white focus:outline-none">
                    Appetizer
                </button>
                <button className="w-32 border border-brown-200 p-2 rounded-md hover:bg-brown-200 hover:text-white active:bg-brown-200 active:text-white focus:outline-none">
                    Pizza
                </button>
                <button className="w-32 border border-brown-200 p-2 rounded-md hover:bg-brown-200 hover:text-white active:bg-brown-200 active:text-white focus:outline-none">
                    Desserts
                </button>
                <button className="w-32 border border-brown-200 p-2 rounded-md hover:bg-brown-200 hover:text-white active:bg-brown-200 active:text-white focus:outline-none">
                    Bar
                </button>
            </div>
            <div></div>
        </div>
    )
}