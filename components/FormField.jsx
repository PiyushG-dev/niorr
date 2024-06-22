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
      <label className="text-sm">
        {label}{" "}
        <span
          className={`${
            name !== "date" && name !== "venue" ? "text-red-500" : "hidden"
          } text-sm`}
        >
          *
        </span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, {
          // valueAsNumber,
          required:
            name !== "date" && name !== "venue"
              ? `${label} is required`
              : false,
          pattern: patternValidate(),
        })}
        className="border border-gray-600 text-black px-4 py-2 focus:outline-none focus:border-orange-600"
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
