import ScheduleAppointment from "../components/contact/ScheduleAppointment";
import ImageBlurbs from "../components/pet/ImageBlurbs";
import CatCarousel from "./CatCarousel";
import CatHeader from "./CatHeader";

const Cat = () => {
    return (
        <section id="catPage" className="block w-full mx-auto pb-2 xs:pb-8 sm:pb-12 md:pb-16 lg:pb-28 xl:pb-36">
            <CatHeader />
            <CatCarousel />
            <ScheduleAppointment />
            <ImageBlurbs
                imageSrc="/cat-page-callout-image.png"
                alt="Cat Laying Down and Looking at the Camera"
                textOrientation="text-left"
                header="Purrr-fect Cat Care"
                paragraph="I bring a fun-loving and caring approach that cats adore. Whether it’s through chasing toy mice, gentle belly rubs, or simply laying in my lap purring, I make it a point to connect with each furry friend on a personal level tailored to their own preferences. My understanding of their individual needs means I can create a comfortable and enjoyable experience for each kitty while you’re away. Being a cat sitter isn't just a job for me—it's a passion rooted in making sure every cat feels cherished and content under my watch."
                buttonClassName="ml-[1em] xs:ml-[5em] sm:ml-[15em] md:ml-[20em] lg:ml-[12em] xl:ml-[23em] 2xl:ml-[30em]"
            />
        </section>
    )
}

export default Cat;