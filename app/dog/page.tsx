import PhotoCallout from "./PhotoCallout";
import ScheduleAppointment from "../components/contact/ScheduleAppointment";
import ImageBlurbs from "../components/pet/ImageBlurbs";
import DogHeader from "./DogHeader";

const Dog = () => {
    return (
        <div id="dogPage" className="relative block w-full mx-auto mt-2 sm:mt-4 lg:mt-6 2xl:mt-8 pb-2 xs:pb-8 sm:pb-12 md:pb-16 lg:pb-28 xl:pb-36 max-w-[1600px]">
            <DogHeader />
            <PhotoCallout />
            <ImageBlurbs />
            <ScheduleAppointment />
        </div>
    )
}

export default Dog;