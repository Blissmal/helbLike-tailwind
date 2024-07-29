import { useState } from 'react';
import { FaAndroid, FaApple, FaBeer, FaCoffee, FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';
import propTypes from "prop-types"

const FloatLeft = ({ toggle }) => {
  const [selected, setSelected] = useState(null);

  const icons = [
    { icon: <FaBeer size={30} color="white" />, label: "Beer" },
    { icon: <FaCoffee size={30} color="white" />, label: "Coffee" },
    { icon: <FaApple size={30} color="white" />, label: "Apple" },
    { icon: <FaAndroid size={30} color="white" />, label: "Android" },
    { icon: <FaGithub size={30} color="white" />, label: "Github" },
    { icon: <FaTwitter size={30} color="white" />, label: "Twitter" },
    { icon: <FaFacebook size={30} color="white" />, label: "Facebook" },
  ];

  const handleClick = (index) => {
    setSelected(index);
  };

  return (
      <div className={`relative w-max p-4 pr-0 border border-gray-300 bg-green-600 cursor-pointer ${toggle ? 'flex' : 'hidden'} sm:block`}>
        <ul className="list-none h-screen">
          {icons.map((item, index) => (
            <li
              key={index}
              className={`flex ${index === 1 && 'mt-20'} gap-2 pr-3 mt-5 items-center border-r-2 ${selected === index ? ' border-red-600' : 'border-green-600'} transition-border duration-200`}
              onClick={() => handleClick(index)}
            >
              <span>{item.icon}</span>
              {toggle && <span className={`font-bold ${selected === index ? 'text-red-600' : 'text-white'} transition-colors duration-300`}>{item.label}</span>}
            </li>
          ))}
        </ul>
      </div>
  );
};
FloatLeft.propTypes = {
  toggle: propTypes.bool
}

export default FloatLeft;
