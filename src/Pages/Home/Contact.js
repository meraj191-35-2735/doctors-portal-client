import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import bgContact from "../../assets/images/appointment.png";

const Contact = () => {
  return (
    <div className="pb-4" style={{ background: `url(${bgContact})` }}>
      <h3 className="text-primary text-xl font-bold text-center my-6">
        Contact Us
      </h3>
      <h2 className="text-3xl font-bold text-center mb-2">
        Stay Connected with Us
      </h2>
      <form className="flex flex-col justify-center items-center">
        <input
          type="email"
          placeholder="Enter Email"
          class="input input-bordered my-3 input-primary w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Subject"
          class="input input-bordered input-primary w-full max-w-xs"
        />
        <textarea
          name="message"
          id="message"
          cols="25"
          rows="5"
          placeholder="Type Your Message Here"
          className="px-2 py-1 rounded-md my-3 input-bordered input-primary w-full max-w-xs"
        ></textarea>
        <PrimaryButton>Submit</PrimaryButton>
      </form>
    </div>
  );
};

export default Contact;
