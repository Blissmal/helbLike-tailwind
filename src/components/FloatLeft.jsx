import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FloatLeft = ({ toggle, menuItems }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    setSelected(index);
  };

  return (
    <div
      className={`relative w-max overflow-y-auto overflow-x-hidden p-4 pr-0 border border-gray-300 bg-green-600 cursor-pointer ${
        toggle ? "flex" : "hidden"
      } sm:block`}
    >
      <ul className="list-none h-screen">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`flex ${
              (index === 1 || index === 3 || index === 4 || index === 10) ? "mt-20" : "mt-5"
            } gap-2 pr-3 items-center border-r-2 ${
              selected === index ? "border-orange-400" : "border-green-600"
            } transition-border duration-200`}
            onClick={() => handleClick(index)}
          >
            <Link
              to={item.link || "#"}
              className="flex justify-between items-center gap-2"
              aria-label={item.label}
            >
              <span>{item.icon}</span>
              {toggle && (
                <span
                  className={`items-center flex gap-2 font-bold ${
                    selected === index ? "text-orange-400" : "text-white"
                  } transition-colors duration-300`}
                >
                  {item.label}
                  {item.iconalt && <span className="text-orange-400">{item.iconalt}</span>}
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
  toggle: PropTypes.bool.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      label: PropTypes.string.isRequired,
      link: PropTypes.string,
      iconalt: PropTypes.element,
    })
  ).isRequired,
};

export default FloatLeft;
