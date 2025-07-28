import homeImg from "../assets/home/couple.webp";
import womanImg from "../assets/home/woman-1.webp";
import manImg from "../assets/home/man.webp";
import kidsImg from "../assets/home/kid.webp";

const ROUTES = {
  HOME: "/",
  WOMAN: "/woman",
  MAN: "/man",
  KIDS: "/kids",
  CART: "/cart",
  WISHLIST: "./wishlist",
};

const NAV_LINKS = {
  HOME: "Home",
  WOMAN: "Woman",
  MAN: "Man",
  KIDS: "Kids",
};
const NAV_IMAGES = {
  HOME: homeImg,
  WOMAN: womanImg,
  MAN: manImg,
  KIDS: kidsImg,
};

export { ROUTES, NAV_LINKS, NAV_IMAGES };
