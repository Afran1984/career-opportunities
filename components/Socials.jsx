import { icons } from "lucide-react";
import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaYoutube, FaFacebook} from "react-icons/fa";


const socials = [
    {icons: <FaGithub />, path: ''},
    {icons: <FaLinkedinIn />, path: ''},
    {icons: <FaYoutube />, path: ''},
    {icons: <FaFacebook />, path: ''},
];
const Socials = ({socialStyles, iconStyle}) => {
    return (
        <div className={socialStyles}>
            {socials.map((item, index)=> {
                return <Link key={index} href={item.path} className={iconStyle}>{item.icons}</Link>
            })}
        </div>
    );
};

export default Socials;