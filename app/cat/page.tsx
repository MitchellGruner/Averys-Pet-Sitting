import ScheduleAppointment from "../components/contact/ScheduleAppointment";
import ImageBlurbs from "../components/pet/ImageBlurbs";
import CatCarousel from "./CatCarousel";
import CatHeader from "./CatHeader";

const Cat = () => {
    return (
        <div id="catPage" className="block w-full mx-auto pb-2 xs:pb-8 sm:pb-12 md:pb-16 lg:pb-28 xl:pb-36">
            <CatHeader />
            <CatCarousel />
            <ScheduleAppointment />
            <ImageBlurbs
                imageSrc="/two.dogs.looking.at.camera.png"
                alt="Two Dogs Looking at the Camera"
                textOrientation="text-left"
                header="Purrr-fect Cat Care"
                paragraph="As a cat sitter, I bring a fun-loving and caring approach that cats adore. I make it a point to connect with each furry friend on a playful level, whether it's through feather toys, gentle belly rubs, or simply chatting with them in their own language of purrs and meows. My knack for understanding their individual quirks means I can create a comfortable and enjoyable experience tailored to their preferences. Being a cat sitter isn't just a job for me—it's a passion rooted in making sure every kitty feels cherished and content under my watch."
                buttonClassName="ml-[1em] xs:ml-[5em] sm:ml-[15em] md:ml-[20em] lg:ml-[12em] xl:ml-[23em] 2xl:ml-[30em]"
            />
        </div>
    )
}

export default Cat;