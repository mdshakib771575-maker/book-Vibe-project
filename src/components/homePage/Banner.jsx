import React from 'react';
import BannerImg from "../../assets/hero.jpg"

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-[70vh] w-11/12 mx-auto my-10 rounded-2xl">
  <div className="hero-content flex-col lg:flex-row-reverse w-full justify-around">
    <img
      src={BannerImg}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold"> Books to freshen up <br /> your bookshelf</h1>
      <p className="py-6">
      
      </p>
      <button className="btn btn-success">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;