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
      to_name: "kaarwaan events",
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
      className="w-3/5 py-10 px-10 bg-quinary lg:w-4/5 md:w-full sm:px-3 sm:py-5"
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
          placeholder="Jaipur"
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
          <h3 className="font-Marcellus text-sm">
            What services are you interested in ?
          </h3>
          <div className="flex flex-col gap-2">
            <FormOption
              validateOptions={validateOptions}
              register={register}
              label="Full service planning"
            />
            <FormOption
              validateOptions={validateOptions}
              register={register}
              label="Partial Planning"
            />
            <FormOption
              validateOptions={validateOptions}
              register={register}
              label="Event Management"
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
        <Button disabled={isSubmitting} variant="form">
          {isSubmitting ? "sending" : "Send"}
        </Button>
      </div>
    </form>
  );
};

export default Form;
