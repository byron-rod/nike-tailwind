import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, image, price, name }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={imgURL}
        alt={name}
        className="w-[280px] h-[280px] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:scale-105"
      />
      <div className="mt-8 flex gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <img src={star} alt="rating" width={24} height={24} />
        <img src={star} alt="rating" width={24} height={24} />
        <img src={star} alt="rating" width={24} height={24} />
        <img src={star} alt="rating" width={24} height={24} />
      </div>
      <div className="mt-4 flex flex-col gap-1.5">
        <h3 className="text-2xl leading-normal font-semibold font-palanquin">
          {name}
        </h3>
        <p className="font-semibold font-montserrat text-coral-red text-1xl leading-snug">
          {price}
        </p>
      </div>
    </div>
  );
};

export default PopularProductCard;
