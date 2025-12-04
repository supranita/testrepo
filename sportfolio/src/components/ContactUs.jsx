
import React from "react";
import Container from "./Container";

const ContactUs = () => {
  return (
    <Container className="py-12">
      <h2 className="text-blue-500 text-xl md:text-3xl lg:text-5xl font-bold uppercase">
        stay in the loop{" "}
      </h2>
      <div className="relative mt-12">
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="w-full outline-none placeholder:text-black text-xl md:text-2xl border-b border-black py-3 lg:text-3xl"
        />
        <button
          href="#"
          className="absolute top-1/2 -translate-y-1/2  right-5 text-sm font-semibold text-white bg-black rounded-md px-3 py-2 uppercase"
        >
          Sign up
        </button>
      </div>
    </Container>
  );
};

export default ContactUs;
