import React from "react";

const FormOption = ({ register, label, validateOptions }) => {
  return (
    <label className="flex items-center gap-2">
      <input
        className="form-checkbox h-4 w-4 rounded"
        type="checkbox"
        value={label}
        {...register("services", {
          required: "please select an option",
          validate: validateOptions,
        })}
      />
      <span>{label}</span>
    </label>
  );
};

export default FormOption;
