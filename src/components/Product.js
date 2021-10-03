/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import Image from "next/image";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, image, description, title, price, category }) => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1))
  );

  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className="relative  m-5 bg-white p-10 z-30 flex flex-col rounded-lg">
      <p className="absolute top-2 right-2 text-xs italic text-gray-500">
        {category}
      </p>
      <Image
        src={image}
        width={200}
        height={200}
        objectFit="contain"
        alt={`image-${id}`}
      />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" key={i} />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            src="https://links.papareact.com/fdw"
            alt="Prime"
            className="w-12"
          />
          <p className="text-xs text-gray-500">Free Delivery</p>
        </div>
      )}
      <button className="mt-auto button">Add to cart</button>
    </div>
  );
};

export default Product;
