"use client";
import React from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import FormOption from "./FormOption";
import { toast } from "sonner";
import { format } from "date-fns";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm();

  const currentDate = new Date();
  const formattedDate = format(currentDate, " hh a, EEEE, MMMM do, yyyy");

  // validating checkboxes for the available services

  const validateOptions = (selectedOptions) => {
    if (
      selectedOptions &&
      selectedOptions.includes("Unsure - I would like more information") &&
      selectedOptions.length > 1
    ) {
      return "you cannot select other options if you are unsure";
    }
    return true;
  };

  // using emailJS to send email with collected info

  const onSubmit = async (data) => {
    const templateParams = {
      from_name: data.fullName,
      from_email: data.email,
      to_name: "niorr",
      venue: data.venue,
      email: data.email,
      number: data.phoneNumber,
      date: data.date,
      services: data.services,
    };
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      toast("successfully sent", {
        description: formattedDate,
      });
      console.log("SUCCESS", data, response);
      reset();
    } catch (err) {
      console.error(err);
      toast("please try again", {
        description: formattedDate,
      });
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="py-10 px-10 bg-gray-950 sm:px-3 sm:py-5 rounded-lg"
    >
      <div className="flex flex-col items-start gap-5">
        <FormField
          label="Full Name"
          type="text"
          placeholder="Adit Sharma"
          name="fullName"
          register={register}
          error={errors.fullName}
        />
        <FormField
          label="Phone number"
          type="number"
          placeholder="8764512309"
          name="phoneNumber"
          register={register}
          error={errors.phoneNumber}
          valueAsNumber
        />
        <FormField
          label="Email"
          type="email"
          placeholder="Email"
          name="email"
          register={register}
          error={errors.email}
        />
        <FormField
          label="Venue"
          type="text"
          placeholder="IIT Guwahati"
          name="venue"
          register={register}
          error={errors.venue}
        />
        <FormField
          label="Event Date"
          type="date"
          name="date"
          register={register}
          error={errors.date}
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-sm">
            What are you looking for?{" "}
            <span className="text-red-500 text-sm">*</span>
          </h3>
          <div className="flex flex-col gap-2">
            <FormOption
              validateOptions={validateOptions}
              register={register}
              label="Book an artist for a live show"
            />
            <FormOption
              validateOptions={validateOptions}
              register={register}
              label="Brand sponsorship / endorsement"
            />
            <FormOption
              validateOptions={validateOptions}
              register={register}
              label="Joining niorr and team"
            />
            <FormOption
              validateOptions={validateOptions}
              register={register}
              label="Unsure - I would like more information"
            />
          </div>
          {errors.services && (
            <span className="text-sm text-red-500 font-Manrope">
              {errors.services.message}
            </span>
          )}
        </div>
        <Button disabled={isSubmitting} size="lg">
          {isSubmitting ? "sending" : "Send"}
        </Button>
      </div>
    </form>
  );
};

export default Form;
