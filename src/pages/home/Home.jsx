import React from "react";
import styles from "./Home.module.css";
import Contact from "../../components/contact/Contact";
import FeatureCard from "../../components/featureCards/FeatureCards";
import CategoryPage from "../../components/sharedComponents/categoryPage/CategoryPage";
import ShopCard from "../../components/ShopInfo/ShopInfo";
import HeroImage from "../../assets/home/heroImage.webp";
import France from "../../assets/shops/France.webp";
import Italy from "../../assets/shops/Italy.webp";
import Georgia from "../../assets/shops/Georgia.jpg";
import Greece from "../../assets/shops/Greece.jpg";

function Home() {
  return (
    <main className={styles.homeWrapper}>
      <section className={styles.heroSection}>
        <img
          src={HeroImage}
          alt="couple"
          className={styles.heroImage}
          loading="lazy"
          decoding="async"
        />
      </section>

      <section className={styles.brandStory}>
        <div className={styles.brandText}>
          <h1 className={styles.brandTitle}>Our Story: Crafted for You</h1>
          <p className={styles.brandText}>
            At{" "}
            <span
              style={{
                color: "#224abe",
                fontWeight: "600",
                fontStyle: "italic",
              }}
            >
              StyleHub
            </span>
            , fashion is more than clothing — it’s a way to express your unique
            personality with style, comfort, and quality. Founded on timeless
            design and accessible fashion, we empower you to look and feel your
            best every day, whether at work, weekend adventures, or special
            moments.
          </p>
        </div>
        <div className={styles.shopList}>
          <ShopCard imageSrc={France} title="France" />
          <ShopCard imageSrc={Italy} title="Italy" />
          <ShopCard imageSrc={Georgia} title="Georgia" />
          <ShopCard imageSrc={Greece} title="Greece" />
        </div>
      </section>

      <section className={styles.newArrivalsContent}>
        <h2 className={styles.newArrivalsHeader}>New Arrivals</h2>
        <CategoryPage category="New" layout="swiper" />
      </section>

      <Contact />
      <FeatureCard />
    </main>
  );
}
export default Home;
