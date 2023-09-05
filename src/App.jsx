import classes from "./App.module.css";
import check from "./assets/check.svg";
import star from "./assets/star.svg";
import sushi12 from "./assets/sushi-12.png";
import sushi11 from "./assets/sushi-11.png";
import sushi10 from "./assets/sushi-10.png";
import searchIcon from "./assets/search.svg";
import menuIcon from "./assets/menu.svg"

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

const trendingSushis = [
  "Make Sushi",
  "Nigiri Sushi",
  "Oshizushi",
  "Temaki Sushi",
  "Uramaki Sushi",
  "Inari Sushi",
];

const trendingDrinks = [
  "Oruncha",
  "Ofukucha",
  "Sakura Tea",
  "Kombu-cha",
  "Aojiru",
  "Mugicha",
];

const cards = [
  {
    imgSrc: sushi12,
    alt: "sushi-12",
    title: "Chezu Sushi",
    rating: "4.8",
    price: "$21.00",
  },
  {
    imgSrc: sushi11,
    alt: "sushi-11",
    title: "Originale Sushi",
    rating: "4.8",
    price: "$21.00",
    active: true,
  },
  {
    imgSrc: sushi10,
    alt: "sushi-10",
    title: "Ramen Legendo",
    rating: "4.8",
    price: "$21.00",
  },
];

function App() {
  return (
    <header>
      <nav className={classes.header__nav}>
        <div className={classes.header__logo}>
          <h4>Sushiman</h4>
          <div className={classes.header__logo_overlay}></div>
        </div>
        <ul className={classes.header__menu}>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#food">Food</a>
          </li>
          <li>
            <a href="#services">Servies</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <img src={searchIcon} alt="search" />
          </li>
        </ul>
        {/* MOBILE CSS: */}
        <ul className={classes.header__menu_mobile}> {/*This will need name change for the class */}
      <li>
        <img src={menuIcon} alt="menu" />
      </li>
        </ul>
      </nav>
    </header>
  );
}

export default App;
