import NavbarMenuItems from "./NavbarMenuItems";
import ProfileMenu from "./ProfileMenu";
import Logo from "../Logo";

const Navbar = () => {
    return (
        <header>
            <nav className="w-full fixed border-b border-white top-0 left-0 py-3 bg-navy z-10" role="navigation" aria-label="Main Navigation">
                <div className="max-w-[1600px] mx-auto px-6">
                    <div className="flex flex-row justify-between items-center">
                        <Logo className="max-w-16 md:max-w-full" width={90} height={90} />
                        <div role="menu" aria-label="Navbar Menu">
                            <NavbarMenuItems />
                        </div>
                        <div role="menu" aria-label="Profile Menu">
                            <ProfileMenu />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;