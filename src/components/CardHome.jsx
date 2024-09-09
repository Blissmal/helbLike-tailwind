import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardHome = ({ text, link, divColor = "bg-blue-500", logo }) => {
  return (
    <div className="m-0 w-full lg:max-w-[350px] flex flex-col items-center p-3 bg-gray-200 h-fit mb-0 hover:scale-105 transform transition duration-300 ease-in-out">
      <div className="flex flex-col relative items-center w-full max-w-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out rounded-md p-6">
        <Link to={link} className="text-lg font-bold text-blue-600 cursor-pointer">
          {text}
        </Link>
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
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  divColor: PropTypes.string,
  logo: PropTypes.element.isRequired,
};

export default CardHome;
