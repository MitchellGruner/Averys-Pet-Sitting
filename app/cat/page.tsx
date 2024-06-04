import ScheduleAppointment from "../components/contact/ScheduleAppointment";
import CatCarousel from "./CatCarousel";
import CatHeader from "./CatHeader";

const Cat = () => {
    return (
        <div id="catPage">
            <CatHeader />
            <CatCarousel />
            <ScheduleAppointment />
        </div>
    )
}

export default Cat;