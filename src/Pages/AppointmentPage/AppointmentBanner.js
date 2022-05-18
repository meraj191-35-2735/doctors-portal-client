import chair from "../../assets/images/chair.png";
import bannerBg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div style={{ background: `url(${bannerBg})` }} class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse lg:justify-around">
        <img
          src={chair}
          class="max-w-sm rounded-lg shadow-2xl pr-5 lg:pr-0 lg:ml-5"
          alt=""
        />
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
