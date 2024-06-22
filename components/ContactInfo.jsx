import React from "react";
// import Form from "./Form";
import AnimatedGradientText from "./ui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ContactInfo = () => {
  return (
    <section>
      <div className="screen-inner-width py-14 px-5 sm:px-10 flex flex-col gap-10 xs:px-5">
        {/* <div className="text-center text-lg flex flex-col gap-5">
          <p>
            Please complete the contact form below. We will get back to you
            within 48 business hours. You can also email us directly.
          </p>
          <p className="underline cursor-pointer">niorr.official@gmail.com</p>
        </div> */}
        <div className="flex flex-col gap-3 text-center items-center">
          <AnimatedGradientText>
            📞 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Support
            </span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
          <div className="flex flex-col gap-1 items-center">
            <h1 className="text-5xl font-semibold text-gray-200 sm:text-4xl">
              Contact us
            </h1>
            <h3 className="text-gray-400 text-xl font-light sm:text-lg">
              Please complete the contact form below. We will get back to you
              within 48 business hours. You can also email us directly.
            </h3>
          </div>
          <p className="underline cursor-pointer">niorr.official@gmail.com</p>
        </div>
        {/* <Form /> */}
      </div>
    </section>
  );
};

export default ContactInfo;
