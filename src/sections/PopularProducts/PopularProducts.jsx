import { products } from "../../constants";
import PopularProductsCard from "./PopularProductsCard";

const PopularProducts = () => {
  return (
    <section id="products" className=" max-container max-sm:mt-12 ">
      <div className=" flex flex-col justify-start gap-5">
        <h2 className=" text-4xl font-palanquin font-bold">
          Our{" "}
          <span className=" text-coral-red text-4xl font-palanquin font-bold">
            Popular
          </span>
          <span className=" text-4xl font-palanquin font-bold"> Products</span>
        </h2>
        <p className=" lg:max-w-lg mt-2 font-monts text-slate-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi,
          cumque optio distinctio reiciendis laborum ipsum, odio atque veritatis
          asperiores eveniet animi, unde illo adipisci in magnam dolores eaque
          fugit?
        </p>
      </div>
      <div className=" mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductsCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
