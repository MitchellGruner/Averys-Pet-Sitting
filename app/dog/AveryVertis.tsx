import Image from 'next/image';

const AveryVertis = () => {
    return (
        <div className="text-center mt-20 mx-10">
            <Image
                src="/avery.sitting.with.raisin.jpg"
                width={500}
                height={500}
                alt="Avery Sitting with Raisin at Vertis"
            />
        </div>
    )
}

export default AveryVertis;