import { shoe8 } from "../../assets/images";
import Button from "../../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className=" flex justify-between items-center gap-10 max-lg:flex-col w-full max-container"
    >
      <div className=" flex flex-1 flex-col">
        <h1 className=" mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide
          <br />
          <span className=" text-coral-red">Super</span>
          <span className=" text-coral-red"> Quality </span>
          Shoes
        </h1>
        <p className="  mt-4 info-text lg:max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="  mt-4 info-text lg:max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className=" mt-8">
          <Button label="Shop Now" />
        </div>
      </div>
      <div className=" flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt={shoe8}
          width={570}
          height={522}
          // className=" rounded-full"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
