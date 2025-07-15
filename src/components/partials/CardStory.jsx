import React from "react";

const CardStory = ({ img, alt, title, description,btn_bg, btn_hover }) => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img
          src={img}
          alt={alt}
          className="w-full h-48 object-cover rounded-t-lg mb-4"
        />
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className={`${btn_bg} text-white px-4 py-2 rounded ${btn_hover} transition duration-300`}>
          Read Story
        </button>
      </div>
    </>
  );
};

export default CardStory;
