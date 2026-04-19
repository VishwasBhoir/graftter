import styles from './FloatingShape.module.css';

export default function FloatingShape({ type, color, position, size }) {
	const positionClass = `position-${position}`;

	return (
		<div
			className={`${styles.shape} ${styles[type]} ${styles[positionClass]}`}
			style={{
				'--shape-color': color,
				'--shape-size': size,
			}}
			aria-hidden="true"
		/>
	);
}
