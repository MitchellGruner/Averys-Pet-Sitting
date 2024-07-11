import PhotoCallout from "./PhotoCallout";
import ScheduleAppointment from "../components/contact/ScheduleAppointment";
import ImageBlurbs from "../components/pet/ImageBlurbs";
import DogHeader from "./DogHeader";
import AveryVertis from "./AveryVertis";

const Dog = () => {
    return (
        <div id="dogPage" className="relative block w-full mx-auto mt-2 sm:mt-4 lg:mt-6 2xl:mt-8 pb-2 xs:pb-8 sm:pb-12 md:pb-16 lg:pb-28 xl:pb-36 max-w-[1600px]">
            <DogHeader />
            <PhotoCallout />
            <AveryVertis />
            <ImageBlurbs 
                imageSrc="/two.dogs.looking.at.camera.png"
                alt="Two Dogs Looking at the Camera"
                textOrientation="text-left"
                parentClassName="mt-16 sm:mt-20 md:mt-28 lg:mt-32 xl:mt-40"
                header="Your Dog's New Best Friend"
                paragraph="As a passionate and experienced dog lover, I bring a unique blend of reliability, enthusiasm, and genuine care to dog sitting. With years of experience in handling dogs of various breeds and temperaments, I understand the nuances of canine behavior and needs. I ensure that your furry friend receives personalized attention, regular exercise, and plenty of affection. My commitment to providing a safe, fun, and nurturing environment means you can have peace of mind knowing that your dog is in loving hands while you're away."
                buttonClassName="ml-[5em] sm:ml-[15em] md:ml-[20em] lg:ml-[12em] xl:ml-[23em] 2xl:ml-[30em]"
            />
            <ImageBlurbs
                imageSrc="/avery.with.summer.png"
                alt="Avery with Summer"
                textOrientation="text-left lg:text-right"
                parentClassName="lg:flex-row-reverse mt-16 sm:mt-20 md:mt-28 lg:mt-32 xl:mt-40"
                divClassName="md:mr-14 second-div"
                header="Tail-Wagging Care Guaranteed"
                paragraph="Picture this: a lifelong dog lover with a heart as big as their enthusiasm for canine companionship. That's me in a nutshell! Growing up surrounded by wagging tails and wet noses, I learned the language of dogs – from playful barks to soulful gazes. I pride myself on being a keen observer of their needs and quirks, ensuring every tail gets the wag it deserves. With me, your pup isn't just a job; they're family. So, let's embark on this adventure together, where every pawprint leads to cherished memories and endless tail wags."
                buttonClassName="ml-[5em] sm:ml-[15em] md:ml-[20em] lg:ml-[0em] lg:mr-[12em] xl:ml-[2em] xl:mr-[22em] 2xl:mr-[30em]"
            />
            <ScheduleAppointment />
        </div>
    )
}

export default Dog;