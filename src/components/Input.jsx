import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { id, type = "text", label, invalid, ...props },
  ref
) {
  const inputClasses = `w-full px-3 py-2 rounded bg-gray-200 text-gray-800 focus:outline-none focus:ring ${
    invalid ? "border-1 border-red-600" : "focus:ring-blue-300"
  }`;

  return (
    <div className="my-4">
      <label
        htmlFor={id}
        className="block mb-1 text-sm font-medium text-gray-800"
      >
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        type={type}
        className={inputClasses}
        {...props}
      />
    </div>
  );
});

export default Input;
