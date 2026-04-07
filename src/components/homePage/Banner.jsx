import React from 'react';
import BannerImg from "../../assets/hero.jpg"

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-[70vh] container mx-auto ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={BannerImg}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Books to freshen up your bookshelf
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;