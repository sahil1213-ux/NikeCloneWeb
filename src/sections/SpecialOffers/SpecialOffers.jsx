import { offer } from "../../assets/images";
import Button from "../../components/Button";

const SpecialOffers = () => {
  return (
    <section className=" flex flex-wrap items-center max-xl:flex-col-reverse max-container">
      <div className=" flex-1">
        <img
          src={offer}
          alt="Special Offer"
          width={773}
          height={687}
          className=" object-contain w-full"
        />
      </div>
      <div className=" flex flex-1 flex-col">
        <h1 className=" mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Special
          <span className=" text-coral-red ml-2">Offers</span>
        </h1>
        <p className="  mt-4 info-text lg:max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="  mt-4 info-text lg:max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className=" mt-8 mb-3 flex space-x-1">
          <Button label="Shop Now" />
          <Button
            label="Learn more"
            bgColor="bg-white"
            borderColor="border-slate-gray"
            txtColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
