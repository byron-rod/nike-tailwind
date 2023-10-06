import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350] w-full rounded-[20px] shadow-3xl px-10 py-16 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:scale-105">
      <div className="w-16 h-16 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={28} height={28} />
      </div>
      <h3 className="text-2xl font-bold mt-5 font-palanquin">{label}</h3>
      <p className="text-md mt-3 break-words font-montserrat text-slate-grey">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
