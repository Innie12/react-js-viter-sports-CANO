import React from 'react'

const CardBanner = ({news, update , bg}) => {
  return (
    <>
      <div className={`${bg}  text-white p-8 rounded-lg shadow-lg mb-8`}>
        <h1 className="text-4xl font-bold mb-4">{news}</h1>
        <p className="text-xl">{update}</p>
      </div>
    </>
  );
}

export default CardBanner;
