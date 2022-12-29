import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: "https://www.linkedin.com/in/julianalvarez42/",
    label: "LinkedIn",
    icon: faLinkedinIn,
  },
  {
    link: "https://twitter.com/infinitejuliaan",
    label: "Twitter",
    icon: faTwitter,
  },
  {
    link: "https://www.instagram.com/infinitejuliaan/",
    label: "Instagram",
    icon: faInstagram,
  },
  {
    link: "https://github.com/julianjear",
    label: "Github",
    icon: faGithub,
  },
  {
    link: "https://www.facebook.com/infinitejuliaan",
    label: "Facebook",
    icon: faFacebookF,
  },

  {
    link: "mailto:infinite@julian.ai",
    label: "Email",
    icon: faEnvelope,
  },
];

export default data;
