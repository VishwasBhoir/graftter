import GradientText from "../components/ui/GradientText";
import { useContent } from "../hooks/useContent";
import { fetchFeaturesContent } from "../services/api";
import Carousel from "../components/ui/Carousel";
import Skeleton from "../components/ui/Skeleton";

export default function FeaturesSection() {
  const { data, loading, error, retry } = useContent(fetchFeaturesContent);

  if (loading) return <Skeleton type="features" />;
  if (error)
    return (
      <div className="features">
        <p className="error-message">Error loading features</p>
        <button className="retry-btn" onClick={retry}>Retry</button>
      </div>
    );

  return (
    <section className="features">
      <div className="container">
        <h2 className="features-title">
          {data.title} <GradientText>{data.titleAccent}</GradientText> {data.titleSuffix}
        </h2>

        <p className="features-subtitle">{data.subtitle}</p>

        <div className="divider"></div>

        <Carousel items={data.products} config={data.carousel} />
      </div>
    </section>
  );
}