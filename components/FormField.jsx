import React from "react";

const FormField = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
  label,
}) => {
  const patternValidate = () => {
    if (name === "email") {
      return {
        value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        message: "enter a valid email",
      };
    } else if (name === "phoneNumber") {
      return {
        value: /^[0-9]{10}$/,
        message: "Phone number must be 10 digits",
      };
    } else {
      return null;
    }
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-Marcellus text-sm">
        {label} <span className="text-red-500 text-sm">*</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, {
          // valueAsNumber,
          required: `${label} is required`,
          pattern: patternValidate(),
        })}
        className="border border-secondary font-Marcellus px-4 py-2 focus:outline-none focus:border-gray-400"
      />
      {error && (
        <span className="text-sm text-red-500 font-Manrope">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default FormField;
