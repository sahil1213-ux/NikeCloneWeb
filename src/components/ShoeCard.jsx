const ShoeCard = ({ imgUrl, changeBigShowImage, bigShoeImg }) => {
  const ifSelected =
    bigShoeImg === imgUrl.bigShoe ? "border-coral-red" : "border-transparent";
  const handleClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeBigShowImage(imgUrl.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${ifSelected} cursor-pointer max-sm:flex-1 rounded-full`}
      onClick={handleClick}
    >
      <div className=" bg-card flex rounded-lg">
        <img
          src={imgUrl.thumbnail}
          alt="shoe"
          width={150}
          height={150}
          className=" object-contain"
        />
      </div>
    </div>
  );
};
export default ShoeCard;
