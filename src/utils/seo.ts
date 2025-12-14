import { BUSINESS_INFO } from '@/constants/business';

export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

export function generateOrganizationSchema(): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BUSINESS_INFO.name,
    url: 'https://vkfans.com',
    logo: 'https://vkfans.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS_INFO.contact.phone,
      contactType: 'Customer Service',
      email: BUSINESS_INFO.contact.email,
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.line1,
      addressLocality: BUSINESS_INFO.address.line2,
      addressRegion: BUSINESS_INFO.address.city,
      postalCode: BUSINESS_INFO.address.pincode,
      addressCountry: 'IN',
    },
    sameAs: [
      BUSINESS_INFO.social.facebook,
      BUSINESS_INFO.social.twitter,
      BUSINESS_INFO.social.linkedin,
      BUSINESS_INFO.social.instagram,
    ],
  };
}

export function generateLocalBusinessSchema(): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS_INFO.name,
    image: 'https://vkfans.com/business-photo.jpg',
    '@id': 'https://vkfans.com',
    url: 'https://vkfans.com',
    telephone: BUSINESS_INFO.contact.phone,
    email: BUSINESS_INFO.contact.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.line1,
      addressLocality: BUSINESS_INFO.address.line2,
      addressRegion: BUSINESS_INFO.address.city,
      postalCode: BUSINESS_INFO.address.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.8386,
      longitude: 77.0914,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  price: number;
  image: string;
  sku: string;
}): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    sku: product.sku,
    brand: {
      '@type': 'Brand',
      name: BUSINESS_INFO.name,
    },
    offers: {
      '@type': 'Offer',
      url: 'https://vkfans.com/product-catalog',
      priceCurrency: 'INR',
      price: product.price,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: BUSINESS_INFO.name,
      },
    },
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://vkfans.com${item.url}`,
    })),
  };
}