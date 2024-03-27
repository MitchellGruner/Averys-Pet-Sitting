import Link from "next/link";

import "../../styles/main/MainText.scss";

const MainText = () => {
    return (
        <div id="mainText" className="relative">
            <span className="absolute main-header block text-white left-4">Avery's Pet</span>
            <span className="absolute main-header main-header-secondary block text-white top-20 left-16">Sitting</span>

            <div className="main-text-container bg-brown absolute rounded-2xl shadow-2xl">
                <h1 className="text-3xl font-semibold pb-2"><span className="text-white">Take the Quiz!</span> Discover Your Money Magnetism Archetype</h1>

                <hr className="py-3" />
                
                <p className="text-lg leading-6">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>

                <Link href="" className="inline-block mb-6 py-4 px-14 mt-10 text-center text-black text-md font-bold bg-white shadow-2xl uppercase hover:bg-teal transition ease-in-out duration-500">
                    <div className="flex flex-row">
                        <span className="pr-6">Contact Now</span>
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                        </svg>
                    </div>
                </Link>
            </div>

            <div className="main-text-container-secondary bg-white absolute rounded-2xl shadow-2xl"></div>
        </div>
    )
}

export default MainText;