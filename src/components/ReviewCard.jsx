import { star } from "../assets/icons";

const ReviewCard = ({ review }) => {
  const { imgURL, customerName, feedback, rating } = review;
  return (
    <div className=" flex justify-center items-center flex-col">
      <img src={imgURL} alt="customer" className="w-20 h-20 rounded-full" />
      <p className="text-center font-montserrat text-lg text-black mt-4 font-bold">
        {customerName}
      </p>
      <div className="flex justify-center items-center">
        <img src={star} alt="star" className="w-6 h-6" />
        <p className="text-center font-montserrat text-lg text-black ml-2 my-4">
          {rating}
        </p>
      </div>
      <p className="text-center info-text max-w-sm">{feedback}</p>
    </div>
  );
};

export default ReviewCard;
