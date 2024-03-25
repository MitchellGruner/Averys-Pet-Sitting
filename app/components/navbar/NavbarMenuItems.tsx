import Image from "next/image";

const NavbarMenuItems = () => {
    return (
        <div className="flex flex-row justify-between rounded-full bg-white shadow-2xl border px-4 py-1">
            <div className="flex flex-row justify-center relative px-4 py-2 cursor-pointer hover:text-dark-teal transition ease-in-out duration-500 icon-container">
                <Image
                    src="/dogicon1.png"
                    width={24}
                    height={24}
                    alt="Dog Icon"
                />
                <Image
                    src="/dogiconhover1.png"
                    width={24}
                    height={24}
                    alt="Dog Icon"
                    className="icon-hover absolute object-contain opacity-0 transition ease-in-out duration-500"
                />
                <span className="pl-2">Dog</span>
            </div>
            <div 
                className="flex flex-row justify-center relative px-4 py-2 cursor-pointer border-l border-r hover:text-dark-teal transition ease-in-out duration-500 icon-container"
            >
                <Image
                    src="/mailicon.png"
                    width={24}
                    height={24}
                    alt="Mail Icon"
                />
                <Image
                    src="/mailiconhover.png"
                    width={24}
                    height={24}
                    alt="Mail Icon"
                    className="icon-hover absolute object-contain opacity-0 transition ease-in-out duration-500"
                />
                <span className="pl-2">Contact Me</span>
            </div>
            <div className="flex flex-row justify-center relative px-4 py-2 cursor-pointer hover:text-dark-teal transition ease-in-out duration-500 icon-container">
                <Image
                    src="/caticon.png"
                    width={24}
                    height={24}
                    alt="Cat Icon"
                />
                <Image
                    src="/caticonhover1.png"
                    width={24}
                    height={24}
                    alt="Mail Icon"
                    className="icon-hover absolute object-contain opacity-0 transition ease-in-out duration-500"
                />
                <span className="pl-2">Cat</span>
            </div>
        </div>
    )
}

export default NavbarMenuItems;