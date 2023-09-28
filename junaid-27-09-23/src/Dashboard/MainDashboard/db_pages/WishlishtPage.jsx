import React from "react";
import WishlistCard from "../db_components/WishlistCard";

const WishlishtPage = () => {
  return (
    <div className="bg-black py-8 px-6 rounded-2xl xl:rounded-r-none">
      <div className="flex justify-center flex-wrap gap-5 items-center mb-5">
        <h3 className="text-2xl sm:text-5xl leading-none font-bold">
          Your Wishlisht
        </h3>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
      </div>
    </div>
  );
};

export default WishlishtPage;
