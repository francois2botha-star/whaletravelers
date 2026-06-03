import { Helmet } from 'react-helmet';

const LocalBusinessSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Dial-a-Driver Hermanus',
    'image': 'https://francois2botha-star.github.io/dial-a-driver-hermanus/og-image.jpg',
    'description': 'Professional shuttle services, airport transfers and private drivers in Hermanus and the Western Cape',
    'telephone': '+27 64 799 7924',
    'url': 'https://francois2botha-star.github.io/dial-a-driver-hermanus',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Hermanus',
      'addressRegion': 'Western Cape',
      'postalCode': '7200',
      'addressCountry': 'ZA'
    },
    'areaServed': [
      {
        '@type': 'City',
        'name': 'Hermanus'
      },
      {
        '@type': 'City',
        'name': 'Cape Town'
      },
      {
        '@type': 'AdministrativeArea',
        'name': 'Western Cape'
      }
    ],
    'priceRange': '$$',
    'sameAs': [
      'https://www.facebook.com/dialadriverhermanus',
      'https://wa.me/27647997924'
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default LocalBusinessSchema;