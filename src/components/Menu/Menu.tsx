import React from "react";
import Navigation from "../Header/Header";
import { products } from "./products";
import styles from "./Menu.module.css";
import ProductCard from "../ProductCard/ProductCard";


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
                <ProductCard key={product.id} product={product}/>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
