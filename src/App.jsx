import classes from "./App.module.css";
import "./index.css";
import check from "./assets/check.svg";
import star from "./assets/star.svg";
import sushi12 from "./assets/sushi-12.png";
import sushi11 from "./assets/sushi-11.png";
import sushi10 from "./assets/sushi-10.png";
import searchIcon from "./assets/search.svg";
import menuIcon from "./assets/menu.svg";
import sushi1 from "./assets/sushi-1.png";
import playcircle from "./assets/play-circle.svg";
import user from "./assets/user.png";
import sushi3 from "./assets/sushi-3.png";
import sushi2 from "./assets/sushi-2.png";
import arrowUpRight from "./assets/arrow-up-right.svg";
import arrowRight from "./assets/arrow-right.svg";
import arrowVertical from "./assets/arrow-vertical.svg";
import arrowHorizontal from "./assets/arrow-horizontal.svg";
import sushi9 from "./assets/sushi-9.png";
import sushi8 from "./assets/sushi-8.png";
import sushi7 from "./assets/sushi-7.png";
import sushi6 from "./assets/sushi-6.png";
import sushi5 from "./assets/sushi-5.png";
import sushi4 from "./assets/sushi-4.png";
import facebook from "./assets/facebook.svg";
import twitter from "./assets/twitter.svg";
import instagram from "./assets/instagram.svg";

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
    <>
      <header>
        <nav className={classes.header__nav}>
          <div className={classes.header__logo}>
            <h4 data-aos="fade-down">Sushiman</h4>
            <div className={classes.header__logo_overlay}></div>
          </div>
          <ul className={classes.header__menu} data-aos="fade-down">
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
          <ul className={classes.header__menu_mobile} data-aos="fade-down">
            {" "}
            {/*This will need name change for the class */}
            <li>
              <img src={menuIcon} alt="menu" />
            </li>
          </ul>
        </nav>
      </header>
      <section className={classes.hero}>
        <div className={classes.hero_image}>
          <img src={sushi1} alt="sushi" data-aos="fade-up" />
          <h2 data-aos="fade-up">
            日 <br />
            本 <br />食
          </h2>
          <div className={classes.hero_image__overlay}></div>
        </div>
        <div className={classes.hero_content}>
          <div className={classes.hero_content_info} data-aos="fade-left">
            <h1>Feel the taste of Japanses food</h1>
            <p>
              Feel the taste of the most popular Japanse food from anywhere and
              any time.
            </p>
            <div className={classes.hero_content__buttons}>
              <button className={classes.hero_content__order_button}>
                Order Now
              </button>
              <button className={classes.hero_content__play_button}>
                <img src={playcircle} alt="play" />
                How to Order
              </button>
            </div>
          </div>
          <div className={classes.hero_content__testimonial}>
            <div className={classes.hero_content__customer}>
              <h4>
                24<span>k+</span>
              </h4>
              <p>Happy Customers</p>
            </div>
            <div className={classes.hero_content__review}>
              <img src={user} alt="user" />
              <p>
                "This is the best Japanses food delivery service that ever
                existed."
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.about_us} id="about-us">
        <div className={classes.about_us__image}>
          <div className={classes.about_us__image_sushi3} data-aos="fade-right">
            <img src={sushi3} alt="sushi3" />
          </div>
          <button className={classes.about_us__button}>
            Learn More <img src={arrowUpRight} alt="up right arrow" />
          </button>
          <div className={classes.about_us__image_sushi2} data-aos="fade-right">
            <img src={sushi2} alt="sushi3" />
          </div>
        </div>
        <div className={classes.about_us__content} data-aos="fade-left">
          <p className={"sushi__subtitle"}>About Us / 私たちに関しては</p>
          <h3 className={"sushi__title"}>
            Our mission is to bring true japanese flavours to you.
          </h3>
          <p className={"sushi__description"}>
            {" "}
            We will continue to provide the experience of Omotenashi, the
            Japanese mindset of hospitality, with our shopping and dining for
            our customers.
          </p>
        </div>
      </section>
      <section className={classes.popular_foods} id="menu">
        <h2 className={classes.popular_foot__title} data-aos="flip-up">
          Popular Food / 人気
        </h2>
        <div className={classes.popular_foods__filters} data-aos="fade-up">
          <button className={classes.popular_foods__filter_btn_active}>
            All
          </button>
          <button className={classes.popular_foods__filter_btn}>
            <img src={sushi9} alt="sushi 9" />
            Sushi
          </button>
          <button className={classes.popular_foods__filter_btn}>
            <img src={sushi8} alt="sushi 8" />
            Ramen
          </button>
          <button className={classes.popular_foods__filter_btn}>
            <img src={sushi7} alt="sushi 7" />
            Udon
          </button>
          <button className={classes.popular_foods__filter_btn}>
            <img src={sushi6} alt="sushi 6" />
            Danggo
          </button>
          <button className={classes.popular_foods__filter_btn}>Others</button>
        </div>
        <div className={classes.popular_foods__catalogue} data-aos="fade-up">
          <article className={classes.popular_foods__card}>
            <img
              className={classes.popular_foods__card_img}
              src={sushi12}
              alt="sushi12"
            />
            <h4 className={classes.popular_foods__card_title}>Chezu Sushi</h4>
            <div className={classes.popular_foods__card_details}>
              <div className={classes.popular_foods__card_rating}>
                <img src={star} alt="star" />
                <p>4.6</p>
              </div>
              <p className={classes.popular_foods__card_price}>$21</p>
            </div>
          </article>
          <article
            className={`${classes.popular_foods__card} ${classes.active}`}
          >
            <img
              className={classes.popular_foods__card_img}
              src={sushi11}
              alt="sushi11"
            />
            <h4 className={classes.popular_foods__card_title}>
              Originale Sushi
            </h4>
            <div className={classes.popular_foods__card_details}>
              <div className={classes.popular_foods__card_rating}>
                <img src={star} alt="star" />
                <p>4.9</p>
              </div>
              <p className={classes.popular_foods__card_price}>$25</p>
            </div>
          </article>
          <article className={classes.popular_foods__card}>
            <img
              className={classes.popular_foods__card_img}
              src={sushi10}
              alt="sushi10"
            />
            <h4 className={classes.popular_foods__card_title}>Ramen Legendo</h4>
            <div className={classes.popular_foods__card_details}>
              <div className={classes.popular_foods__card_rating}>
                <img src={star} alt="star" />
                <p>4.8</p>
              </div>
              <p className={classes.popular_foods__card_price}>$20</p>
            </div>
          </article>
        </div>
        <button className={classes.popular_foods__button}>
          Explore food <img src={arrowRight} alt="right arrow" />
        </button>
      </section>
      <section className={classes.trending} id="food">
        <section className={classes.trending__sushi}>
          <div className={classes.trending__content}>
            <p className={"sushi__subtitle"}>What’s Trending / トレンド</p>
            <h3 className={"sushi__title"}>Japanese Sushi</h3>
            <p className={"sushi__description"}>
              Feel the taste of the most delicious Sushi here.
            </p>
            <ul className={`${classes.trending__list} flex_between`}>
              <li>
                <div className={`${classes.trending__icon} flex_center`}>
                  <img src={check} alt="check icon" />
                </div>
                <p>Make Sushi</p>
              </li>
              <li>
                <div className={`${classes.trending__icon} flex_center`}>
                  <img src={check} alt="check icon" />
                </div>
                <p>Oshizushi</p>
              </li>
              <li>
                <div className={`${classes.trending__icon} flex_center`}>
                  <img src={check} alt="check icon" />
                </div>
                <p>Nigiri Sushi</p>
              </li>
              <li>
                <div className={`${classes.trending__icon} flex_center`}>
                  <img src={check} alt="check icon" />
                </div>
                <p>Inari Sushi</p>
              </li>
              <li>
                <div className={`${classes.trending__icon} flex_center`}>
                  <img src={check} alt="check icon" />
                </div>
                <p>Temaki Sushi</p>
              </li>
              <li>
                <div className={`${classes.trending__icon} flex_center`}>
                  <img src={check} alt="check icon" />
                </div>
                <p>Uramaki Sushi</p>
              </li>
            </ul>
          </div>
          <div className={`${classes.trending__image} flex_center`}>
            <img src={sushi5} alt="sushi-5" />

            <div
              className={`${classes.trending__arrow} ${classes.trending__arrow_left}`}
            >
              <img src={arrowVertical} alt="arrow vertical" />
            </div>

            <div
              className={`${classes.trending__arrow} ${classes.trending__arrow_bottom}`}
            >
              <img src={arrowHorizontal} alt="arrow horizonal" />
            </div>
          </div>
        </section>
        <div className={classes.trending__discover} data-aos="zoom-in">
          <p>Discover</p>
        </div>
        <section className={classes.trending__sushi}>
          <div className={`${classes.trending__image} flex_center`}>
            <img src={sushi4} alt="sushi-4" />

            <div
              className={`${classes.trending__arrow} ${classes.trending__arrow_top}`}
            >
              <img src={arrowHorizontal} alt="arrow vertical" />
            </div>

            <div
              className={`${classes.trending__arrow} ${classes.trending__arrow_right}`}
            >
              <img src={arrowVertical} alt="arrow horizonal" />
            </div>
          </div>
          <div className={classes.trending__content}>
            <p className={"sushi__subtitle"}>What’s Trending / トレンド</p>
            <h3 className={"sushi__title"}>Japanese Drinks</h3>
            <p className={"sushi__description"}>
              Feel the taste of most delicious Japanese drinks here.
            </p>
            <ul className={`${classes.trending__list} flex_between`}>
              <li>
                <div className={`${classes.trending__icon} flex_center`}>
                  <img src={check} alt="check icon" />
                </div>
                <p>Oruncha</p>
              </li>
              <li>
                <div className={`${classes.trending__icon} flex_center`}>
                  <img src={check} alt="check icon" />
                </div>
                <p>Ofukucha</p>
              </li>
              <li>
                <div className={`${classes.trending__icon} flex_center`}>
                  <img src={check} alt="check icon" />
                </div>
                <p>Sakura Tea</p>
              </li>
              <li>
                <div className={`${classes.trending__icon} flex_center`}>
                  <img src={check} alt="check icon" />
                </div>
                <p>Kombu-cha</p>
              </li>
              <li>
                <div className={`${classes.trending__icon} flex_center`}>
                  <img src={check} alt="check icon" />
                </div>
                <p>Aojiru</p>
              </li>
              <li>
                <div className={`${classes.trending__icon} flex_center`}>
                  <img src={check} alt="check icon" />
                </div>
                <p>Mugicha</p>
              </li>
            </ul>
          </div>
        </section>
      </section>

      <section className={`${classes.subscription} flex_center`} id="servcies">
        <h2>
          Get Offers straight <br />
          to your inbox
        </h2>
        <p>Sign up for the Sushiman newsletter</p>
        <div className={classes.subsription__form}>
          <input type="text" placeholder="Eneter your email" />
          <button>Get Started</button>
        </div>
      </section>

      <footer className={`${classes.footer} flex_between`}>
        <h3 className={classes.footer__logo}>
          <span>Sushi</span>man
        </h3>

        <ul className={classes.footer__nav}>
          <li>
            <a href="#menu">Menu</a>{" "}
          </li>
          <li>
            <a href="#food">Food</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
        </ul>

        <ul className={classes.footer__social}>
          <li className={'flex_center'}>
            <img src={facebook} alt="face" />
          </li>
          <li className={'flex_center'}>
            <img src={twitter} alt="x" />
          </li>
          <li className={'flex_center'}>
            <img src={instagram} alt="inst" />
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
