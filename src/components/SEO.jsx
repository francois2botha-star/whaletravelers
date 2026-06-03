import { Helmet } from "react-helmet";

const SEO = ({
  title = "Dial-a-Driver Hermanus | Shuttle & Private Driver Services",
  description = "Reliable shuttle, airport transfers and private drivers in Hermanus and the Western Cape. 24/7 professional chauffeur services.",
  image = "https://francois2botha-star.github.io/dial-a-driver-hermanus/og-image.jpg",
  url = "https://francois2botha-star.github.io/dial-a-driver-hermanus"
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
);

export default SEO;