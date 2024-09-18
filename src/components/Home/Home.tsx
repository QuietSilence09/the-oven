import React, { useState } from "react";
import Header from "../Header/Header";
import styles from "./Home.module.css";
import burger from "../../images/fatburger_0001_DoubleFatCheese-541x633-removebg-preview.png";
import pizza from "../../images/pexels-renestrgar-13814644-removebg-preview.png";
import wings from "../../images/wings-removebg-preview.png";

const Home: React.FC = () => {
  const [currentDish, setCurrentDish] = useState(burger);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleDishChange = (newDish: string) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentDish(newDish);
        setIsAnimating(false);
      }, 500);
    }
  };
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.special}>
          <div className={styles.text}>
            <p className={styles.specialTitle}>Best Halal Food</p>
            <h1 className={styles.pizzaName}>The Oven</h1>
            <p className={styles.description}>
              We offer a variety of halal dishes freshly prepared for you. Order
              now to experience the taste of authentic halal fast food.
            </p>
            <div className={styles.smallPizzas}>
              <img
                onClick={() => handleDishChange(burger)}
                src={burger}
                className={styles.smallPizzaImg}
                alt="Burger"
              />
              <img
                onClick={() => handleDishChange(pizza)}
                src={pizza}
                className={styles.smallPizzaImg}
                alt="Pizza"
              />
              <img
                onClick={() => handleDishChange(wings)}
                src={wings}
                className={styles.smallPizzaImg}
                alt="Wings"
              />
            </div>
          </div>
          <div className={styles.currentDish}>
            <img
              src={currentDish}
              alt="Main"
              className={`${styles.pizzaImg} ${
                isAnimating ? styles.slideOut : ""
              }`}
            ></img>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>© 2024 Restaurant The Oven</p>
      </footer>
    </div>
  );
};

export default Home;
