import Link from "next/link";
import Image from "next/image";

function NavbarMenuItemsLink({
    href,
    linkClassName,
    divClassName,
    firstImageSrc,
    firstImageAlt,
    secondImageSrc,
    secondImageAlt,
    title,
}: {
    href: string;
    linkClassName: string;
    divClassName?: string;
    firstImageSrc: string;
    firstImageAlt: string;
    secondImageSrc?: string;
    secondImageAlt?: string;
    title: string;
}) {
    return (
        <Link href={href} className={`${linkClassName} outline inline-block transition ease-in-out duration-500 icon-container`}>
            <div className={`flex flex-row items-center justify-center relative py-1 cursor-pointer ${divClassName}`}>
                <Image
                    src={firstImageSrc}
                    width={24}
                    height={24}
                    alt={firstImageAlt}
                    className="unskew"
                />
                {secondImageSrc && secondImageAlt && (
                    <Image
                        src={secondImageSrc}
                        width={24}
                        height={24}
                        alt={secondImageAlt}
                        className="icon-hover unskew absolute object-contain opacity-0 transition ease-in-out duration-500"
                    />
                )}
                <span className="md:pl-2 lg:pl-4 font-bold unskew">{title}</span>
            </div>
        </Link>
    )
}

const NavbarMenuItems = () => {
    return (
        <div className="hidden md:flex md:flex-row mx-auto">
            <NavbarMenuItemsLink
                href="/dog"
                linkClassName="dog"
                divClassName="hover:text-navy"
                firstImageSrc="/dogiconwhite2.png"
                firstImageAlt="White Dog Icon"
                secondImageSrc="/dogiconnavy.png"
                secondImageAlt="Navy Dog Icon"
                title="Dog"
            />
            &nbsp;
            <NavbarMenuItemsLink
                href="/contact"
                linkClassName="contact"
                firstImageSrc="/mailiconteal.png"
                firstImageAlt="Teal Mail Icon"
                title="Contact Me"
            />&nbsp;
            <NavbarMenuItemsLink
                href="/cat"
                linkClassName="cat"
                divClassName="hover:text-navy"
                firstImageSrc="/caticonwhite.png"
                firstImageAlt="White Cat Icon"
                secondImageSrc="/caticonnavy.png"
                secondImageAlt="Navy Cat Icon"
                title="Cat"
            />
        </div>
    )
}

export default NavbarMenuItems;