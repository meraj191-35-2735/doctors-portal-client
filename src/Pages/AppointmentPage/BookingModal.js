import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;
  const [user, loading, error] = useAuthState(auth);
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
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
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered mx-auto w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
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
