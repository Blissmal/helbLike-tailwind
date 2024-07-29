import React from "react";
import propTypes from "prop-types"

const CardHome = ({ text, divColor, logo }) => {
  return (
    <div className="m-0 w-full lg:max-w-[350px] flex flex-col items-center p-3 bg-gray-200 h-fit mb-0">
      <div className="flex flex-col relative items-center w-full max-w-full bg-white shadow-lg rounded-md p-6">
        <h2 className="text-lg font-bold text-blue-600">{text}</h2>
        <div className="absolute md:top-[50px] top-6 right-10">
          {React.cloneElement(logo, { size: 40 })}
        </div>
        <div className="w-full bg-gray-300 h-2 mt-12 rounded-full">
          <div className={`h-2 w-3/4 rounded-md ${divColor}`} />
        </div>
      </div>
    </div>
  );
};
CardHome.propTypes = {
  text: propTypes.string,
  divColor: propTypes.string,
  logo: propTypes.any
}

export default CardHome;
