import { star } from "../../assets/icons";

const PopularProductsCard = ({ product }) => {
  const { imgURL, name, price } = product;

  return (
    <div className=" flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className=" w-[280px] h-[280px]" />
      <div className=" mt-8 flex justify-start gap-2.5">
        <img src={star} alt="star" width={24} height={24} />
        <p className=" text-2xl font-palanquin font-bold text-coral-red">4.5</p>
      </div>
      <h3 className=" mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <h3 className=" text-2xl leading-normal text-slate-gray">{price}</h3>
    </div>
  );
};

export default PopularProductsCard;
