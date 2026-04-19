import { useCarousel } from "../../hooks/useCarousel";
import ProductCard from "./ProductCard";
import styles from "./Carousel.module.css";

export default function Carousel({ items, config }) {
	const { index, next, prev, goToSlide } = useCarousel(items.length);
	const showArrows = config?.showArrows !== false;
	const showDots = config?.showDots !== false;

	return (
		<div className={styles.carouselContainer}>
			<div className={styles.carouselWrapper}>
				<div 
					className={styles.carouselTrack}
					style={{ 
						transform: `translateX(-${index * 100}%)`,
						transitionDuration: `${config?.transitionDuration || 300}ms`
					}}
				>
					{items.map((item) => (
						<div 
							key={item.id} 
							className={styles.carouselSlide}
						>
							<ProductCard product={item} />
						</div>
					))}
				</div>
			</div>

			<div className={styles.controls}>
				{showArrows && (
					<div className={styles.arrowsContainer}>
						<button 
							className={styles.navButton} 
							onClick={prev}
							aria-label="Previous slide"
						>
							←
						</button>

						{showDots && (
							<div className={styles.carouselDots}>
								{items.map((_, i) => (
									<button
										key={i}
										className={`${styles.dot} ${i === index ? styles.active : ''}`}
										onClick={() => goToSlide(i)}
										aria-label={`Go to slide ${i + 1}`}
									/>
								))}
							</div>
						)}

						<button 
							className={styles.navButton} 
							onClick={next}
							aria-label="Next slide"
						>
							→
						</button>
					</div>
				)}
			</div>
		</div>
	);
}