import ReviewCard from "../../components/ReviewCard";
import { reviews } from "../../constants";

export default function CustomerReviews() {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold flex-wrap">
        What Our{" "}
        <span className="font-montserrat text-coral-red">Customers</span> Say?
      </h3>
      <p className="max-w-lg info-text text-center mt-4 m-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum beatae,
        repellat totam
      </p>
      <div className=" space-y-7 my-4">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </section>
  );
}
