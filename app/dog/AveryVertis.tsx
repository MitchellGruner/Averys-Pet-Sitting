import Image from 'next/image';

const AveryVertis = () => {
    return (
        <div className="flex justify-center text-center 2xs:mt-16 2xs:mb-24 xs:mt-20 xs:mb-28 sm:mt-28 sm:mb-32 md:mb-24 lg:mt-36 lg:mb-20 relative z-0">
            <div className="absolute w-full h-40 bg-white"></div>
            
            <Image
                src="/avery.sitting.with.raisin.jpg"
                width={500}
                height={500}
                alt="Avery Sitting with Raisin at Vertis"
                className="border-image z-10 border-light-navy border-[18px]"
            />
            <div className="absolute -bottom-20 xs:-bottom-32 z-10">
                <Image
                    src="/dog.page.avery.with.raisin.jpg"
                    width={300}
                    height={300}
                    alt="Avery's About Me Picture"
                    className="shadow-2xl border-light-navy border-[18px] z-10"
                />
            </div>
        </div>
    )
}

export default AveryVertis;