import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaStackOverflow,
  FaXing,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/firojkabir" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/firojkabir/" },
  {
    icon: <FaXing />,
    path: "https://www.xing.com/profile/MdFiroj_Kabir/web_profiles",
  },
  {
    icon: <FaStackOverflow />,
    path: "https://stackoverflow.com/users/13993372/mr-kabir",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
