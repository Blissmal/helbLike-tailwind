import {
    FaHome, FaUser, FaCode, FaArrowLeft,
} from "react-icons/fa";
import {
  MdEmail
} from "react-icons/md";
import {
  GiHamburgerMenu, GiJigsawPiece
} from "react-icons/gi";
import {
  FiColumns, FiSettings, FiArrowRight
} from "react-icons/fi";
import {
  BsBriefcase
} from "react-icons/bs";
import {
  BiSupport
} from "react-icons/bi";

const menuItems = [
  {
    icon: <FaHome size={30} color="white" />,
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: <FiColumns size={30} color="white" />,
    label: "My Account",
    link: "/my-account",
    iconalt: <FiArrowRight size={30} color="white" />,
  },
  {
    icon: <MdEmail size={30} color="white" />,
    label: "Messages",
    link: "/messages",
  },
  {
    icon: <GiHamburgerMenu size={30} color="white" />,
    label: "Loan Application",
    link: "/loan-application",
  },
  {
    icon: <FaUser size={30} color="white" />,
    label: "My Profile",
    link: "/my-profile",
  },
  {
    icon: <FaCode size={30} color="white" />,
    label: "Helb Scholarship",
    link: "/helb-scholarship",
  },
  {
    icon: <FaArrowLeft size={30} color="white" />,
    label: "Funds Appeal",
    link: "/funds-appeal",
  },
  {
    icon: <GiJigsawPiece size={30} color="white" />,
    label: "My Loans",
    link: "/my-loans",
  },
  {
    icon: <BsBriefcase size={30} color="white" />,
    label: "Self Serve",
    link: "/self-serve",
    iconalt: <FiArrowRight size={30} color="white" />,
  },
  {
    icon: <FiSettings size={30} color="white" />,
    label: "Help me",
    link: "/help-me",
    iconalt: <FiArrowRight size={30} color="white" />,
  },
  {
    icon: <BiSupport size={30} color="white" />,
    label: "Contact Us",
    link: "/contact-us",
  },
];

export default menuItems;
