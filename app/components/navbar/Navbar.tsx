import Link from "next/link";
import Image from "next/image";

import NavbarMenuItems from "./NavbarMenuItems";
import ProfileMenu from "./ProfileMenu";

const Navbar = () => {
    return (
        <nav className="w-full fixed border-b top-0 left-0 py-3 bg-teal z-10">
            <div className="max-w-[1600px] mx-auto px-6">
                <div className="flex flex-row justify-between items-center">
                    <Link href="/" className="md:min-w-44 flex flex-row justify-center">
                        <Image
                            src="/averyspetsittinglogo1.png"
                            width={90}
                            height={90}
                            alt="Avery's Pet Sitting Logo"
                            className="max-w-16 md:max-w-full"
                        />
                    </Link>

                    <NavbarMenuItems />

                    <ProfileMenu />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;