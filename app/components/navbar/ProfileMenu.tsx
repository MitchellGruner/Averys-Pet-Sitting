import Link from "next/link";
import Image from "next/image";

import HamburgerMenu from "./HamburgerMenu";

const ProfileMenu = () => {
    return (
        <div className="flex flex-row md:min-w-44 items-center justify-center">
            <Link href="/profile">
                <Image
                    src="/defaultprofilepicture.jpg"
                    width={80}
                    height={0}
                    alt="Hamburger Menu Icon"
                    className="rounded-full p-2 hover:shadow-lg transition ease-in-out duration-500"
                />
            </Link>

            <HamburgerMenu />
        </div>
    )
}

export default ProfileMenu;