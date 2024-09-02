import { useState } from "react";
import { FaCode, FaHome } from "react-icons/fa";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaArrowUpFromGroundWater } from "react-icons/fa6";
import { MdEmail, MdMenu, MdSettings } from "react-icons/md";
import { BiUser } from "react-icons/bi";

const FloatLeft = ({ toggle }) => {
  const [selected, setSelected] = useState(null);

  const icons = [
    { icon: <FaHome size={30} color="white" />, label: "Beer", link: "/" },
    {
      icon: <MdEmail size={30} color="white" />,
      label: "Coffee",
      link: "/loans",
    },
    { icon: <MdMenu size={30} color="white" />, label: "Apple" },
    { icon: <BiUser size={30} color="white" />, label: "Android" },
    { icon: <FaCode size={30} color="white" />, label: "Github" },
    {
      icon: <FaArrowUpFromGroundWater size={30} color="white" />,
      label: "Twitter",
    },
    { icon: <MdSettings size={30} color="white" />, label: "Facebook" },
  ];

  const handleClick = (index) => {
    setSelected(index);
  };

  return (
    <div
      className={`relative w-max p-4 pr-0 border border-gray-300 bg-green-600 cursor-pointer ${
        toggle ? "flex" : "hidden"
      } sm:block`}
    >
      <ul className="list-none h-screen">
        {icons.map((item, index) => (
          <li
            key={index}
            className={`flex ${
              index === 1 && "mt-20"
            } gap-2 pr-3 mt-5 items-center border-r-2 ${
              selected === index ? " border-red-600" : "border-green-600"
            } transition-border duration-200`}
            onClick={() => handleClick(index)}
          >
            <Link to={item.link}>
              <span>{item.icon}</span>
              {toggle && (
                <span
                  className={`font-bold ${
                    selected === index ? "text-red-600" : "text-white"
                  } transition-colors duration-300`}
                >
                  {item.label}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
FloatLeft.propTypes = {
  toggle: propTypes.bool,
};

export default FloatLeft;
