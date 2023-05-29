import React from "react";

const CasualCategory = () => {
  return (
    <div className="h-[22rem] w-[30rem] relative mobile-category">
      <img
        src="https://5.imimg.com/data5/SELLER/Default/2022/5/JB/VG/ZR/91613985/new-stylish-black-canvas-sneakers-shoe-for-men-500x500.JPG"
        alt="formal-logo"
        className="absolute inset-0 bg-cover bg-center z-0 h-[22rem] w-[30rem] rounded-2xl mobile-category"
      />
      <h1 className="opacity-0 hover:opacity-70 bg-black rounded-2xl duration-300 absolute inset-0 z-10 flex justify-center  border  items-center text-6xl text-white font-semibold font-bebas tracking-wider mobile-category-font">
        Sneakers & Low-tops
      </h1>
    </div>
  );
};

export default CasualCategory;
