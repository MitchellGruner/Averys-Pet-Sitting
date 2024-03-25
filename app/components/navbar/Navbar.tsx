import Link from "next/link";
import Image from "next/image";

import NavbarMenuItems from "./NavbarMenuItems";

const Navbar = () => {
    return (
        <nav className="w-full fixed top-0 left-0 py-6 border-b bg-teal z-10">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <h1>Avery's Pet Sitting Shiat</h1>
                    </Link>

                    <div>
                        <NavbarMenuItems />
                    </div>

                    <div></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;