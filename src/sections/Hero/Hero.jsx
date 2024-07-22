import { useState } from "react";
import { arrowRight } from "../../assets/icons";
import { bigShoe1 } from "../../assets/images";
import Button from "../../components/Button";
import ShoeCard from "../../components/ShoeCard";
import { shoes, statistics } from "../../constants";

const Hero = () => {
  const [bigShowImage, setbigShowImage] = useState(bigShoe1);

  return (
    <section
      id="home"
      className=" w-full  flex xl:flex-row flex-col justify-center  min-h-screen gap-10 max-container"
    >
      <div className=" relative xl:w-2/5 flex flex-col justify-start items-start w-full max-xl:padding-x pt-28">
        <p className=" text-xl font-montserrat text-coral-red">
          Our Summer collection
        </p>
        <h1 className=" mt-10 font-palanquin text-8xl max-sm:text-4xl max-sm:leading-[1] font-bold">
          <span className=" xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New arrivals
          </span>
          <br />
          <span className=" text-coral-red inline-block mt-3">Nike</span>
          <span className=" inline-block mt-3 ml-2">Shoes</span>
        </h1>
        <p className=" font-montserrat text-slate-gray text-lg leading-8 max-sm:mt-2 mt-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button label="Shop Now" icon={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((statistic) => (
            <div key={statistic.label}>
              <p className=" text-4xl font-palanquin font-bold ">
                {statistic.value}
              </p>
              <p className=" leading-7 font-montserrat text-slate-gray">
                {statistic.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className=" relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-hero bg-primary bg-cover bg-center">
        <img
          src={bigShowImage}
          alt="shoe collection"
          width={610}
          height={500}
          className=" relative object-contain z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] items-center sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgUrl={shoe}
                changeBigShowImage={(shoe) => {
                  setbigShowImage(shoe);
                }}
                bigShoeImg={bigShowImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
