"use client";

import Link from "next/link";
import Image from "next/image";

type Props = {
    className: string;
    width: number;
    height: number;
};

function handleClick() {
    if ((window.location.href).includes("/dog") || (window.location.href).includes("/cat")) {
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
}

const Logo = (props: Props) => {
    return (
        <Link href="/#home" onClick={handleClick} className="md:min-w-44 flex flex-row justify-center cursor-pointer">
            <Image
                src="/averyspetsittinglogo1.png"
                width={props.width}
                height={props.height}
                alt="Avery's Pet Sitting Logo"
                className={`${props.className}`}
            />
        </Link>
    )
}

export default Logo;