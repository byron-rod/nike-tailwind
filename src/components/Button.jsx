import React from "react";

const Button = ({
  label,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth = false,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat tex-lg leading-none  ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}
    </button>
  );
};

export default Button;
