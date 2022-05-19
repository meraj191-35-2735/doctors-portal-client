import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary text-center">
            {name}
          </h3>

          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-3"
          >
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              className="input input-bordered mx-auto w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-secondary mx-auto w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered mx-auto w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered mx-auto w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered mx-auto w-full max-w-xs"
            />
            <input
              type="submit"
              className="btn btn-secondary mx-auto w-full max-w-xs"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
