import PhotoCallout from "./PhotoCallout";
import ScheduleAppointment from "../components/contact/ScheduleAppointment";
import ImageBlurbs from "../components/pet/ImageBlurbs";
import DogHeader from "./DogHeader";
import AveryVertis from "./AveryVertis";

const Dog = () => {
    return (
        <section id="dogPage" className="relative block w-full mx-auto mt-2 sm:mt-4 lg:mt-6 2xl:mt-8 pb-2 xs:pb-8 sm:pb-12 md:pb-16 lg:pb-28 xl:pb-36">
            <DogHeader />
            <PhotoCallout />
            <AveryVertis />
            <ImageBlurbs 
                imageSrc="/two.dogs.looking.at.camera.png"
                alt="Two Dogs Looking at the Camera"
                textOrientation="text-left"
                parentClassName="mt-16 sm:mt-20 md:mt-28 lg:mt-32 xl:mt-40"
                header="Your Dog's New Best Friend:"
                paragraph="As a passionate and experienced dog lover, I bring a unique blend of reliability, enthusiasm, and genuine care to dog sitting. With years of experience in handling dogs of various breeds and temperaments, I understand the differences of canine behavior and needs. My commitment to providing a safe, fun, and nurturing environment means you can have peace of mind knowing that your dog is in loving hands while you're away. By the time you’re back home, they’re sure to have a new BFF."
                buttonClassName="ml-[5em] sm:ml-[15em] md:ml-[20em] lg:ml-[12em] xl:ml-[23em] 2xl:ml-[30em]"
            />
            <ImageBlurbs
                imageSrc="/avery.with.summer.png"
                alt="Avery with Summer"
                textOrientation="text-left lg:text-right"
                parentClassName="lg:flex-row-reverse mt-16 sm:mt-20 md:mt-28 lg:mt-32 xl:mt-40"
                divClassName="md:mr-14 second-div"
                header="Endless Paw-sibilties:"
                paragraph="Are you planning a week-long family vacation or are you just going to be away for the day? Kennels and new environments can be stressful for pets, which is why I offer overnight sitting. No matter your busy schedule, I offer countless different services to best care for your canine companions when you need it the most. I’m happy to stop by and provide drop-in care such as playtime, walks, feeding, or even just a quick bathroom break! From overnight stays to drop-in visits, your dogs will receive the best care while you are away!"
                buttonClassName="ml-[5em] sm:ml-[15em] md:ml-[20em] lg:ml-[0em] lg:mr-[12em] xl:ml-[2em] xl:mr-[22em] 2xl:mr-[30em]"
            />
            <ScheduleAppointment />
        </section>
    )
}

export default Dog;