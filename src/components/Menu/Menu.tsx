import React from "react";
import Navigation from "../Header/Header";
import { products } from "./products";
import styles from "./Menu.module.css";


const groupProductsByCategory = () => {
  const categories = [...new Set(products.map((product) => product.category))];
  return categories.map((category) => ({
    category,
    items: products.filter((product) => product.category === category),
  }));
};

const Menu: React.FC = () => {
  const groupedProducts = groupProductsByCategory();

  return (
    <div>
      <Navigation />
      <div className={styles.menuContainer}>
        <h1>Our Menu</h1>
        {groupedProducts.map((group) => (
          <div key={group.category} className={styles.categorySection}>
            <h2 className={styles.category}>{group.category}</h2>
            <div className={styles.productList}>
              {group.items.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <div className={styles.productImageContainer}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={styles.productImage}
                    />
                  </div>
                  <h3>{product.name}</h3>
                  <div className={styles.priceList}>
                    {Object.entries(product.price).map(([size, price]) => (
                      <div key={size} className={styles.priceRow}>
                        <span className={styles.size}>{size}</span>
                        <span className={styles.price}>{price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
