import Link from "next/link";

type Props = {
    text: string;
    class?: string;
};

const ContactButton = (props: Props) => {
    return (
        <Link href="/#contactForm" className={`inline-block mb-6 2xs:py-1 xs:py-2 sm:py-2 md:py-3 lg:py-2 2xs:px-4 sm:px-6 md:px-10 lg:px-14 2xs:mt-4 md:mt-6 lg:mt-10 text-center text-black text-md font-bold bg-white shadow-2xl uppercase hover:bg-light-brown transition ease-in-out duration-500 italic cursor-pointer ${props.class}`}>
            <div className="flex flex-row items-center justify-center">
                <span className="2xs:contents xs:block pr-10 2xs:text-xs xs:text-sm lg:text-md 2xl:text-lg">{props.text}</span>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                </svg>
            </div>
        </Link>
    )
}

export default ContactButton;