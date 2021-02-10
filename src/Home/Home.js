import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Product from "../Product/Product";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          className="home_carausal home__image"
        >
          <div className="img_div">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Evergreen/042020/US-EN_052120_FreeTier_ACQ_GW_Hero_D_1500x600_CV12._CB430645978_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Herotator/HeroPC_1500x600_1._CB412400102_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn1.desidime.com/topics/photos/1146218/original/Gateway_banner_Desk_1500x600._CB432831100_.jpg?1589794215"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn0.desidime.com/topics/photos/1171153/original/D14588853_IN_WLME_Xiaomi_Landing_Page_DesktopTallHero_1500x600._CB430441142_.jpg?1595274139"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M02/Launch/SaleStarts12PM/D20414286_IN_WLME_SamsungGalaxy_M02_New_Launch_DesktopTallHero_1500x600_1._CB661238031_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/Winter_1500x600_updated._CB661178843_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Gateway_JWELSSH/Jan/SupersaverSSH/Super-saver-1500x600-EOSS-1._CB411551980_.jpg"
              alt=""
            />
          </div>
        </Carousel>
        <div className="home__row">
          {/* Product*/}
          <Product
            id="4903850"
            title="Samsung LC59655Jk545XW 49' LED Watch"
            price={189.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={5}
          />
          <Product
            id="4903851"
            title="Amazon Echo Plus (2nd Generation, Charcoal) BH #AMECHODOTP2B • MFR #B0794W1SKP"
            price={299.99}
            image="https://static.bhphoto.com/images/images500x500/amazon_b0794w1skp_echo_plus_2nd_generation_1539618736_1437070.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          {/* Product*/}
          <Product
            id="4903852"
            title="New Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Silver (2nd Generation)"
            price={346.56}
            image="https://images-na.ssl-images-amazon.com/images/I/81lqq8UF5ML._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="4903853"
            title="Apple MacBook Pro MV992HN/A Ultrabook (Core i5 8th Gen/8 GB/256 GB SSD/macOS Mojave)"
            price={489.65}
            image="https://www.apple.com/newsroom/images/product/accessories/standard/Apple_MacBook-Pro-Battery_062019_big.jpg.medium.jpg"
            rating={5}
          />
          <Product
            id="4903854"
            title="AirPods Pro
            From ₹2931/mo.Per Month with EMI,Footnote** or ₹24900"
            price={145.26}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22?wid=2000&hei=2000&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1591634795000"
            rating={2}
          />
        </div>
        <div className="home__row">
          {/* Product*/}
          <Product
            id="4903855"
            title="
            Samsung 108 cm (43 Inches) Wondertainment Series Ultra HD LED Smart TV UA43TUE60FKXXL (Black) (2020 model)"
            price={2586.26}
            image="https://images-na.ssl-images-amazon.com/images/I/71vasaez7OL._SL1500_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
