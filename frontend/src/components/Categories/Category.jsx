import React from "react";
import styles from "./Category.module.css";

const Category = ({ link, imgSrc, label }) => {
  return (
    <a href={link} className={styles.Category} aria-label={label}>
      <div className={styles.linkContent}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} alt={label} src={imgSrc} />
        </div>
        <span className={styles.linkLabel}>{label}</span>
      </div>
    </a>
  );
};

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Category
        link="/big-shopping-utsav-sale-store?fm=neo%2Fmerchandising&amp;iid=M_974f430e-b7e8-4fe3-812a-394b64fb6106_1_KUZ8W60OFFMO_MC.D7M05PTZUYRA"
        imgSrc="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/698ba0cebe456aaf.jpg?q=100"
        label="Top Offers"
      />
      <Category
        link="/mobile-phones-store?param=47859&amp;fm=neo%2Fmerchandising&amp;iid=M_974f430e-b7e8-4fe3-812a-394b64fb6106_1_KUZ8W60OFFMO_MC.BYIXDBQAWBHQ"
        imgSrc="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/44e10b16e649b691.jpg?q=100"
        label="Mobiles & Tablets"
      />
      <Category
        link="/tv-appliances-big-shopping-utsav-oct24-store?fm=neo%2Fmerchandising&amp;iid=M_974f430e-b7e8-4fe3-812a-394b64fb6106_1_KUZ8W60OFFMO_MC.8TVKUWT87M16"
        imgSrc="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/717b5077a5e25324.jpg?q=100"
        label="TVs & Appliances"
      />
      <Category
        link="/elec-big-dussehra-24-sale-store?fm=neo%2Fmerchandising&amp;iid=M_974f430e-b7e8-4fe3-812a-394b64fb6106_1_KUZ8W60OFFMO_MC.KCBBC8GGWR9V"
        imgSrc="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/4da1d0d19350cc84.jpg?q=100"
        label="Electronics"
      />
      <Category
        link="/bbd-lb24-sale-store?fm=neo%2Fmerchandising&amp;iid=M_974f430e-b7e8-4fe3-812a-394b64fb6106_1_KUZ8W60OFFMO_MC.SPCD9CW12PGK"
        imgSrc="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/9d4e9c605fc1d2d3.jpg?q=100"
        label="Fashion"
      />
      <Category
        link="/bds-bgm-sale24-store?fm=neo%2Fmerchandising&amp;iid=M_974f430e-b7e8-4fe3-812a-394b64fb6106_1_KUZ8W60OFFMO_MC.3HG9V6MXYB5P"
        imgSrc="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/a5e656672d0548dd.jpg?q=100"
        label="Beauty"
      />
      <Category
        link="/hnf-bds2-sale-store?fm=neo%2Fmerchandising&amp;iid=M_974f430e-b7e8-4fe3-812a-394b64fb6106_1_KUZ8W60OFFMO_MC.IF1WVE47NIXO"
        imgSrc="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/5b813b64a3179898.jpg?q=100"
        label="Home & Kitchen"
      />
      <Category
        link="/fur-big-diwali-sale-store?fm=neo%2Fmerchandising&amp;iid=M_974f430e-b7e8-4fe3-812a-394b64fb6106_1_KUZ8W60OFFMO_MC.DF4ISSCHXW05"
        imgSrc="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/7a5e96c10ada8a56.jpg?q=100"
        label="Furniture"
      />
      <Category
        link="/travel/flights?param=itsimetofly-boknow-travel-utsav-2024&amp;fm=neo%2Fmerchandising&amp;iid=M_974f430e-b7e8-4fe3-812a-394b64fb6106_1_KUZ8W60OFFMO_MC.9ODHZCZ094O6"
        imgSrc="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/57fe1ffe54569c41.jpg?q=100"
        label="Travel"
      />
      <Category
        link="/grocery-supermart-store?marketplace=GROCERY&amp;fm=neo%2Fmerchandising&amp;iid=M_974f430e-b7e8-4fe3-812a-394b64fb6106_1_KUZ8W60OFFMO_MC.4BYE6NISISOE"
        imgSrc="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/25f400c36bc3487d.jpg?q=100"
        label="Grocery"
      />
    </div>
  );
};

export default Navigation;