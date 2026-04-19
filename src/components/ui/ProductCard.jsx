import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
	return (
		<div className={styles.productItem}>
			<div className={`${styles.titleBox} ${product.highlight ? styles.highlight : ''}`}>
				<h3 className={styles.title}>{product.title}</h3>
			</div>
			<div className={styles.imageWrapper}>
				<img src={product.image} alt={product.title} />
			</div>
		</div>
	);
}
