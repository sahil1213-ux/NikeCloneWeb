const Subscribe = () => {
  return (
    <section
      className=" max-container flex justify-between items-center max-lg:flex-col space-x-4"
      id="contact-us"
    >
      <h3 className=" text-4xl leading-[65px] lg:max-w-md font-palanquin font-bold">
        Sign Up form <span className="text-coral-red">Newsletter </span>
        and updates
      </h3>
      {/* max-lg */}
      <div className="max-lg:flex-col max-lg:space-y-3 max-lg:flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-80 h-14 border border-gray-300 rounded-lg px-4"
        />
        <button className="bg-coral-red text-white w-40 h-14 rounded-lg  max-lg:self-center">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
