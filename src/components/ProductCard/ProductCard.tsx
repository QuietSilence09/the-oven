import React, { useState } from "react";
import styles from "../Menu/Menu.module.css";
import { Product } from "../Menu/products";
import Modal from "../Modal/Modal";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>(
    Object.keys(product.price)[0]
  );
  const HandleConfirm = () => {
    console.log(`Added to cart: ${product.name} - ${selectedSize} `);
    setIsModalOpen(true);
  }
  return (
    <div className={styles.productCard}>
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
        <button onClick={() => setIsModalOpen(true)}>Choose Size</button>
        {
             isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                    <h3>Choose the size</h3>
                    <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                        {Object.keys(product.price).map( size => (
                            <option key={size} value={size}>
                                {size} - {product.price[size]}
                            </option>
                        ))}
                    </select>
                    <div style={{marginTop: '5px'}}>
                        <button onClick={HandleConfirm}>Confirm</button>
                        <button onClick={() => setIsModalOpen(false)}>Cancel</button>
                    </div>
                </Modal>
             )
        }
      </div>
    </div>
  );
};

export default ProductCard;
