import content from "../data/content.js";

// Simulate network delay (1000-1500ms)
const delay = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Simulate occasional random errors (10% chance)
const shouldFail = () => Math.random() < 0.1;

export const fetchHeroContent = async () => {
  await delay(Math.random() * 500 + 1000);

  if (shouldFail()) {
    throw new Error("Failed to load hero content");
  }

  return content.hero;
};

export const fetchFeaturesContent = async () => {
  await delay(Math.random() * 500 + 1000);

  if (shouldFail()) {
    throw new Error("Failed to load features content");
  }

  return content.featuresSection;
};

export const fetchNavigationContent = async () => {
  await delay(Math.random() * 300 + 500);

  if (shouldFail()) {
    throw new Error("Failed to load navigation content");
  }

  return content.navigation;
};