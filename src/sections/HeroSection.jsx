import GradientText from "../components/ui/GradientText";
import { useContent } from "../hooks/useContent";
import { fetchHeroContent } from "../services/api";

export default function HeroSection() {
	const { data, loading, error, retry } = useContent(fetchHeroContent);

	if (loading) return <div>Loading...</div>;
	if (error) return <button onClick={retry}>Retry</button>;

	return (
		<section className="hero">
			<div className="container">
				<h1>
					{data.headlinePrefix} <br />
					<GradientText>{data.headlineGradient}</GradientText>
				</h1>

				<p>{data.subheadline}</p>

				<button className="cta">{data.cta}</button>
			</div>
		</section>
	);
}
