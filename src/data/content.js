import pos from '../assets/Carousel_img_1.JPG';
import selfService from '../assets/Carousel_img_2.JPG';
import kitchen from '../assets/Carousel_img_3.JPG';

const content = {
  "navigation": {
    "logo": {
      "src": "/assets/logo.svg",
      "alt": "Grafterr"
    },
    "links": ["Products", "Solutions"],
    "cta": "Get Started"
  },
  "hero": {
    "headlinePrefix": "Looking for a new",
    "headlineGradient": "technology provider?",
    "subheadline": "Explore our success stories to see how businesses like yours have transformed with Grafterr's technology.",
    "cta": "Learn more"
  },
  "featuresSection": {
    "title": "More ways",
    "titleAccent": "Grafterr",
    "titleSuffix": "can help you grow your business",
    "subtitle": "An award-winning, end-to-end restaurant technology & payments platform, designed to streamline food service and automate complex venue operations.",
    "carousel": {
      "itemsPerView": {
        "mobile": 1,
        "tablet": 2,
        "desktop": 3
      },
      "showArrows": true,
      "showDots": false,
      "transitionDuration": 300
    },
    "products": [
      {
        "id": 1,
        "title": "Point of sale",
        "image": pos,
        "highlight": true
      },
      {
        "id": 2,
        "title": "Self-service",
        "image": selfService
      },
      {
        "id": 3,
        "title": "Kitchen management",
        "image": kitchen
      }
    ]
  }
};

export default content;
